import {BlogDBType} from "../src/db/blog-db-type";
import {uniqueId} from "../helpers/generateUniqueID";
import {blogsDBType} from "../src/db/db";

export const blog1: BlogDBType = {
    id: uniqueId,
    name: 'b1',
    description: 'my first blog',
    websiteUrl: 'https://www.google.com'
}
export const blogDataset1: blogsDBType = {
    blogs:[blog1]
}