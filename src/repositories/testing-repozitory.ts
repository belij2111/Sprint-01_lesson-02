import {blogsDB, postsDB} from "../db/db"

export const testingRepository = {
    deleteAllData: function () {
        blogsDB.blogs = []
        postsDB.posts = []

        return {blogs: blogsDB.blogs, posts: postsDB.posts}
    }
}