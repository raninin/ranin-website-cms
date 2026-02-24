"use client";

import { useState, useEffect } from "react";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  TextArea,
  NumberInput,
  AddButton,
  RemoveButton,
} from "../components/editor-shell";
import { ImageUpload } from "../components/image-upload";

interface ServiceFromAPI {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  iconName: string;
  heroImage: string;
  sortOrder: number;
  features: { id: number; text: string; sortOrder: number }[];
  featureGroups: {
    id: number;
    title: string;
    sortOrder: number;
    details: { id: number; text: string; sortOrder: number }[];
  }[];
  images: { id: number; url: string; sortOrder: number }[];
}

interface ServiceForm {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  iconName: string;
  heroImage: string;
  sortOrder: number;
  features: string[];
  featureGroups: { title: string; details: string[] }[];
  images: string[];
}

const emptyForm: ServiceForm = {
  slug: "",
  title: "",
  shortTitle: "",
  description: "",
  longDescription: "",
  iconName: "Package",
  heroImage: "",
  sortOrder: 0,
  features: [],
  featureGroups: [],
  images: [],
};

function apiToForm(svc: ServiceFromAPI): ServiceForm {
  return {
    slug: svc.slug,
    title: svc.title,
    shortTitle: svc.shortTitle,
    description: svc.description,
    longDescription: svc.longDescription,
    iconName: svc.iconName,
    heroImage: svc.heroImage,
    sortOrder: svc.sortOrder,
    features: svc.features.map((f) => f.text),
    featureGroups: svc.featureGroups.map((g) => ({
      title: g.title,
      details: g.details.map((d) => d.text),
    })),
    images: svc.images.map((img) => img.url),
  };
}

export function ServicesEditor() {
  const [services, setServices] = useState<ServiceFromAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"" | "saved" | "error">("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState<ServiceForm>(emptyForm);

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/cms/services");
      const data = await res.json();
      setServices(data);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const update = (patch: Partial<ServiceForm>) =>
    setForm((prev) => ({ ...prev, ...patch }));

  const handleEdit = (svc: ServiceFromAPI) => {
    setEditingId(svc.id);
    setCreating(false);
    setForm(apiToForm(svc));
  };

  const handleCreate = () => {
    setEditingId(null);
    setCreating(true);
    setForm(emptyForm);
  };

  const handleCancel = () => {
    setEditingId(null);
    setCreating(false);
    setForm(emptyForm);
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus("");
    try {
      if (editingId) {
        const res = await fetch("/api/cms/services", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...form }),
        });
        setStatus(res.ok ? "saved" : "error");
      } else {
        const res = await fetch("/api/cms/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setStatus(res.ok ? "saved" : "error");
      }
      await fetchServices();
      handleCancel();
    } catch {
      setStatus("error");
    }
    setSaving(false);
    setTimeout(() => setStatus(""), 3000);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this service? This cannot be undone.")) return;
    await fetch(`/api/cms/services?id=${id}`, { method: "DELETE" });
    if (editingId === id) handleCancel();
    await fetchServices();
  };

  // List view
  if (!editingId && !creating) {
    return (
      <EditorShell
        title="Services"
        description="Manage service pages"
        status={status}
        loading={loading}
      >
        <div className="flex justify-end">
          <button
            onClick={handleCreate}
            className="bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + New Service
          </button>
        </div>
        <FieldGroup label="All Services">
          {services.length === 0 && (
            <p className="text-sm text-zinc-500">No services found.</p>
          )}
          <div className="space-y-2">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="flex items-center justify-between border border-zinc-800 bg-zinc-800/50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    {svc.shortTitle || svc.title}
                  </p>
                  <p className="text-xs text-zinc-500">
                    /{svc.slug} &middot; {svc.features.length} features &middot;{" "}
                    {svc.images.length} images
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(svc)}
                    className="text-xs text-zinc-400 hover:text-blue-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(svc.id)}
                    className="text-xs text-zinc-400 hover:text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </FieldGroup>
      </EditorShell>
    );
  }

  // Edit/Create form
  return (
    <EditorShell
      title={editingId ? "Edit Service" : "New Service"}
      description={editingId ? `Editing: ${form.shortTitle || form.title}` : "Create a new service"}
      saving={saving}
      status={status}
      onSave={handleSave}
    >
      <div className="mb-4">
        <button
          onClick={handleCancel}
          className="text-xs text-zinc-400 hover:text-white"
        >
          &larr; Back to list
        </button>
      </div>

      <FieldGroup label="Basic Info">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Slug">
            <TextInput
              value={form.slug}
              onChange={(v) => update({ slug: v })}
              placeholder="e.g. manpower-services"
            />
          </Field>
          <Field label="Short Title">
            <TextInput
              value={form.shortTitle}
              onChange={(v) => update({ shortTitle: v })}
            />
          </Field>
        </div>
        <Field label="Full Title">
          <TextInput
            value={form.title}
            onChange={(v) => update({ title: v })}
          />
        </Field>
        <Field label="Description">
          <TextArea
            value={form.description}
            onChange={(v) => update({ description: v })}
          />
        </Field>
        <Field label="Long Description">
          <TextArea
            value={form.longDescription}
            onChange={(v) => update({ longDescription: v })}
            rows={5}
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Icon Name">
            <TextInput
              value={form.iconName}
              onChange={(v) => update({ iconName: v })}
              placeholder="e.g. Users, Package, Wrench"
            />
          </Field>
          <Field label="Sort Order">
            <NumberInput
              value={form.sortOrder}
              onChange={(v) => update({ sortOrder: v })}
            />
          </Field>
        </div>
      </FieldGroup>

      <FieldGroup label="Hero Image">
        <ImageUpload
          value={form.heroImage}
          onChange={(v) => update({ heroImage: v })}
        />
      </FieldGroup>

      <FieldGroup label="Key Features">
        {form.features.map((feat, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <TextInput
                value={feat}
                onChange={(v) => {
                  const features = [...form.features];
                  features[i] = v;
                  update({ features });
                }}
              />
            </div>
            <RemoveButton
              onClick={() => {
                const features = form.features.filter((_, j) => j !== i);
                update({ features });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Feature"
          onClick={() => update({ features: [...form.features, ""] })}
        />
      </FieldGroup>

      <FieldGroup label="Feature Groups">
        {form.featureGroups.map((group, gi) => (
          <div key={gi} className="border border-zinc-800 bg-zinc-800/50 p-3 space-y-2">
            <div className="flex items-center justify-between">
              <Field label={`Group ${gi + 1} Title`}>
                <TextInput
                  value={group.title}
                  onChange={(v) => {
                    const featureGroups = [...form.featureGroups];
                    featureGroups[gi] = { ...featureGroups[gi], title: v };
                    update({ featureGroups });
                  }}
                />
              </Field>
              <RemoveButton
                onClick={() => {
                  const featureGroups = form.featureGroups.filter(
                    (_, j) => j !== gi
                  );
                  update({ featureGroups });
                }}
              />
            </div>
            {group.details.map((detail, di) => (
              <div key={di} className="ml-4 flex items-center gap-3">
                <div className="flex-1">
                  <TextInput
                    value={detail}
                    onChange={(v) => {
                      const featureGroups = [...form.featureGroups];
                      const details = [...featureGroups[gi].details];
                      details[di] = v;
                      featureGroups[gi] = { ...featureGroups[gi], details };
                      update({ featureGroups });
                    }}
                  />
                </div>
                <RemoveButton
                  onClick={() => {
                    const featureGroups = [...form.featureGroups];
                    const details = featureGroups[gi].details.filter(
                      (_, j) => j !== di
                    );
                    featureGroups[gi] = { ...featureGroups[gi], details };
                    update({ featureGroups });
                  }}
                />
              </div>
            ))}
            <div className="ml-4">
              <AddButton
                label="Add Detail"
                onClick={() => {
                  const featureGroups = [...form.featureGroups];
                  featureGroups[gi] = {
                    ...featureGroups[gi],
                    details: [...featureGroups[gi].details, ""],
                  };
                  update({ featureGroups });
                }}
              />
            </div>
          </div>
        ))}
        <AddButton
          label="Add Feature Group"
          onClick={() =>
            update({
              featureGroups: [
                ...form.featureGroups,
                { title: "", details: [""] },
              ],
            })
          }
        />
      </FieldGroup>

      <FieldGroup label="Gallery Images">
        {form.images.map((img, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <ImageUpload
                value={img}
                onChange={(v) => {
                  const images = [...form.images];
                  images[i] = v;
                  update({ images });
                }}
                label={`Image ${i + 1}`}
              />
            </div>
            <RemoveButton
              onClick={() => {
                const images = form.images.filter((_, j) => j !== i);
                update({ images });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Image"
          onClick={() => update({ images: [...form.images, ""] })}
        />
      </FieldGroup>
    </EditorShell>
  );
}
