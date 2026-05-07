import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Única y Exclusiva V2",
  description: "Rifa de Belleza - Proyecto Limpio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
