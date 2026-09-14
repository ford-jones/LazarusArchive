import React from "react"
import NavBar from "../../components/NavBar"
import Docs from "../../components/Docs"

export default function Documentation(): React.ReactNode {
    
    return(
        <>
            <NavBar />
            <div style={{paddingTop: "105px"}}>
                <Docs />
            </div>
        </>
    )
}