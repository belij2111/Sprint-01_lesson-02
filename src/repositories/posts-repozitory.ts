import {InputPostType, OutputPostType} from "../types/post-types";
import {db} from "../db/db";
import {PostDbType} from "../db/post-db-type";
import {OutputBlogType} from "../types/blog-types";

export const postsRepository = {
    getPosts(): OutputPostType[] {
        const posts = db.posts
        posts.map((post) => {
            return postMapToOutput(post)
        })
        return posts
    },

    createPost(inputPost: InputPostType) {
        const blog = findBlogById(inputPost)
        if (!blog) return null
        const createNewPost: PostDbType = {
            ...inputPost,
            id: crypto.randomUUID(),
            blogName: blog.name
        }
        db.posts = [...db.posts, createNewPost]
        return {id: createNewPost.id}
    },

    getPostById(id: string): OutputPostType | null {
        const post = findById(id)
        if (!post) return null
        return postMapToOutput(post)
    },

    updatePostById(id: string, inputPost: InputPostType) {
        const updatePost = findById(id)
        if (!updatePost) return null
        updatePost.title = inputPost.title
        updatePost.shortDescription = inputPost.shortDescription
        updatePost.content = inputPost.content
        return true
    },

    deletePostById(id: string) {
        const findPost = findById(id)
        if (!findPost) return null
        db.posts = deleteById(id)
        return true
    }
}

function findById(id: string) {
    return db.posts.find(p => p.id === id)
}

function findBlogById(input: InputPostType) {
    return db.blogs.find(p => p.id === input.blogId)
}

function deleteById(id: string) {
    return db.posts.filter(p => p.id !== id)
}

function postMapToOutput(post: PostDbType): OutputPostType {
    return {
        id: post.id,
        title: post.title,
        shortDescription: post.shortDescription,
        content: post.content,
        blogId: post.blogId,
        blogName: post.blogName
    }
}