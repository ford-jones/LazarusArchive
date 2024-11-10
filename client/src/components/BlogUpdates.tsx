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
                            <h4>{post.title}</h4>
                            <p>{post.date}</p>
                            {(post.description.split("%")).map((line) => <p key={line}>{line.replace("%", "")}</p>)}
                            {
                                post.imageUrl != "" 
                                    ? <img src={post.imageUrl} alt="lazarusImage" style={{aspectRatio: "1", objectFit: "contain"}} />
                                    : null
                            }
                            <div style={{width: "100dvw", background: "whitesmoke", height: "1px", marginTop: "5dvh"}}></div>
                        </div>
                    ))
                    : <p>Uh oh! Something went wrong.</p>
            }
        </>
    )

}