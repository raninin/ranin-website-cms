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
        className="border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
      >
        Sign Out
      </button>
    </header>
  );
}
