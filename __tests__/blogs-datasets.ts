import {BlogDBType} from "../src/db/blog-db-type";

export const blog1: BlogDBType = {
    id: crypto.randomUUID(),
    name: 'b1',
    description: 'my first blog',
    websiteUrl: 'https://www.google.com'
}
export const blogDataset1: { blogs: BlogDBType[] } = {
    blogs: [blog1]
}