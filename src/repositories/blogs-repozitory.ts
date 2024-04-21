import {db} from "../db/db"
import {OutputBlogType} from "../types/blog-types";
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
        const blog = db.blogs.find(p => p.id === id)
        if (!blog) return null
        return blogMapToOutput(blog)
    }

}

function blogMapToOutput(blog: BlogDBType): OutputBlogType {
    return {
        id: blog.id,
        name: blog.name,
        description: blog.description,
        websiteUrl: blog.websiteUrl
    }
}