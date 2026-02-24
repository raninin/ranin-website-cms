"use client";

import { useSiteContent } from "../hooks/use-site-content";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  TextArea,
} from "../components/editor-shell";
import type { SiteMetaData } from "@/lib/data/defaults/site-meta";
import { defaultSiteMeta } from "@/lib/data/defaults/site-meta";

export function SiteMetaEditor() {
  const { data, setData, loading, saving, save, status } =
    useSiteContent<SiteMetaData>("site-meta", defaultSiteMeta);

  const update = (patch: Partial<SiteMetaData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <EditorShell
      title="Site Settings"
      description="Global site metadata and SEO settings"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Meta Tags">
        <Field label="Site Title">
          <TextInput
            value={data.title}
            onChange={(v) => update({ title: v })}
          />
        </Field>
        <Field label="Site Description">
          <TextArea
            value={data.description}
            onChange={(v) => update({ description: v })}
            rows={3}
          />
        </Field>
      </FieldGroup>
    </EditorShell>
  );
}
