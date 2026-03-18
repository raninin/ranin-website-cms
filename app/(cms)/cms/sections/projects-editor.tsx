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

interface ProjectFromAPI {
  id: number;
  slug: string;
  title: string;
  titleAr: string;
  sector: string;
  sectorAr: string;
  location: string;
  locationAr: string;
  description: string;
  descriptionAr: string;
  longDescription: string;
  longDescriptionAr: string;
  image: string;
  heroImage: string;
  client: string;
  clientAr: string;
  year: string;
  duration: string;
  durationAr: string;
  status: string;
  statusAr: string;
  sortOrder: number;
  highlights: { id: number; text: string; textAr: string; sortOrder: number }[];
  scope: {
    id: number;
    title: string;
    titleAr: string;
    sortOrder: number;
    details: { id: number; text: string; textAr: string; sortOrder: number }[];
  }[];
  services: { id: number; name: string; nameAr: string }[];
  blogContent: {
    id: number;
    heading: string;
    headingAr: string;
    body: string;
    bodyAr: string;
    sortOrder: number;
  }[];
}

interface ProjectForm {
  slug: string;
  title: string;
  titleAr: string;
  sector: string;
  sectorAr: string;
  location: string;
  locationAr: string;
  description: string;
  descriptionAr: string;
  longDescription: string;
  longDescriptionAr: string;
  image: string;
  heroImage: string;
  client: string;
  clientAr: string;
  year: string;
  duration: string;
  durationAr: string;
  status: string;
  statusAr: string;
  sortOrder: number;
  highlights: { text: string; textAr: string }[];
  scope: {
    title: string;
    titleAr: string;
    details: { text: string; textAr: string }[];
  }[];
  services: { name: string; nameAr: string }[];
  blogContent: { heading: string; headingAr: string; body: string; bodyAr: string }[];
}

const emptyForm: ProjectForm = {
  slug: "",
  title: "",
  titleAr: "",
  sector: "",
  sectorAr: "",
  location: "",
  locationAr: "",
  description: "",
  descriptionAr: "",
  longDescription: "",
  longDescriptionAr: "",
  image: "",
  heroImage: "",
  client: "",
  clientAr: "",
  year: "",
  duration: "",
  durationAr: "",
  status: "Active",
  statusAr: "",
  sortOrder: 0,
  highlights: [],
  scope: [],
  services: [],
  blogContent: [],
};

function apiToForm(p: ProjectFromAPI): ProjectForm {
  return {
    slug: p.slug,
    title: p.title,
    titleAr: p.titleAr ?? "",
    sector: p.sector,
    sectorAr: p.sectorAr ?? "",
    location: p.location,
    locationAr: p.locationAr ?? "",
    description: p.description,
    descriptionAr: p.descriptionAr ?? "",
    longDescription: p.longDescription,
    longDescriptionAr: p.longDescriptionAr ?? "",
    image: p.image,
    heroImage: p.heroImage,
    client: p.client,
    clientAr: p.clientAr ?? "",
    year: p.year,
    duration: p.duration,
    durationAr: p.durationAr ?? "",
    status: p.status,
    statusAr: p.statusAr ?? "",
    sortOrder: p.sortOrder,
    highlights: p.highlights.map((h) => ({
      text: h.text,
      textAr: h.textAr ?? "",
    })),
    scope: p.scope.map((s) => ({
      title: s.title,
      titleAr: s.titleAr ?? "",
      details: s.details.map((d) => ({
        text: d.text,
        textAr: d.textAr ?? "",
      })),
    })),
    services: p.services.map((s) => ({
      name: s.name,
      nameAr: s.nameAr ?? "",
    })),
    blogContent: (p.blogContent ?? []).map((b) => ({
      heading: b.heading,
      headingAr: b.headingAr ?? "",
      body: b.body,
      bodyAr: b.bodyAr ?? "",
    })),
  };
}

export function ProjectsEditor() {
  const [projects, setProjects] = useState<ProjectFromAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<"" | "saved" | "error">("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState<ProjectForm>(emptyForm);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/cms/projects", { credentials: "include" });
      const data = await res.json();
      setProjects(data);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const update = (patch: Partial<ProjectForm>) =>
    setForm((prev) => ({ ...prev, ...patch }));

  const handleEdit = (proj: ProjectFromAPI) => {
    setEditingId(proj.id);
    setCreating(false);
    setForm(apiToForm(proj));
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
    setStatusMsg("");
    try {
      if (editingId) {
        const res = await fetch("/api/cms/projects", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...form }),
          credentials: "include",
        });
        setStatusMsg(res.ok ? "saved" : "error");
      } else {
        const res = await fetch("/api/cms/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
          credentials: "include",
        });
        setStatusMsg(res.ok ? "saved" : "error");
      }
      await fetchProjects();
      handleCancel();
    } catch {
      setStatusMsg("error");
    }
    setSaving(false);
    setTimeout(() => setStatusMsg(""), 3000);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this project? This cannot be undone.")) return;
    await fetch(`/api/cms/projects?id=${id}`, { method: "DELETE", credentials: "include" });
    if (editingId === id) handleCancel();
    await fetchProjects();
  };

  // List view
  if (!editingId && !creating) {
    return (
      <EditorShell
        title="Projects"
        description="Manage project case studies"
        status={statusMsg}
        loading={loading}
      >
        <div className="flex justify-end">
          <button
            onClick={handleCreate}
            className="bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + New Project
          </button>
        </div>
        <FieldGroup label="All Projects">
          {projects.length === 0 && (
            <p className="text-sm text-zinc-500">No projects found.</p>
          )}
          <div className="space-y-2">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="flex items-center justify-between border border-zinc-800 bg-zinc-800/50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-white">{proj.title}</p>
                  <p className="text-xs text-zinc-500">
                    {proj.sector} &middot; {proj.location} &middot; {proj.status}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(proj)}
                    className="text-xs text-zinc-400 hover:text-blue-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(proj.id)}
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
      title={editingId ? "Edit Project" : "New Project"}
      description={editingId ? `Editing: ${form.title}` : "Create a new project"}
      saving={saving}
      status={statusMsg}
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
              placeholder="e.g. petrochemical-complex-maintenance"
            />
          </Field>
          <Field label="Title">
            <TextInput
              value={form.title}
              onChange={(v) => update({ title: v })}
            />
          </Field>
        </div>
        <Field label="Title (Arabic)">
          <TextInput
            value={form.titleAr}
            onChange={(v) => update({ titleAr: v })}
            dir="rtl"
          />
        </Field>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Sector">
            <TextInput
              value={form.sector}
              onChange={(v) => update({ sector: v })}
              placeholder="e.g. Oil & Gas"
            />
          </Field>
          <Field label="Location">
            <TextInput
              value={form.location}
              onChange={(v) => update({ location: v })}
            />
          </Field>
          <Field label="Status">
            <TextInput
              value={form.status}
              onChange={(v) => update({ status: v })}
              placeholder="Active, Completed, In Progress"
            />
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Sector (Arabic)">
            <TextInput
              value={form.sectorAr}
              onChange={(v) => update({ sectorAr: v })}
              dir="rtl"
            />
          </Field>
          <Field label="Location (Arabic)">
            <TextInput
              value={form.locationAr}
              onChange={(v) => update({ locationAr: v })}
              dir="rtl"
            />
          </Field>
          <Field label="Status (Arabic)">
            <TextInput
              value={form.statusAr}
              onChange={(v) => update({ statusAr: v })}
              dir="rtl"
            />
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Client">
            <TextInput
              value={form.client}
              onChange={(v) => update({ client: v })}
            />
          </Field>
          <Field label="Year">
            <TextInput
              value={form.year}
              onChange={(v) => update({ year: v })}
            />
          </Field>
          <Field label="Duration">
            <TextInput
              value={form.duration}
              onChange={(v) => update({ duration: v })}
            />
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Client (Arabic)">
            <TextInput
              value={form.clientAr}
              onChange={(v) => update({ clientAr: v })}
              dir="rtl"
            />
          </Field>
          <div />
          <Field label="Duration (Arabic)">
            <TextInput
              value={form.durationAr}
              onChange={(v) => update({ durationAr: v })}
              dir="rtl"
            />
          </Field>
        </div>
        <Field label="Sort Order">
          <NumberInput
            value={form.sortOrder}
            onChange={(v) => update({ sortOrder: v })}
          />
        </Field>
      </FieldGroup>

      <FieldGroup label="Descriptions">
        <Field label="Short Description">
          <TextArea
            value={form.description}
            onChange={(v) => update({ description: v })}
          />
        </Field>
        <Field label="Short Description (Arabic)">
          <TextArea
            value={form.descriptionAr}
            onChange={(v) => update({ descriptionAr: v })}
            dir="rtl"
          />
        </Field>
        <Field label="Long Description">
          <TextArea
            value={form.longDescription}
            onChange={(v) => update({ longDescription: v })}
            rows={5}
          />
        </Field>
        <Field label="Long Description (Arabic)">
          <TextArea
            value={form.longDescriptionAr}
            onChange={(v) => update({ longDescriptionAr: v })}
            rows={5}
            dir="rtl"
          />
        </Field>
      </FieldGroup>

      <FieldGroup label="Images">
        <ImageUpload
          value={form.image}
          onChange={(v) => update({ image: v })}
          label="Card Image"
        />
        <ImageUpload
          value={form.heroImage}
          onChange={(v) => update({ heroImage: v })}
          label="Hero Image"
        />
      </FieldGroup>

      <FieldGroup label="Services Used">
        {form.services.map((svc, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-1 space-y-2">
              <TextInput
                value={svc.name}
                onChange={(v) => {
                  const services = [...form.services];
                  services[i] = { ...services[i], name: v };
                  update({ services });
                }}
                placeholder="e.g. Manpower, Fabrication"
              />
              <TextInput
                value={svc.nameAr}
                onChange={(v) => {
                  const services = [...form.services];
                  services[i] = { ...services[i], nameAr: v };
                  update({ services });
                }}
                placeholder="Service name (Arabic)"
                dir="rtl"
              />
            </div>
            <RemoveButton
              onClick={() => {
                const services = form.services.filter((_, j) => j !== i);
                update({ services });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Service"
          onClick={() =>
            update({
              services: [...form.services, { name: "", nameAr: "" }],
            })
          }
        />
      </FieldGroup>

      <FieldGroup label="Highlights">
        {form.highlights.map((h, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-1 space-y-2">
              <TextInput
                value={h.text}
                onChange={(v) => {
                  const highlights = [...form.highlights];
                  highlights[i] = { ...highlights[i], text: v };
                  update({ highlights });
                }}
                placeholder="Highlight (English)"
              />
              <TextInput
                value={h.textAr}
                onChange={(v) => {
                  const highlights = [...form.highlights];
                  highlights[i] = { ...highlights[i], textAr: v };
                  update({ highlights });
                }}
                placeholder="Highlight (Arabic)"
                dir="rtl"
              />
            </div>
            <RemoveButton
              onClick={() => {
                const highlights = form.highlights.filter((_, j) => j !== i);
                update({ highlights });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Highlight"
          onClick={() =>
            update({
              highlights: [...form.highlights, { text: "", textAr: "" }],
            })
          }
        />
      </FieldGroup>

      <FieldGroup label="Blog Content / Project Insights">
        {form.blogContent.map((bc, bi) => (
          <div key={bi} className="border border-zinc-800 bg-zinc-800/50 p-3 space-y-2">
            <div className="flex items-center justify-between">
              <Field label={`Section ${bi + 1} Heading`}>
                <TextInput
                  value={bc.heading}
                  onChange={(v) => {
                    const blogContent = [...form.blogContent];
                    blogContent[bi] = { ...blogContent[bi], heading: v };
                    update({ blogContent });
                  }}
                />
              </Field>
              <RemoveButton
                onClick={() => {
                  const blogContent = form.blogContent.filter((_, j) => j !== bi);
                  update({ blogContent });
                }}
              />
            </div>
            <Field label={`Section ${bi + 1} Heading (Arabic)`}>
              <TextInput
                value={bc.headingAr}
                onChange={(v) => {
                  const blogContent = [...form.blogContent];
                  blogContent[bi] = { ...blogContent[bi], headingAr: v };
                  update({ blogContent });
                }}
                dir="rtl"
              />
            </Field>
            <Field label="Body">
              <TextArea
                value={bc.body}
                onChange={(v) => {
                  const blogContent = [...form.blogContent];
                  blogContent[bi] = { ...blogContent[bi], body: v };
                  update({ blogContent });
                }}
                rows={5}
              />
            </Field>
            <Field label="Body (Arabic)">
              <TextArea
                value={bc.bodyAr}
                onChange={(v) => {
                  const blogContent = [...form.blogContent];
                  blogContent[bi] = { ...blogContent[bi], bodyAr: v };
                  update({ blogContent });
                }}
                rows={5}
                dir="rtl"
              />
            </Field>
          </div>
        ))}
        <AddButton
          label="Add Blog Section"
          onClick={() =>
            update({
              blogContent: [
                ...form.blogContent,
                { heading: "", headingAr: "", body: "", bodyAr: "" },
              ],
            })
          }
        />
      </FieldGroup>

      <FieldGroup label="Scope of Work">
        {form.scope.map((s, si) => (
          <div key={si} className="border border-zinc-800 bg-zinc-800/50 p-3 space-y-2">
            <div className="flex items-center justify-between">
              <Field label={`Scope ${si + 1} Title`}>
                <TextInput
                  value={s.title}
                  onChange={(v) => {
                    const scope = [...form.scope];
                    scope[si] = { ...scope[si], title: v };
                    update({ scope });
                  }}
                />
              </Field>
              <RemoveButton
                onClick={() => {
                  const scope = form.scope.filter((_, j) => j !== si);
                  update({ scope });
                }}
              />
            </div>
            <Field label={`Scope ${si + 1} Title (Arabic)`}>
              <TextInput
                value={s.titleAr}
                onChange={(v) => {
                  const scope = [...form.scope];
                  scope[si] = { ...scope[si], titleAr: v };
                  update({ scope });
                }}
                dir="rtl"
              />
            </Field>
            {s.details.map((detail, di) => (
              <div key={di} className="ml-4 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <TextInput
                      value={detail.text}
                      onChange={(v) => {
                        const scope = [...form.scope];
                        const details = [...scope[si].details];
                        details[di] = { ...details[di], text: v };
                        scope[si] = { ...scope[si], details };
                        update({ scope });
                      }}
                      placeholder="Detail (English)"
                    />
                  </div>
                  <RemoveButton
                    onClick={() => {
                      const scope = [...form.scope];
                      const details = scope[si].details.filter(
                        (_, j) => j !== di
                      );
                      scope[si] = { ...scope[si], details };
                      update({ scope });
                    }}
                  />
                </div>
                <TextInput
                  value={detail.textAr}
                  onChange={(v) => {
                    const scope = [...form.scope];
                    const details = [...scope[si].details];
                    details[di] = { ...details[di], textAr: v };
                    scope[si] = { ...scope[si], details };
                    update({ scope });
                  }}
                  placeholder="Detail (Arabic)"
                  dir="rtl"
                />
              </div>
            ))}
            <div className="ml-4">
              <AddButton
                label="Add Detail"
                onClick={() => {
                  const scope = [...form.scope];
                  scope[si] = {
                    ...scope[si],
                    details: [
                      ...scope[si].details,
                      { text: "", textAr: "" },
                    ],
                  };
                  update({ scope });
                }}
              />
            </div>
          </div>
        ))}
        <AddButton
          label="Add Scope Section"
          onClick={() =>
            update({
              scope: [
                ...form.scope,
                { title: "", titleAr: "", details: [{ text: "", textAr: "" }] },
              ],
            })
          }
        />
      </FieldGroup>
    </EditorShell>
  );
}
