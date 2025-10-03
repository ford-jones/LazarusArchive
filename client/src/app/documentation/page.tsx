import React from "react"
import NavBar from "../../components/NavBar"
import Docs from "../../components/Docs"

export default function Documentation(): React.ReactNode {
    
    return(
        <>
            <div style={{
                zIndex: 1, 
                position: "fixed", 
                width: "100dvw", 
                background: "black",
                top: "0px",
                left: "0px"
            }}>
                <h1 style={{textAlign: "center", textDecoration: "underline"}}>Documentation:</h1>
                <NavBar />
            </div>
            <div style={{paddingTop: "105px"}}>
                <Docs />
            </div>
        </>
    )
}