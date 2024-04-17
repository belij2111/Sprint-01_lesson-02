import {blogsDB} from "../db/db"

export const blogsRepository = {
    getBlogs(name: string | null | undefined) {
        let filteredBlogs = blogsDB.blogs
        if (name) {
            filteredBlogs = filteredBlogs.filter(e => e.name.indexOf(name) > 1)
        }
        return filteredBlogs
    },
}