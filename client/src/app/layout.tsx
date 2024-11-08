import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "Lazarus Engine",
  description: "Dev Blog by Ford Jones tracking the development and progression of Lazarus: A quake-like 3D game engine written in C++ with OpenGL.",
  openGraph: {
    type: "website",
    url: "https://lazarusengine.xyz/",
    title: "Lazarus Engine - Archive",
    description: "Dev logs documenting the creation and maintenance of Lazarus.",
    siteName: "Lazarus Engine",
    images: [{
      url: "https://drive.google.com/thumbnail?id=1P2FZN6yw1bd0Ga546pEk23WlyNuOE_3J&sz=w1000",
    }]
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <UserProvider>
        <body style={{
          background: "#111c1c",
          color: "#feffe8",
          overflowX: "hidden",
          fontSize: "19px"
        }}>
            {children}
        </body>
      </UserProvider>
    </html>
  );
}
