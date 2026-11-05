import React from "react"
import { Link } from "react-router"
import { useState, useEffect } from "react"

export default function NavBar(): React.JSX.Element {
    const urlParams = window.location.pathname
    const [fontHeight, setFontHeight] = useState<number>(0)
    const [pageName, setPageName] = useState<string>("")

    //  Cheap media query
    useEffect(() => {
        if(typeof Window !== undefined) {
          if(window.innerWidth > 1000) {
            setFontHeight(18)
          } else {
            setFontHeight(12)
          }
        }
        
        if(urlParams.length === 1) {
            setPageName("Lazarus Archive:")
        } else {
            const name = urlParams.substring(1).concat(":").toLowerCase()
            const title = name.charAt(0).toUpperCase().concat(name.substring(1))
            setPageName(title)
        }
    }, [urlParams])

    return(
        <>
            <div style={{
                zIndex: 1, 
                position: "fixed", 
                width: "100%", 
                background: "black",
                top: "0px",
                left: "0px"
            }}>
                <h1 style={{textAlign: "center", textDecoration: "underline"}}>{pageName}</h1>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", margin:"auto", padding: "5px 0px", fontSize: `${fontHeight}px`}}>
                    <Link to={"/"} style={urlParams === "/" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                        Home
                    </Link>
                    <Link to={"/documentation"} style={urlParams === "/documentation" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                        Documentation
                    </Link>
                    <Link to={"/changeLogs"} style={urlParams === "/changeLogs" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                        Release Notes
                    </Link>
                    <Link to={"/downloads"} style={urlParams === "/downloads" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                        Downloads
                    </Link>
                    <Link to={"/blog"} style={urlParams === "/blog" ? {color: "whitesmoke", textDecoration: "underline"} : {color: "whitesmoke", textDecoration: "none"}}>
                        Blog
                    </Link>
                </div>
            </div>
        </>
    )
}