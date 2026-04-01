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
    
    return {
        getAll: async (collectionId: CollectionId): Promise<FindCursor<WithId<Document>>> => {
            try {
                const client = new MongoClient(uri)
                const db = client.db("blog")

                const request = db
                .collection(collectionId)
                .find()
                .sort({date: -1})

                const blogPosts = await Promise.resolve(request)
                client.close()

                return blogPosts

            } catch (error) {
                console.error(error)
                console.trace()
            }
        },

        addDocument: async (collectionId: CollectionId, data: CollectionData): Promise<InsertOneResult> => {
            try {
                const client = new MongoClient(uri)
                const db = client.db("blog")
                
                const request = db
                .collection(collectionId)
                .insertOne(data)

                const blogUpdate = await Promise.resolve(request)
                client.close()

                return blogUpdate

            } catch (error) {
                console.error(error)
                console.trace()
            }
        }
    }
}