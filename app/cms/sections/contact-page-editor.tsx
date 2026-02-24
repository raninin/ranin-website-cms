"use client";

import { useSiteContent } from "../hooks/use-site-content";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  TextArea,
} from "../components/editor-shell";
import { ImageUpload } from "../components/image-upload";
import type { ContactPageData } from "@/lib/data/defaults/contact-page";
import { defaultContactPage } from "@/lib/data/defaults/contact-page";

export function ContactPageEditor() {
  const { data, setData, loading, saving, save, status } =
    useSiteContent<ContactPageData>("contact-page", defaultContactPage);

  const update = (patch: Partial<ContactPageData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <EditorShell
      title="Contact Page"
      description="Contact page hero and settings"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Hero">
        <ImageUpload
          value={data.heroImage}
          onChange={(v) => update({ heroImage: v })}
          label="Hero Image"
        />
        <Field label="Hero Image Alt">
          <TextInput
            value={data.heroImageAlt}
            onChange={(v) => update({ heroImageAlt: v })}
          />
        </Field>
        <Field label="Heading">
          <TextInput
            value={data.heroHeading}
            onChange={(v) => update({ heroHeading: v })}
          />
        </Field>
        <Field label="Description">
          <TextArea
            value={data.heroDescription}
            onChange={(v) => update({ heroDescription: v })}
          />
        </Field>
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
