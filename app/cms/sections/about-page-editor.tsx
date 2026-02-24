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
import type { AboutPageData } from "@/lib/data/defaults/about-page";
import { defaultAboutPage } from "@/lib/data/defaults/about-page";

export function AboutPageEditor() {
  const { data, setData, loading, saving, save, status } =
    useSiteContent<AboutPageData>("about-page", defaultAboutPage);

  const update = (patch: Partial<AboutPageData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <EditorShell
      title="About Page"
      description="Full about page content"
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
        <Field label="Hero Heading">
          <TextArea
            value={data.heroHeading}
            onChange={(v) => update({ heroHeading: v })}
            rows={2}
          />
        </Field>
        <Field label="Hero Description">
          <TextArea
            value={data.heroDescription}
            onChange={(v) => update({ heroDescription: v })}
          />
        </Field>
      </FieldGroup>

      <FieldGroup label="Overview">
        <ImageUpload
          value={data.overviewImage}
          onChange={(v) => update({ overviewImage: v })}
          label="Overview Image"
        />
        <p className="text-xs text-zinc-500">Overview Stats</p>
        {data.overviewStats.map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="grid flex-1 grid-cols-2 gap-3">
              <Field label="Value">
                <TextInput
                  value={stat.value}
                  onChange={(v) => {
                    const overviewStats = [...data.overviewStats];
                    overviewStats[i] = { ...overviewStats[i], value: v };
                    update({ overviewStats });
                  }}
                />
              </Field>
              <Field label="Label">
                <TextInput
                  value={stat.label}
                  onChange={(v) => {
                    const overviewStats = [...data.overviewStats];
                    overviewStats[i] = { ...overviewStats[i], label: v };
                    update({ overviewStats });
                  }}
                />
              </Field>
            </div>
            <RemoveButton
              onClick={() => {
                const overviewStats = data.overviewStats.filter(
                  (_, j) => j !== i
                );
                update({ overviewStats });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Stat"
          onClick={() =>
            update({
              overviewStats: [
                ...data.overviewStats,
                { value: "", label: "" },
              ],
            })
          }
        />
      </FieldGroup>

      <FieldGroup label="Story">
        <Field label="Story Heading">
          <TextInput
            value={data.storyHeading}
            onChange={(v) => update({ storyHeading: v })}
          />
        </Field>
        {data.storyParagraphs.map((p, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-1">
              <Field label={`Paragraph ${i + 1}`}>
                <TextArea
                  value={p}
                  onChange={(v) => {
                    const storyParagraphs = [...data.storyParagraphs];
                    storyParagraphs[i] = v;
                    update({ storyParagraphs });
                  }}
                />
              </Field>
            </div>
            <RemoveButton
              onClick={() => {
                const storyParagraphs = data.storyParagraphs.filter(
                  (_, j) => j !== i
                );
                update({ storyParagraphs });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Paragraph"
          onClick={() =>
            update({ storyParagraphs: [...data.storyParagraphs, ""] })
          }
        />
      </FieldGroup>

      <FieldGroup label="Values">
        <Field label="Values Heading">
          <TextInput
            value={data.valuesHeading}
            onChange={(v) => update({ valuesHeading: v })}
          />
        </Field>
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
                    placeholder="e.g. ShieldCheck"
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

      <FieldGroup label="Milestones">
        <Field label="Milestones Heading">
          <TextInput
            value={data.milestonesHeading}
            onChange={(v) => update({ milestonesHeading: v })}
          />
        </Field>
        {data.milestones.map((ms, i) => (
          <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
            <div className="flex-1 space-y-2">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Year">
                  <TextInput
                    value={ms.year}
                    onChange={(v) => {
                      const milestones = [...data.milestones];
                      milestones[i] = { ...milestones[i], year: v };
                      update({ milestones });
                    }}
                  />
                </Field>
                <Field label="Title">
                  <TextInput
                    value={ms.title}
                    onChange={(v) => {
                      const milestones = [...data.milestones];
                      milestones[i] = { ...milestones[i], title: v };
                      update({ milestones });
                    }}
                  />
                </Field>
              </div>
              <Field label="Description">
                <TextArea
                  value={ms.description}
                  onChange={(v) => {
                    const milestones = [...data.milestones];
                    milestones[i] = { ...milestones[i], description: v };
                    update({ milestones });
                  }}
                  rows={2}
                />
              </Field>
            </div>
            <RemoveButton
              onClick={() => {
                const milestones = data.milestones.filter((_, j) => j !== i);
                update({ milestones });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Milestone"
          onClick={() =>
            update({
              milestones: [
                ...data.milestones,
                { year: "", title: "", description: "" },
              ],
            })
          }
        />
      </FieldGroup>
    </EditorShell>
  );
}
