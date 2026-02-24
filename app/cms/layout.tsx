export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[9999] overflow-auto bg-zinc-950 text-white">
      {children}
    </div>
  );
}
