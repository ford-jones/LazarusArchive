import { 
    FindCursor, 
    MongoClient, 
    WithId, 
    Document, 
    InsertOneResult 
} from "mongodb"

import {
    DatabaseManager, 
    CollectionId, 
    CollectionData
} from "../types"

import * as dotenv from "dotenv"
dotenv.config()

export const db = async (): Promise<DatabaseManager> => {
    const uri = process.env.MONGODB_CONNECTION as string
    const client = new MongoClient(uri)
    const db = client.db("blog")

    return {
        getAll: async (collectionId: CollectionId): Promise<FindCursor<WithId<Document>>> => {
            try {
                const blogPosts = db
                .collection(collectionId)
                .find()

                return Promise.resolve(blogPosts)

            } catch (error) {
                console.error(error)
                console.trace()
            }
        },

        addDocument: async (collectionId: CollectionId, data: CollectionData): Promise<InsertOneResult> => {
            try {
                const updateBlog = db
                .collection(collectionId)
                .insertOne(data)

                return Promise.resolve(updateBlog)

            } catch (error) {
                console.error(error)
                console.trace()
            }
        }
    }
}