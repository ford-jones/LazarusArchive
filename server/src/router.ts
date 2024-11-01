import express from "express"
import dotenv from "dotenv"
dotenv.config()

export const router: express.Router = express.Router()

router.get("/getAllPosts", (req, res): void => {
    res.status(200).json("Connected.")
})

router.post("/addPost", (req, res): void => {
    const data = JSON.parse(req.body)
    console.log("Data: ", data)

    res.status(200)
})