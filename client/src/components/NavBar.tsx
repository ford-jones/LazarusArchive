"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar(): React.JSX.Element {
    const path = usePathname()

    return(
        <>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <Link href={"/"} style={path === "/" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                    Home
                </Link>
                <Link href={"/documentation"} style={path === "/documentation" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                    Documentation
                </Link>
                <Link href={"/changeLogs"} style={path === "/changeLogs" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                    Release Notes
                </Link>
                <Link href={"/downloads"} style={path === "/downloads" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                    Downloads
                </Link>
                <Link href={"/blog"} style={path === "/blog" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                    Blog
                </Link>
            </div>
        </>
    )
}