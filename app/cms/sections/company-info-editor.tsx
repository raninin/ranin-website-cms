"use client";

import { useState, useEffect } from "react";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  TextArea,
} from "../components/editor-shell";
import { ImageUpload } from "../components/image-upload";

interface CompanyInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
  tagline: string;
  logoUrl: string;
}

const defaultForm: CompanyInfo = {
  address: "",
  phone: "",
  email: "",
  hours: "",
  mapEmbedUrl: "",
  tagline: "",
  logoUrl: "",
};

export function CompanyInfoEditor() {
  const [data, setData] = useState<CompanyInfo>(defaultForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"" | "saved" | "error">("");

  useEffect(() => {
    fetch("/api/cms/company-info")
      .then((r) => r.json())
      .then((result) => {
        if (result) {
          setData({
            address: result.address ?? "",
            phone: result.phone ?? "",
            email: result.email ?? "",
            hours: result.hours ?? "",
            mapEmbedUrl: result.mapEmbedUrl ?? "",
            tagline: result.tagline ?? "",
            logoUrl: result.logoUrl ?? "",
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const update = (patch: Partial<CompanyInfo>) =>
    setData((prev) => ({ ...prev, ...patch }));

  const handleSave = async () => {
    setSaving(true);
    setStatus("");
    try {
      const res = await fetch("/api/cms/company-info", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
    setSaving(false);
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <EditorShell
      title="Company Info"
      description="Company contact details and branding used across the site"
      saving={saving}
      status={status}
      onSave={handleSave}
      loading={loading}
    >
      <FieldGroup label="Contact Details">
        <Field label="Address">
          <TextArea
            value={data.address}
            onChange={(v) => update({ address: v })}
            rows={2}
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Phone">
            <TextInput
              value={data.phone}
              onChange={(v) => update({ phone: v })}
            />
          </Field>
          <Field label="Email">
            <TextInput
              value={data.email}
              onChange={(v) => update({ email: v })}
            />
          </Field>
        </div>
        <Field label="Business Hours">
          <TextArea
            value={data.hours}
            onChange={(v) => update({ hours: v })}
            rows={2}
          />
        </Field>
      </FieldGroup>

      <FieldGroup label="Branding">
        <Field label="Tagline">
          <TextArea
            value={data.tagline}
            onChange={(v) => update({ tagline: v })}
          />
        </Field>
        <ImageUpload
          value={data.logoUrl}
          onChange={(v) => update({ logoUrl: v })}
          label="Logo URL"
        />
      </FieldGroup>

      <FieldGroup label="Map">
        <Field label="Google Maps Embed URL">
          <TextArea
            value={data.mapEmbedUrl}
            onChange={(v) => update({ mapEmbedUrl: v })}
            rows={4}
          />
        </Field>
      </FieldGroup>
    </EditorShell>
  );
}
