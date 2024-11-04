import { addBlogPost } from "@/utils/api"
import { BlogPost } from "@/utils/types"
import React, { useState } from "react"

export default function Form(): React.ReactNode {
    const [sent, setSent] = useState<boolean>()
    const [form, setForm] = useState<BlogPost>({
        title: "", 
        description: "", 
        imageUrl: "", 
        date: new Date().toISOString()
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        e.preventDefault()

        setForm({...form, [e.target.id]: e.target.value})
    }

    async function handleClick(e: React.MouseEvent<HTMLInputElement>) {
        e.preventDefault()

        setSent(true)
        await addBlogPost(form)
        
        setTimeout(() => {
            setSent(false)
            window.location.reload()
        }, 2000)
    }

    return(
        <>
            {
            sent
                ? <div style={{width: "25dvw", height: "15dvw", border: "2px solid black", zIndex: 1, position: "fixed", left: "50dvw", right: "50dvw", justifySelf: "center", textAlign: "center", background: "beige", top: "10dvw"}}>Updating...</div>
                : null
            }
            <div style={{display: "flex", justifyContent: "center", zIndex: 0}}>
                <div style={{display: "flex", flexDirection: "column", padding: "20px", width: "50dvw", height: "50dvh", justifyContent: "space-around"}}>
                    <label htmlFor="title">
                        Title:
                    </label>
                    <input onChange={handleChange} type="text" id="title" name="title"/>

                    <label htmlFor="description">
                        Description:
                    </label>
                    <textarea onChange={handleChange} rows={10} id="description" name="description"/>

                    <label htmlFor="imageUrl">
                        Image Thumbnail:
                    </label>
                    <input onChange={handleChange} type="text" id="imageUrl" name="imageUrl"/>

                    <input onClick={handleClick}type="submit" style={{width: "25dvw", marginLeft: "auto", marginRight: "auto"}}/>

                </div>

            </div>
            <a href="api/auth/logout">Logout</a>
        </>
    )
}