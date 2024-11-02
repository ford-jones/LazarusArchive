import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar(): React.JSX.Element {
    return(
        <>
            <div>
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={"/blog"}>
                    Blog
                </Link>
                <Link href={"/changeLogs"}>
                    Release Notes
                </Link>
                <Link href={"/downloads"}>
                    Downloads
                </Link>
            </div>
        </>
    )
}