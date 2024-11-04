"use client"
import { NextApiRequest, NextApiResponse } from "next"
import React from "react"
import Login from "@/components/Login"
import Form from "@/components/Form"

import { useUser } from "@auth0/nextjs-auth0/client"
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default function Admin(): React.ReactNode {
    const { user, error, isLoading } = useUser()
    
    handleAuth()
    
    handleAuth({
      login(req: NextApiRequest, res: NextApiResponse) {
            handleLogin(req, res, {
            returnTo: "http://localhost:3001/admin",
        });
      },
    });

    return (
        <>
        {
            isLoading 
            ? <p>loading...</p> 
            : error 
            ? <h1 className="whiteText">Oops, something went wrong.</h1> 
            : user 
            ? <Form />
            : <Login />
        }
        </>
    )
}
