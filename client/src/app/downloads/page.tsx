import React from "react"
import NavBar from "../../components/NavBar"

import Releases from "@/components/Releases"

export default function Downloads(): React.JSX.Element {
    return(
        <>
            <NavBar />
            <div style={{paddingTop: "160px", width:"80%", margin:"auto"}}>
                <Releases />
            </div>
        </>
    )
}