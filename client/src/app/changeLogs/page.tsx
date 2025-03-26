import ChangeLogUpdates from "../../components/ChangeLogUpdates"
import React from "react"
import NavBar from "../../components/NavBar"
import Link from "next/link"

export default function ChangeLogs(): React.ReactNode {
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
                <h1 style={{textAlign: "center", textDecoration: "underline"}}>Release Notes:</h1>
                <NavBar />
            </div>
            <div style={{paddingTop: "105px"}}>
                <p>This project uses <Link href={"https://semver.org/#summary"} style={{color: "whitesmoke", textDecoration: "underline"}}>SemVer</Link>.</p>
                <ChangeLogUpdates />
            </div>
        </>
    )
}