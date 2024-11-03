import { BlogPost } from "./types"
import dotenv from "dotenv"
dotenv.config()

const _endpoint = process.env.SERVER_ENDPOINT as string

export const getBlogPosts = async (): Promise<Array<BlogPost> | void> => {
    const data = await fetch(`${_endpoint}/getAllPosts`)

    if(!data.ok) {
        throw new Error("Failed to retrieve blog posts.")
        
    } else {
        const posts: Array<BlogPost> = await data.json()
        return posts
    }
}

export const addBlogPost = async (post: BlogPost): Promise<void> => {
    const data = await fetch(`${_endpoint}/addPost`, {
        method: "POST",
        body: JSON.stringify(post)
    })

    if(!data.ok) {
        throw new Error("Failed to send blog post.")
    }
}