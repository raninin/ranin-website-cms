"use client";

import { useState, useEffect } from "react";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  NumberInput,
} from "../components/editor-shell";
import { ImageUpload } from "../components/image-upload";

interface Certification {
  id: number;
  title: string;
  subtitle: string;
  logoUrl: string;
  sortOrder: number;
}

export function CertificationsEditor() {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"" | "saved" | "error">("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    logoUrl: "",
    sortOrder: 0,
  });

  const fetchCerts = async () => {
    try {
      const res = await fetch("/api/cms/certifications");
      const data = await res.json();
      setCerts(data);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    fetchCerts();
  }, []);

  const resetForm = () => {
    setForm({ title: "", subtitle: "", logoUrl: "", sortOrder: 0 });
    setEditingId(null);
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus("");
    try {
      if (editingId) {
        const res = await fetch("/api/cms/certifications", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...form }),
        });
        setStatus(res.ok ? "saved" : "error");
      } else {
        const res = await fetch("/api/cms/certifications", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setStatus(res.ok ? "saved" : "error");
      }
      await fetchCerts();
      resetForm();
    } catch {
      setStatus("error");
    }
    setSaving(false);
    setTimeout(() => setStatus(""), 3000);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this certification?")) return;
    await fetch(`/api/cms/certifications?id=${id}`, { method: "DELETE" });
    await fetchCerts();
  };

  const handleEdit = (cert: Certification) => {
    setEditingId(cert.id);
    setForm({
      title: cert.title,
      subtitle: cert.subtitle,
      logoUrl: cert.logoUrl,
      sortOrder: cert.sortOrder,
    });
  };

  return (
    <EditorShell
      title="Certifications"
      description="Quality certifications and accreditations"
      saving={saving}
      status={status}
      onSave={handleSave}
      loading={loading}
    >
      <FieldGroup label={editingId ? "Edit Certification" : "Add New Certification"}>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Title">
            <TextInput
              value={form.title}
              onChange={(v) => setForm({ ...form, title: v })}
              placeholder="e.g. ISO 9001:2015"
            />
          </Field>
          <Field label="Subtitle">
            <TextInput
              value={form.subtitle}
              onChange={(v) => setForm({ ...form, subtitle: v })}
              placeholder="e.g. Quality Management System"
            />
          </Field>
          <Field label="Logo">
            <ImageUpload
              value={form.logoUrl}
              onChange={(v) => setForm({ ...form, logoUrl: v })}
            />
          </Field>
          <Field label="Sort Order">
            <NumberInput
              value={form.sortOrder}
              onChange={(v) => setForm({ ...form, sortOrder: v })}
            />
          </Field>
        </div>
        {editingId && (
          <button
            onClick={resetForm}
            className="text-xs text-zinc-500 hover:text-white"
          >
            Cancel editing
          </button>
        )}
      </FieldGroup>

      <FieldGroup label="Current Certifications">
        {certs.length === 0 && (
          <p className="text-sm text-zinc-500">No certifications added yet.</p>
        )}
        <div className="space-y-2">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center justify-between border border-zinc-800 bg-zinc-800/50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                {cert.logoUrl && (
                  <img
                    src={cert.logoUrl}
                    alt={cert.title}
                    className="h-10 w-auto bg-white/10 object-contain p-1"
                  />
                )}
                <div>
                  <p className="text-sm font-medium text-white">{cert.title}</p>
                  <p className="text-xs text-zinc-500">{cert.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(cert)}
                  className="text-xs text-zinc-400 hover:text-blue-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cert.id)}
                  className="text-xs text-zinc-400 hover:text-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </FieldGroup>
    </EditorShell>
  );
}
