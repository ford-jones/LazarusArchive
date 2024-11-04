import { BlogPost } from "./types"
import dotenv from "dotenv"
dotenv.config()

const _endpoint = process.env.SERVER_ENDPOINT as string

export const getBlogPosts = async (): Promise<Array<BlogPost> | void> => {
    const data = await fetch(`http://localhost:3000/api/v1/blog/getAllPosts`, {
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })

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
        body: JSON.stringify(post),
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })

    if(!data.ok) {
        throw new Error("Failed to send blog post.")
    }
}