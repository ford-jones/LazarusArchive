"use client"

import React, { useState, useEffect, useCallback } from "react"
import { getChangeLogs } from "@/utils/api"
import { ChangeLog } from "@/utils/types"

interface FormattedNote {
    version: string,
    newFeatures: Array<string> | undefined,
    bugFixes: Array<string> | undefined,
    otherChanges: Array<string> | undefined
}

export default function BlogUpdates(): React.ReactNode {
    const [logs, setLogs] = useState<Array<FormattedNote>>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    const performSideEffects = useCallback((allLogs: Array<FormattedNote>) => {
        setLogs(allLogs)
        setLoading(false)
    }, [])

    useEffect(() => {
        if(logs.length < 1) {
            update()
        }
    }, [logs])
        
    const update = async () => {
        const changeLogs = await getChangeLogs() as Array<ChangeLog>
        if((changeLogs)) {
            performSideEffects(parseMarkdown(changeLogs))
        }
    }

    const parseMarkdown = (allLogs: Array<ChangeLog>): Array<FormattedNote> => {
        return allLogs.map((data) => {
            const seperateLogs = data.changeLog.split("*")
            const version = data.title
            const newFeatures = seperateLogs.filter((logData) => logData.includes("Feat:"))
            const bugFixes = seperateLogs.filter((logData) => logData.includes("Fix:"))

            const otherChanges = seperateLogs.filter((logData) => {
                const index = logData.indexOf("): ")
                const identifier = logData.substring(index, index + 7)

                return identifier !== "): Fix:" && 
                       identifier !== "): fix:" &&
                       identifier !== "): Feat" &&
                       identifier !== "): feat"
            })

            return {
                version,
                newFeatures,
                bugFixes,
                otherChanges
            }
        })
    }
    
    return(
        <>
            { 
                loading 
                    ? <p>loading...</p>
                    : logs 
                    ? logs.map((log, i) => (
                        <div key={i}>
                            <h4>{log.version}</h4>
                            {   
                                log.newFeatures?.length
                                ? <>
                                    <p>New Features:</p>
                                    <ul>
                                        {
                                            log.newFeatures.map((feature, x) => <li key={x}>{feature.split(":")[3]}</li>)
                                        }
                                    </ul>
                                  </>
                                : null
                            }
                            {   
                                log.bugFixes?.length
                                ? <>
                                    <p>Bug Fixes:</p>
                                    <ul>
                                        {
                                            log.bugFixes.map((fix, y) => <li key={y}>{fix.split(":")[3]}</li>)
                                        }
                                    </ul>
                                  </>
                                : null
                            }
                            {   
                                log.otherChanges?.length
                                ? <>
                                    <p>Other Changes:</p>
                                    <ul>
                                        {
                                            log.otherChanges.map((change, z) => <li key={z}>{change.split(":")[3]}</li>)
                                        }
                                    </ul>
                                  </>
                                : null
                            }
                            <div style={{width: "100dvw", background: "whitesmoke", height: "1px", marginTop: "5dvh"}}></div>
                        </div>
                    ))
                    : <p>Uh oh! Something went wrong.</p>
            }
        </>
    )

}