"use client"

import React, { useEffect, useState } from "react"
import MarkdownPreview from "@uiw/react-markdown-preview"

export default function Docs(): React.ReactNode {
    const [activePage, setActivePage] = useState<string>("lazarus-by-example.md")
    const [markdownSource, setMarkdownSource] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getDocs()
    }, [activePage])

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
            <div>
                <MarkdownPreview 
                    source={markdownSource} 
                    style={{
                        width: "80%",
                        padding: "2%",
                        margin: "auto"
                    }} 
                />
            </div>
    )
}