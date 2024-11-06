import React from "react"
import NavBar from "../../components/NavBar"

export default function Downloads(): React.JSX.Element {
    return(
        <>
            <div style={{
              zIndex: 1, 
              position: "fixed", 
              width: "100dvw", 
              background: "black",
              top: "0px"
            }}>
                <h1 style={{textAlign: "center"}}>Downloads</h1>
                <NavBar />
            </div>
        </>
    )
}