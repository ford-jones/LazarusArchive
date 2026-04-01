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
        getAll: async (collectionId: CollectionId): Promise<Array<WithId<Document>>> => {
            const client = new MongoClient(uri)
            try {
                const db = client.db("blog")

                const request = db
                .collection(collectionId)
                .find()
                .sort({date: -1})
                .map((blogPost: WithId<Document>) => blogPost)
                .toArray()

                const acquiredBlogPosts = await Promise.resolve(request)
                
                return acquiredBlogPosts

            } catch (error) {
                console.error(error)
                console.trace()
            } finally {
                client.close()
            }
        },

        addDocument: async (collectionId: CollectionId, data: CollectionData): Promise<InsertOneResult> => {
            const client = new MongoClient(uri)
            try {
                const db = client.db("blog")
                
                const request = db
                .collection(collectionId)
                .insertOne(data)

                const blogUpdate = await Promise.resolve(request)

                return blogUpdate

            } catch (error) {
                console.error(error)
                console.trace()
            } finally {
                client.close()
            }
        }
    }
}