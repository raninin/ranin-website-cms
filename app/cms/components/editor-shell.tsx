"use client";

interface Props {
  title: string;
  description?: string;
  saving?: boolean;
  status?: "" | "saved" | "error";
  onSave?: () => void;
  loading?: boolean;
  children: React.ReactNode;
}

export function EditorShell({ title, description, saving, status, onSave, loading, children }: Props) {
  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-zinc-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          {description && <p className="mt-1 text-sm text-zinc-500">{description}</p>}
        </div>
        <div className="flex items-center gap-3">
          {status === "saved" && (
            <span className="text-sm text-emerald-400">Saved successfully</span>
          )}
          {status === "error" && (
            <span className="text-sm text-red-400">Error saving</span>
          )}
          {onSave && (
            <button
              onClick={onSave}
              disabled={saving}
              className="bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          )}
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

export function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border border-zinc-800 bg-zinc-900 p-5">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">{label}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-zinc-400">{label}</label>
      {children}
    </div>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none"
    />
  );
}

export function NumberInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
    />
  );
}

export function TextArea({
  value,
  onChange,
  rows = 3,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      className="w-full border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none resize-y"
    />
  );
}

export function AddButton({ onClick, label = "Add Item" }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="border border-dashed border-zinc-700 px-3 py-2 text-xs text-zinc-400 hover:border-zinc-500 hover:text-white"
    >
      + {label}
    </button>
  );
}

export function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-xs text-zinc-600 hover:text-red-400"
      title="Remove"
    >
      Remove
    </button>
  );
}
