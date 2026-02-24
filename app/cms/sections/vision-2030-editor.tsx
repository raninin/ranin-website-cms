"use client";

import { useSiteContent } from "../hooks/use-site-content";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  TextArea,
} from "../components/editor-shell";
import type { Vision2030Data } from "@/lib/data/defaults/vision-2030";
import { defaultVision2030 } from "@/lib/data/defaults/vision-2030";

export function Vision2030Editor() {
  const { data, setData, loading, saving, save, status } =
    useSiteContent<Vision2030Data>("vision-2030", defaultVision2030);

  const update = (patch: Partial<Vision2030Data>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <EditorShell
      title="Vision 2030"
      description="Vision 2030 alignment section on the homepage"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Content">
        <Field label="Heading">
          <TextInput
            value={data.heading}
            onChange={(v) => update({ heading: v })}
          />
        </Field>
        <Field label="Description">
          <TextArea
            value={data.description}
            onChange={(v) => update({ description: v })}
            rows={4}
          />
        </Field>
        <Field label="Tagline">
          <TextInput
            value={data.tagline}
            onChange={(v) => update({ tagline: v })}
          />
        </Field>
      </FieldGroup>
    </EditorShell>
  );
}
