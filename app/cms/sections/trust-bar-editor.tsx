"use client";

import { useSiteContent } from "../hooks/use-site-content";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  NumberInput,
  AddButton,
  RemoveButton,
} from "../components/editor-shell";
import type { TrustBarData } from "@/lib/data/defaults/trust-bar";
import { defaultTrustBar } from "@/lib/data/defaults/trust-bar";

export function TrustBarEditor() {
  const { data, setData, loading, saving, save, status } =
    useSiteContent<TrustBarData>("trust-bar", defaultTrustBar);

  const update = (patch: Partial<TrustBarData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <EditorShell
      title="Trust Bar"
      description="Statistics shown below the hero section"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Metrics">
        {data.metrics.map((metric, i) => (
          <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
            <div className="flex-1 space-y-2">
              <div className="grid grid-cols-3 gap-3">
                <Field label="Value">
                  <NumberInput
                    value={metric.value}
                    onChange={(v) => {
                      const metrics = [...data.metrics];
                      metrics[i] = { ...metrics[i], value: v };
                      update({ metrics });
                    }}
                  />
                </Field>
                <Field label="Suffix">
                  <TextInput
                    value={metric.suffix}
                    onChange={(v) => {
                      const metrics = [...data.metrics];
                      metrics[i] = { ...metrics[i], suffix: v };
                      update({ metrics });
                    }}
                    placeholder="e.g. + or /7"
                  />
                </Field>
                <Field label="Label">
                  <TextInput
                    value={metric.label}
                    onChange={(v) => {
                      const metrics = [...data.metrics];
                      metrics[i] = { ...metrics[i], label: v };
                      update({ metrics });
                    }}
                  />
                </Field>
              </div>
            </div>
            <RemoveButton
              onClick={() => {
                const metrics = data.metrics.filter((_, j) => j !== i);
                update({ metrics });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Metric"
          onClick={() =>
            update({
              metrics: [
                ...data.metrics,
                { value: 0, suffix: "", label: "" },
              ],
            })
          }
        />
      </FieldGroup>
    </EditorShell>
  );
}
