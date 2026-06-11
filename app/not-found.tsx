import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="es">
      <body className="bg-black text-white font-sans antialiased min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h1 className="text-6xl font-bold text-[#00FFFF] mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Página no encontrada</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Lo sentimos, la página que estás buscando no existe, ha sido movida o está temporalmente inactiva.
          </p>
          <Link 
            href="/"
            className="px-6 py-3 bg-[#00FFFF] text-black font-semibold rounded-md hover:bg-opacity-90 transition-all"
          >
            Volver al inicio
          </Link>
        </div>
      </body>
    </html>
  );
}
