import React, { useState, useEffect, useCallback } from "react"
import { Link } from "react-router"

import { getChangeLogs } from "@/utils/api"
import { ChangeLog } from "@/utils/types"

interface DownloadLink {
    version: string,
    url: string
}
export default function Releases(): React.ReactNode {
    const [downloads, setDownloads] = useState<Array<DownloadLink>>([])
    const [loading, setLoading] = useState<boolean>(true)
        
    const performSideEffects = useCallback((links: Array<DownloadLink>) => {
            setDownloads(links)
            setLoading(false)
        }, [])
        
        useEffect(() => {
            if(downloads.length < 1) {
                update()
            }
        }, [downloads])
            
        const update = async () => {
            const changeLogs = await getChangeLogs() as Array<ChangeLog>
            if((changeLogs)) {
                performSideEffects(parseMarkdown(changeLogs))
            }
        }
        
        const parseMarkdown = (logs: Array<ChangeLog>): Array<DownloadLink> => {
            return logs.map((log) => ({
                version: log.title,
                url: `https://github.com/ford-jones/lazarus/archive/refs/tags/${log.title}.zip`
            }))
        }

    return(
        <ul style={{padding: "20px", margin: "0px"}}>
            {
                loading 
                    ? <p>loading...</p>
                    : downloads
                    ? downloads.map((download, i) => (
                        <li key={i}>
                            <Link to={download.url} style={{color: "whitesmoke", textDecoration: "underline"}}>{download.version}</Link>
                        </li>
                    ))
                    : <p>Uh oh! Something went wrong.</p>
            }
        </ul>
    )
}