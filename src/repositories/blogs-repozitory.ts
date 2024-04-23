import {db} from "../db/db"
import {InputBlogType, OutputBlogType} from "../types/blog-types";
import {BlogDBType} from "../db/blog-db-type";

export const blogsRepository = {
    getBlogs(): OutputBlogType[] {
        const blogs = db.blogs
        blogs.map((blog) => {
            return blogMapToOutput(blog)
        })
        return blogs
    },

    createBlog(inputBlog: InputBlogType) {
        const createNewBlog: BlogDBType = {
            ...inputBlog,
            id: crypto.randomUUID(),
        }
        db.blogs = [...db.blogs, createNewBlog]
        return {id: createNewBlog.id}
    },

    getBlogById(id: string): OutputBlogType | null {
        const blog = findById(id)
        if (!blog) return null
        return blogMapToOutput(blog)
    },

    updateBlogById(id: string, inputBlog: InputBlogType) {
        const updateBlog = findById(id)
        if (!updateBlog) return null
        updateBlog.name = inputBlog.name
        updateBlog.description = inputBlog.description
        updateBlog.websiteUrl = inputBlog.websiteUrl
        return true
    },

    deleteBlogById(id: string) {
        const findBlog = findById(id)
        if (!findBlog) return null
        db.blogs = deleteById(id)
        return true
    }
}

function findById(id: string) {
    return db.blogs.find(p => p.id === id)
}

function deleteById(id: string) {
    return db.blogs.filter(p => p.id !== id)
}

function blogMapToOutput(blog: BlogDBType): OutputBlogType {
    return {
        id: blog.id,
        name: blog.name,
        description: blog.description,
        websiteUrl: blog.websiteUrl
    }
}