import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "Lazarus Engine",
  description: "Dev Blog by Ford Jones tracking the development and progression of Lazarus: A quake-like 3D game engine written in C++ with OpenGL."
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <UserProvider>
        <body style={{
          background: "black",
          color: "whitesmoke",
          overflowX: "hidden",
          fontSize: "19px"
        }}>
            {children}
        </body>
      </UserProvider>
    </html>
  );
}
