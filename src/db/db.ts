import {BlogDBType} from "./blog-db-type";
import {PostDbType} from "./post-db-type";

export type DBType = {
    blogs: BlogDBType[],
    posts: PostDbType[]
}

export const db: DBType = {
    blogs: [],
    posts: []
}

export const setDB = (dataset?: Partial<DBType>) => {
    if (!dataset) {
        db.blogs = []
        db.posts = []
        return
    }
    db.blogs = dataset.blogs || db.blogs
    db.posts = dataset.posts || db.posts
}