import { 
    FindCursor, 
    WithId, 
    Document, 
    InsertOneResult 
} from "mongodb"

export interface Details {
    date:               string
    title:              string,
    description:        string,
}

export interface BlogPost extends Details {
    imageUrl:           string | undefined,
}

export interface ChangeLog extends Details {
    whatsNew:           string | undefined,
    bugFixes:           string | undefined,
    breakingChanges:    string | undefined
}

export type CollectionId = "posts" | "changeLogs"
export type CollectionData = BlogPost | ChangeLog

export interface DatabaseManager {
    getAll: (collectionId: CollectionId) => Promise<FindCursor<WithId<Document>>>,
    addDocument: (collectionId: CollectionId, data: CollectionData) => Promise<InsertOneResult>
}