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
import type { HeroData } from "@/lib/data/defaults/hero";
import { defaultHero } from "@/lib/data/defaults/hero";

export function HeroEditor() {
  const { data, setData, loading, saving, save, status } =
    useSiteContent<HeroData>("hero", defaultHero);

  const update = (patch: Partial<HeroData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <EditorShell
      title="Hero Section"
      description="Main hero banner on the homepage"
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
        <Field label="Subheading">
          <TextArea
            value={data.subheading}
            onChange={(v) => update({ subheading: v })}
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

      <FieldGroup label="Background Image">
        <ImageUpload
          value={data.backgroundImage}
          onChange={(v) => update({ backgroundImage: v })}
        />
      </FieldGroup>

      <FieldGroup label="Slider Images">
        {data.images.map((img, i) => (
          <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
            <div className="flex-1 space-y-2">
              <ImageUpload
                value={img.src}
                onChange={(v) => {
                  const images = [...data.images];
                  images[i] = { ...images[i], src: v };
                  update({ images });
                }}
                label={`Image ${i + 1}`}
              />
              <Field label="Label">
                <TextInput
                  value={img.label}
                  onChange={(v) => {
                    const images = [...data.images];
                    images[i] = { ...images[i], label: v };
                    update({ images });
                  }}
                />
              </Field>
            </div>
            <RemoveButton
              onClick={() => {
                const images = data.images.filter((_, j) => j !== i);
                update({ images });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Image"
          onClick={() =>
            update({ images: [...data.images, { src: "", label: "" }] })
          }
        />
      </FieldGroup>
    </EditorShell>
  );
}
