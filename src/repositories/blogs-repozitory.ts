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
    getBlogById(id: string): OutputBlogType | null {
        const blog = findById(id)
        if (!blog) return null
        return blogMapToOutput(blog)
    }
}

function findById(id: string) {
    return db.blogs.find(p => p.id === id)
}

function blogMapToOutput(blog: BlogDBType): OutputBlogType {
    return {
        id: blog.id,
        name: blog.name,
        description: blog.description,
        websiteUrl: blog.websiteUrl
    }
}