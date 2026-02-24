export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        header, footer, .page-transition-wrapper > nav,
        body > nav, body > footer,
        [class*="preloader"] { display: none !important; }
        .cms-layout { position: fixed; inset: 0; z-index: 9999; }
      `}</style>
      <div className="cms-layout min-h-screen bg-zinc-950 text-white">
        {children}
      </div>
    </>
  );
}
