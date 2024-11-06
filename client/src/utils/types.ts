export interface Details {
    date:               string
    title:              string,
    description:        string,
}

export interface BlogPost extends Details {
    imageUrl:           string | undefined,
}

export interface ChangeLog extends Details {
    changeLog: string
}

export type CollectionId = "posts" | "changeLogs"
export type CollectionData = BlogPost | ChangeLog