"use client";

import { useSiteContent } from "../hooks/use-site-content";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  TextArea,
  AddButton,
  RemoveButton,
} from "../components/editor-shell";
import { ImageUpload } from "../components/image-upload";
import type { AboutPreviewData } from "@/lib/data/defaults/about-preview";
import { defaultAboutPreview } from "@/lib/data/defaults/about-preview";

export function AboutPreviewEditor() {
  const { data, setData, loading, saving, save, status } =
    useSiteContent<AboutPreviewData>("about-preview", defaultAboutPreview);

  const update = (patch: Partial<AboutPreviewData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <EditorShell
      title="About Preview"
      description="About section preview on the homepage"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Text Content">
        <Field label="Section Label">
          <TextInput
            value={data.sectionLabel}
            onChange={(v) => update({ sectionLabel: v })}
          />
        </Field>
        <Field label="Heading">
          <TextInput
            value={data.heading}
            onChange={(v) => update({ heading: v })}
          />
        </Field>
      </FieldGroup>

      <FieldGroup label="Paragraphs">
        {data.paragraphs.map((p, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-1">
              <Field label={`Paragraph ${i + 1}`}>
                <TextArea
                  value={p}
                  onChange={(v) => {
                    const paragraphs = [...data.paragraphs];
                    paragraphs[i] = v;
                    update({ paragraphs });
                  }}
                />
              </Field>
            </div>
            <RemoveButton
              onClick={() => {
                const paragraphs = data.paragraphs.filter((_, j) => j !== i);
                update({ paragraphs });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Paragraph"
          onClick={() => update({ paragraphs: [...data.paragraphs, ""] })}
        />
      </FieldGroup>

      <FieldGroup label="Link">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Link Text">
            <TextInput
              value={data.linkText}
              onChange={(v) => update({ linkText: v })}
            />
          </Field>
          <Field label="Link URL">
            <TextInput
              value={data.linkHref}
              onChange={(v) => update({ linkHref: v })}
            />
          </Field>
        </div>
      </FieldGroup>

      <FieldGroup label="Image">
        <ImageUpload
          value={data.image}
          onChange={(v) => update({ image: v })}
        />
        <Field label="Image Alt Text">
          <TextInput
            value={data.imageAlt}
            onChange={(v) => update({ imageAlt: v })}
          />
        </Field>
      </FieldGroup>

      <FieldGroup label="Values">
        {data.values.map((val, i) => (
          <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
            <div className="flex-1 space-y-2">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Icon Name">
                  <TextInput
                    value={val.iconName}
                    onChange={(v) => {
                      const values = [...data.values];
                      values[i] = { ...values[i], iconName: v };
                      update({ values });
                    }}
                    placeholder="e.g. ShieldCheck, Handshake"
                  />
                </Field>
                <Field label="Title">
                  <TextInput
                    value={val.title}
                    onChange={(v) => {
                      const values = [...data.values];
                      values[i] = { ...values[i], title: v };
                      update({ values });
                    }}
                  />
                </Field>
              </div>
              <Field label="Description">
                <TextArea
                  value={val.description}
                  onChange={(v) => {
                    const values = [...data.values];
                    values[i] = { ...values[i], description: v };
                    update({ values });
                  }}
                  rows={2}
                />
              </Field>
            </div>
            <RemoveButton
              onClick={() => {
                const values = data.values.filter((_, j) => j !== i);
                update({ values });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Value"
          onClick={() =>
            update({
              values: [
                ...data.values,
                { iconName: "", title: "", description: "" },
              ],
            })
          }
        />
      </FieldGroup>
    </EditorShell>
  );
}
