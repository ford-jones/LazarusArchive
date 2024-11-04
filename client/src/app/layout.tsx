import type { Metadata } from "next";
// import { createContext } from "react";
// import { getBlogPosts } from "@/utils/api";
// import { BlogPost } from "@/utils/types";
// import { BlogContext } from "../components/ContextProvider";

export const metadata: Metadata = {
  title: "Lazarus Engine",
  description: "Dev Blog by Ford Jones tracking the development and progression of Lazarus: A quake-like 3D game engine written in C++ with OpenGL."
};
// const BlogContext = createContext([] as BlogPost[])

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const blogPosts = await getBlogPosts()

  
  return (
    <html lang="en">
      <body>
        {/* <BlogContext.Provider value={blogPosts as BlogPost[]}> */}
          {children}
        {/* </BlogContext.Provider> */}
      </body>
    </html>
  );
}
