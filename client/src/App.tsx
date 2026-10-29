import React from "react"
import { Route, Routes } from "react-router"

import Home from "./app/Home"
import Blog from "./app/Blog"
import ChangeLogs from "./app/ChangeLogs"
import Documentation from "./app/Documentation"
import Downloads from "./app/Downloads"

export default function App(): React.JSX.Element {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/changeLogs" element={<ChangeLogs />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/downloads" element={<Downloads />} />
        </Routes>
        </>
    )
}
