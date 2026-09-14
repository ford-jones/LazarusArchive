"use client"

import React, { useEffect, useState } from "react"
import MarkdownPreview from "@uiw/react-markdown-preview"

export default function Docs(): React.ReactNode {
    const [markdownSource, setMarkdownSource] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getDocs()
    }, [])

    const getDocs = async (): Promise<void> => {
        setLoading(true)
        const result = await fetch("https://raw.githubusercontent.com/ford-jones/lazarus/refs/heads/main/readme.md")
        if(result) {
            const data = await result.text()
            if(data) {
                setMarkdownSource(data)
                setLoading(false)
            }
        }
    }
    
    return(
        loading
            ? <p>Loading...</p>
            :
            <div style={{width:"80%", margin:"auto"}}>
                <MarkdownPreview 
                    source={markdownSource} 
                    style={{
                        // width: "100%",
                        padding: "80px 20px",
                        // margin: "auto"
                    }} 
                />
            </div>
    )
}