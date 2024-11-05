import { db } from "./db"
import { FindCursor, WithId, Document } from "mongodb"
import { BlogPost, ChangeLog } from "../types"

import { StatusCodes } from "http-status-codes"
import express from "express"
import dotenv from "dotenv"
dotenv.config()

export const router: express.Router = express.Router()

router.use((req, res, next) => {
    res.append('access-control-allow-origin', "*");
    res.append('access-control-allow-methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.append('access-control-allow-headers', 'access-control-allow-origin, Content-Type');
    next();
})

router.get("/getAllPosts", async (req, res): Promise<void> => {
    const database = await db()
    const data = await database.getAll("posts")

    const scanDocs: FindCursor<WithId<Document>> = data.map((blogPost: WithId<Document>) => blogPost)
    const documents: Array<WithId<Document>> = await scanDocs.toArray()

    console.log("Data: ", data)

    res.status(StatusCodes.OK).json(documents)
})

router.get("/getAllChangeLogs", async (req, res): Promise<void> => {
    const database = await db()
    const data = await database.getAll("changeLogs")

    const scanDocs: FindCursor<WithId<Document>> = data.map((blogPost: WithId<Document>) => blogPost)
    const documents: Array<WithId<Document>> = await scanDocs.toArray()

    console.log("Data: ", data)

    res.status(StatusCodes.OK).json(documents)
})

router.post("/addPost", async (req, res): Promise<void> => {
    const database = await db()
    
    const data: BlogPost = req.body
    const result = await database.addDocument("posts", data)

    if(result.acknowledged == true) {
        res.status(StatusCodes.OK).json(result)
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
})

router.post("/addChangeLog", async (req, res): Promise<void> => {
    const database = await db()
    
    const data: string = req.body
    console.log(data)
    // const result = await database.addDocument("changeLogs", data)

    // if(result.acknowledged == true) {
    //     res.status(StatusCodes.OK).json(result)
    // } else {
    //     res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    // }
})