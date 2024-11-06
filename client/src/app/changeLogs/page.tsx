import ChangeLogUpdates from "../../components/ChangeLogUpdates"
import React from "react"
import NavBar from "../../components/NavBar"

export default function ChangeLogs(): React.ReactNode {
    return(
        <>
            <h1>Release Notes:</h1>
            <NavBar />
            <ChangeLogUpdates />
        </>
    )
}