import {BlogDBType} from "./blog-db-type";
import {PostDbType} from "./post-db-type";

export type blogsDBType = {
    blogs: BlogDBType[]
}
export type postsDbType = {
    posts: PostDbType[]
}

export const blogsDB: blogsDBType = {
    blogs: []
}
export const postsDB: postsDbType = {
    posts: []
}

export const setDB = (dataset?: Partial<blogsDBType>) => {
    if (!dataset) {
        blogsDB.blogs = []
        return
    }
    blogsDB.blogs = dataset.blogs || blogsDB.blogs
}