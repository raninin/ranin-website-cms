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
import type { SectorsData } from "@/lib/data/defaults/sectors";
import { defaultSectors } from "@/lib/data/defaults/sectors";

export function SectorsEditor() {
  const { data, setData, loading, saving, save, status } =
    useSiteContent<SectorsData>("sectors", defaultSectors);

  const update = (patch: Partial<SectorsData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <EditorShell
      title="Sectors"
      description="Industries we serve section on the homepage"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Section Header">
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
        <Field label="Description">
          <TextArea
            value={data.description}
            onChange={(v) => update({ description: v })}
          />
        </Field>
      </FieldGroup>

      <FieldGroup label="Sectors">
        {data.sectors.map((sector, i) => (
          <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
            <div className="flex-1 space-y-2">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Icon Name">
                  <TextInput
                    value={sector.iconName}
                    onChange={(v) => {
                      const sectors = [...data.sectors];
                      sectors[i] = { ...sectors[i], iconName: v };
                      update({ sectors });
                    }}
                    placeholder="e.g. Droplets, Building2"
                  />
                </Field>
                <Field label="Title">
                  <TextInput
                    value={sector.title}
                    onChange={(v) => {
                      const sectors = [...data.sectors];
                      sectors[i] = { ...sectors[i], title: v };
                      update({ sectors });
                    }}
                  />
                </Field>
              </div>
              <Field label="Description">
                <TextArea
                  value={sector.description}
                  onChange={(v) => {
                    const sectors = [...data.sectors];
                    sectors[i] = { ...sectors[i], description: v };
                    update({ sectors });
                  }}
                  rows={2}
                />
              </Field>
              <Field label="Image URL">
                <TextInput
                  value={sector.image}
                  onChange={(v) => {
                    const sectors = [...data.sectors];
                    sectors[i] = { ...sectors[i], image: v };
                    update({ sectors });
                  }}
                />
              </Field>
            </div>
            <RemoveButton
              onClick={() => {
                const sectors = data.sectors.filter((_, j) => j !== i);
                update({ sectors });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Sector"
          onClick={() =>
            update({
              sectors: [
                ...data.sectors,
                { iconName: "", title: "", description: "", image: "" },
              ],
            })
          }
        />
      </FieldGroup>
    </EditorShell>
  );
}
