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
import type { CTAStripData } from "@/lib/data/defaults/cta-strip";
import { defaultCTAStrip } from "@/lib/data/defaults/cta-strip";

export function CTAStripEditor() {
  const { data, setData, loading, saving, save, status } =
    useSiteContent<CTAStripData>("cta-strip", defaultCTAStrip);

  const update = (patch: Partial<CTAStripData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <EditorShell
      title="CTA Strip"
      description="Call-to-action banner section on the homepage"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Text Content">
        <Field label="Label">
          <TextInput
            value={data.label}
            onChange={(v) => update({ label: v })}
          />
        </Field>
        <Field label="Heading">
          <TextInput
            value={data.heading}
            onChange={(v) => update({ heading: v })}
          />
        </Field>
        <Field label="Heading Accent">
          <TextInput
            value={data.headingAccent}
            onChange={(v) => update({ headingAccent: v })}
          />
        </Field>
        <Field label="Description">
          <TextArea
            value={data.description}
            onChange={(v) => update({ description: v })}
          />
        </Field>
      </FieldGroup>

      <FieldGroup label="Call to Actions">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Primary CTA Label">
            <TextInput
              value={data.ctaPrimary.label}
              onChange={(v) =>
                update({ ctaPrimary: { ...data.ctaPrimary, label: v } })
              }
            />
          </Field>
          <Field label="Primary CTA Link">
            <TextInput
              value={data.ctaPrimary.href}
              onChange={(v) =>
                update({ ctaPrimary: { ...data.ctaPrimary, href: v } })
              }
            />
          </Field>
          <Field label="Secondary CTA Label">
            <TextInput
              value={data.ctaSecondary.label}
              onChange={(v) =>
                update({ ctaSecondary: { ...data.ctaSecondary, label: v } })
              }
            />
          </Field>
          <Field label="Secondary CTA Link">
            <TextInput
              value={data.ctaSecondary.href}
              onChange={(v) =>
                update({ ctaSecondary: { ...data.ctaSecondary, href: v } })
              }
            />
          </Field>
        </div>
      </FieldGroup>

      <FieldGroup label="Contact Info">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Phone Number">
            <TextInput
              value={data.phone}
              onChange={(v) => update({ phone: v })}
            />
          </Field>
          <Field label="Hours">
            <TextInput
              value={data.hours}
              onChange={(v) => update({ hours: v })}
            />
          </Field>
        </div>
      </FieldGroup>

      <FieldGroup label="Background Images">
        {data.backgroundImages.map((img, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <ImageUpload
                value={img}
                onChange={(v) => {
                  const backgroundImages = [...data.backgroundImages];
                  backgroundImages[i] = v;
                  update({ backgroundImages });
                }}
                label={`Background ${i + 1}`}
              />
            </div>
            <RemoveButton
              onClick={() => {
                const backgroundImages = data.backgroundImages.filter(
                  (_, j) => j !== i
                );
                update({ backgroundImages });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Background Image"
          onClick={() =>
            update({ backgroundImages: [...data.backgroundImages, ""] })
          }
        />
      </FieldGroup>

      <FieldGroup label="Bottom Images">
        {data.bottomImages.map((img, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <ImageUpload
                value={img}
                onChange={(v) => {
                  const bottomImages = [...data.bottomImages];
                  bottomImages[i] = v;
                  update({ bottomImages });
                }}
                label={`Bottom ${i + 1}`}
              />
            </div>
            <RemoveButton
              onClick={() => {
                const bottomImages = data.bottomImages.filter(
                  (_, j) => j !== i
                );
                update({ bottomImages });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Bottom Image"
          onClick={() =>
            update({ bottomImages: [...data.bottomImages, ""] })
          }
        />
      </FieldGroup>
    </EditorShell>
  );
}
