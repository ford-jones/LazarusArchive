import BlogUpdates from "../../components/BlogUpdates"
import React from "react"
import NavBar from "../../components/NavBar"


export default function Blog(): React.ReactNode {
    return(
        <>
            <NavBar />
            <div style={{paddingTop: "160px", width:"80%", margin:"auto"}}>
                <BlogUpdates />
            </div>
        </>
    )
}