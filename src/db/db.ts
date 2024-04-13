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