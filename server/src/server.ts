import express from "express"
import * as dotenv from "dotenv"
import { router } from "./router"
dotenv.config()

export const ignition = (): express.Express => {
    const server: express.Express = express()

    server.use(express.json())

    server.use('/', router)

    server.use((req, res, next) => {
        res.sendStatus(200)
    })

    return server
}