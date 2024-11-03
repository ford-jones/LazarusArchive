import React from "react"
import NavBar from "../../components/NavBar"
import { getBlogPosts } from "@/utils/api"

export default async function Blog(): Promise<React.JSX.Element> {
    const blogPosts = await getBlogPosts()

    console.log("blogPosts: ", blogPosts)
    return(
        <>
            <h1>Blog</h1>
            <NavBar />
        </>
    )
}