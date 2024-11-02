import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lazarus Engine",
  description: "Dev Blog by Ford Jones tracking the development and progression of Lazarus: A quake-like 3D game engine written in C++ with OpenGL."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
