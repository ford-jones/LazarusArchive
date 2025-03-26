import React from "react"
import NavBar from "../../components/NavBar"

import Releases from "@/components/Releases"

export default function Downloads(): React.JSX.Element {
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
                <h1 style={{textAlign: "center", textDecoration: "underline"}}>Downloads:</h1>
                <NavBar />
            </div>
            <div style={{paddingTop: "105px"}}>
                <Releases />
            </div>
        </>
    )
}