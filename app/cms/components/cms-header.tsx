"use client";

interface Props {
  onLogout: () => void;
}

export function CmsHeader({ onLogout }: Props) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-6">
      <div className="flex items-center gap-2">
        <a
          href="/"
          target="_blank"
          className="text-xs text-zinc-500 hover:text-white"
        >
          View Site &rarr;
        </a>
      </div>
      <button
        onClick={onLogout}
        className="text-xs text-zinc-500 hover:text-red-400"
      >
        Sign Out
      </button>
    </header>
  );
}
