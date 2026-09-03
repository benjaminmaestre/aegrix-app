import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="es">
      <body className="min-h-screen bg-aegrix-bg text-aegrix-text font-sans antialiased">
        <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,194,255,0.10),transparent_32%),radial-gradient(circle_at_75%_70%,rgba(99,102,241,0.08),transparent_35%)]" aria-hidden="true" />
          <div className="relative z-10 max-w-2xl text-center rounded-3xl border border-aegrix-border bg-aegrix-surface/80 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-aegrix-cyan mb-5">AEGRIX · 404</div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">Página no encontrada</h1>
            <p className="text-aegrix-muted leading-relaxed mb-2">
              La dirección que intentaste abrir no existe o fue movida.
            </p>
            <p className="text-aegrix-muted leading-relaxed mb-9">
              The page you tried to open does not exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/es" className="px-6 py-3 rounded-xl bg-aegrix-cyan text-aegrix-bg font-bold hover:opacity-90 transition-opacity">
                Ir al sitio en español
              </Link>
              <Link href="/en" className="px-6 py-3 rounded-xl border border-aegrix-border text-aegrix-text font-bold hover:border-aegrix-cyan/40 hover:text-aegrix-cyan transition-colors">
                Go to English site
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
