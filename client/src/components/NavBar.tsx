import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar(): React.JSX.Element {
    return(
        <>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <Link href={"/"} style={{color: "whitesmoke"}}>
                    Home
                </Link>
                <Link href={"/blog"} style={{color: "whitesmoke"}}>
                    Blog
                </Link>
                <Link href={"/changeLogs"} style={{color: "whitesmoke"}}>
                    Release Notes
                </Link>
                <Link href={"/downloads"} style={{color: "whitesmoke"}}>
                    Downloads
                </Link>
            </div>
        </>
    )
}