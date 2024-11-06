"use client"

import React, { useState, useEffect, useCallback } from "react"
import { getChangeLogs } from "@/utils/api"
import { ChangeLog } from "@/utils/types"

export default function BlogUpdates(): React.ReactNode {
    const [logs, setLogs] = useState<Array<ChangeLog>>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    const performSideEffects = useCallback((allLogs: ChangeLog[]) => {
        setLogs(allLogs)
        setLoading(false)
    }, [])

    useEffect(() => {
        if(logs.length < 1) {
            update()
        }
    }, [logs])
        
    const update = async () => {
        const changeLogs = await getChangeLogs()
        if((changeLogs)) {
            performSideEffects(changeLogs)
        }
        
    }
    
    return(
        <>
            { 
                loading 
                    ? <p>loading...</p>
                    : logs 
                    ? logs.map((log, i) => (
                        <div key={i}>
                            <p>{log.changeLog}</p>
                        </div>
                    ))
                    : <p>Uh oh! Something went wrong.</p>
            }
        </>
    )

}