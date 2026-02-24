"use client";

import { useState, useEffect } from "react";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  NumberInput,
  AddButton,
  RemoveButton,
} from "../components/editor-shell";
import { ImageUpload } from "../components/image-upload";

interface Partner {
  id: number;
  name: string;
  logoUrl: string;
  row: number;
  sortOrder: number;
}

export function PartnersEditor() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"" | "saved" | "error">("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", logoUrl: "", row: 1, sortOrder: 0 });

  const fetchPartners = async () => {
    try {
      const res = await fetch("/api/cms/partners");
      const data = await res.json();
      setPartners(data);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const resetForm = () => {
    setForm({ name: "", logoUrl: "", row: 1, sortOrder: 0 });
    setEditingId(null);
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus("");
    try {
      if (editingId) {
        const res = await fetch("/api/cms/partners", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...form }),
        });
        setStatus(res.ok ? "saved" : "error");
      } else {
        const res = await fetch("/api/cms/partners", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setStatus(res.ok ? "saved" : "error");
      }
      await fetchPartners();
      resetForm();
    } catch {
      setStatus("error");
    }
    setSaving(false);
    setTimeout(() => setStatus(""), 3000);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this partner?")) return;
    await fetch(`/api/cms/partners?id=${id}`, { method: "DELETE" });
    await fetchPartners();
  };

  const handleEdit = (partner: Partner) => {
    setEditingId(partner.id);
    setForm({
      name: partner.name,
      logoUrl: partner.logoUrl,
      row: partner.row,
      sortOrder: partner.sortOrder,
    });
  };

  return (
    <EditorShell
      title="Partners"
      description="Client and partner logos displayed on the homepage"
      saving={saving}
      status={status}
      onSave={handleSave}
      loading={loading}
    >
      <FieldGroup label={editingId ? "Edit Partner" : "Add New Partner"}>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Partner Name">
            <TextInput
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="e.g. Saudi Aramco"
            />
          </Field>
          <Field label="Logo">
            <ImageUpload
              value={form.logoUrl}
              onChange={(v) => setForm({ ...form, logoUrl: v })}
            />
          </Field>
          <Field label="Row (1 or 2)">
            <NumberInput
              value={form.row}
              onChange={(v) => setForm({ ...form, row: v })}
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

      <FieldGroup label="Current Partners">
        {partners.length === 0 && (
          <p className="text-sm text-zinc-500">No partners added yet.</p>
        )}
        <div className="space-y-2">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-between border border-zinc-800 bg-zinc-800/50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                {partner.logoUrl && (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-8 w-auto bg-white/10 object-contain p-1"
                  />
                )}
                <div>
                  <p className="text-sm text-white">{partner.name}</p>
                  <p className="text-xs text-zinc-500">
                    Row {partner.row} &middot; Order {partner.sortOrder}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(partner)}
                  className="text-xs text-zinc-400 hover:text-blue-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(partner.id)}
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
