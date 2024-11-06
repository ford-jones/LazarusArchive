import { BlogPost, ChangeLog } from "./types"
import dotenv from "dotenv"
dotenv.config()

const _endpoint = process.env.SERVER_ENDPOINT as string

export const getBlogPosts = async (): Promise<Array<BlogPost> | void> => {
    const data = await fetch(`http://localhost:3000/getAllPosts`, {
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

export const getChangeLogs = async (): Promise<Array<ChangeLog> | void> => {
    const data = await fetch(`http://localhost:3000/getAllChangeLogs`, {
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })

    if(!data.ok) {
        throw new Error("Failed to retrieve changelog.")
        
    } else {
        const posts: Array<ChangeLog> = await data.json()
        return posts
    }
}

export const addBlogPost = async (post: BlogPost): Promise<void> => {
    console.log("API: ", post)
    const data = await fetch(`http://localhost:3000/addPost`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "Application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(post)
    })

    if(!data.ok) {
        throw new Error("Failed to send blog post.")
    }
}