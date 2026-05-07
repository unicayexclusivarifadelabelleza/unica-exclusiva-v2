export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-pink-600 sm:text-6xl">
          Proyecto V2: Test de Hidratación
        </h1>

        <p className="text-xl text-slate-600">
          Si estás viendo esto sin errores en la consola del navegador,
          significa que la base de Next.js y React está funcionando correctamente en Vercel.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 cursor-default">
            Estado: Activo
          </div>
        </div>
      </div>
    </main>
  );
}