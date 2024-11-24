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
              top: "0px",
              left: "0px"
            }}>
                <h1 style={{textAlign: "center", textDecoration: "underline"}}>Downloads:</h1>
                <NavBar />
            </div>
            <div style={{paddingTop: "105px"}}>
                    <ul>
                        <li>
                            <a style={{color: "whitesmoke"}} href="https://github.com/ford-jones/Lazarus/archive/refs/tags/v0.2.0.zip">0.2.0-alpha</a>
                        </li>
                        <li>
                            <a style={{color: "whitesmoke"}} href="https://github.com/ford-jones/Lazarus/archive/refs/tags/v0.1.7.zip">0.1.7-alpha</a>
                        </li>
                        <li>
                            <a style={{color: "whitesmoke"}} href="https://github.com/ford-jones/Lazarus/archive/refs/tags/v0.1.6.zip">0.1.6-alpha</a>
                        </li>
                        <li>
                            <a style={{color: "whitesmoke"}} href="https://github.com/ford-jones/Lazarus/archive/refs/tags/v0.1.3.zip">0.1.3-alpha</a>
                        </li>
                        <li>
                            <a style={{color: "whitesmoke"}} href="https://github.com/ford-jones/Lazarus/archive/refs/tags/v0.1.2.zip">0.1.2-alpha</a>
                        </li>
                    </ul>
            </div>
        </>
    )
}