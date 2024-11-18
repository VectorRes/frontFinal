// app/layout.tsx
import React from "react";
import Menu from "./menu";

export const metadata = {
  title: "Mi Aplicación",
  description: "Una aplicación con un menú persistente",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body>
        <Menu /> {/* El menú siempre visible */}
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
