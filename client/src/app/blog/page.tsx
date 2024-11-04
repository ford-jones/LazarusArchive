import BlogUpdates from "../../components/BlogUpdates"
import React from "react"
import NavBar from "../../components/NavBar"


export default function Blog(): React.ReactNode {
    return(
        <>
            <h1>Blog</h1>
            <NavBar />
            <BlogUpdates />
        </>
    )
}