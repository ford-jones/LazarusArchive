"use client"

import React, { useState, useEffect, useCallback } from "react"
import { getBlogPosts } from "@/utils/api"
import { BlogPost } from "@/utils/types"

export default function BlogUpdates(): React.ReactNode {
    const [posts, setPosts] = useState<Array<BlogPost>>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    const performSideEffects = useCallback((allPosts: BlogPost[]) => {
        setPosts(allPosts)
        setLoading(false)
    }, [])

    useEffect(() => {
        if(posts.length < 1) {
            update()
        }
    }, [posts])
        
    const update = async () => {
        const blogPosts = await getBlogPosts()
        if((blogPosts)) {
            performSideEffects(blogPosts)
        }
        
    }
    
    return(
        <>
            { 
                loading 
                    ? <p>loading...</p>
                    : posts 
                    ? posts.map((post, i) => (
                        <div key={i}>
                            <h3>Ford Jones</h3>
                            <p>{post.date}</p>
                            <p>{post.title}</p>
                            <p>{post.description}</p>
                        </div>
                    ))
                    : <p>Uh oh! Something went wrong.</p>
            }
        </>
    )

}