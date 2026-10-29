import ChangeLogUpdates from "../components/ChangeLogUpdates"
import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "react-router"

export default function ChangeLogs(): React.ReactNode {
    return(
        <>
            <NavBar />
            <div style={{paddingTop: "105px", width:"80%", margin:"auto"}}>
                <p>This project uses <Link to={"https://semver.org/#summary"} style={{color: "whitesmoke", textDecoration: "underline"}}>SemVer</Link>.</p>
                <ChangeLogUpdates />
            </div>
        </>
    )
}