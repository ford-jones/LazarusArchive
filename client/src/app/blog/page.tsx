import BlogUpdates from "../../components/BlogUpdates"
import React from "react"
import NavBar from "../../components/NavBar"


export default function Blog(): React.ReactNode {
    return(
        <>
            <div style={{
                zIndex: 1, 
                position: "fixed", 
                width: "100dvw", 
                background: "black",
                top: "0px"
            }}>
                <h1 style={{textAlign: "center"}}>Blog</h1>
                <NavBar />
            </div>
            <div style={{paddingTop: "95px"}}>
                <BlogUpdates />
            </div>
        </>
    )
}