import {Request, Response} from "express";
import {HTTP_STATUSES} from "../settings";
import {InputPostType, OutputPostType} from "../types/post-types";
import {postsRepository} from "../repositories/posts-repozitory";

export const getPostsController = (req: Request, res: Response<OutputPostType[]>) => {
    const allPosts = postsRepository.getPosts()
    res
        .status(HTTP_STATUSES.OK_200)
        .json(allPosts)
}

export const createPostController = (req: Request, res: Response) => {
    const createdInfo = postsRepository.createPost(req.body)
    if (!createdInfo) {
        res
            .status(HTTP_STATUSES.NOT_FOUND_404)
            .json({message: 'Blog not found'})
        return
    }
    const newPost = postsRepository.getPostById(createdInfo.id)
    res
        .status(HTTP_STATUSES.CREATED_201)
        .json(newPost)
}

export const getPostByIdController = (req: Request, res: Response<OutputPostType>) => {
    const postId = req.params.id
    const post = postsRepository.getPostById(postId)
    console.log(post)
    if (!post) {
        res
            .sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return
    }
    res
        .status(HTTP_STATUSES.OK_200)
        .json(post)
}

export const updatePostByIdController = (req: Request<{ id: string }, {}, InputPostType>, res: Response) => {
    const updatePost = postsRepository.updatePostById(req.params.id, req.body)
    if (!updatePost) {
        res
            .status(HTTP_STATUSES.NOT_FOUND_404)
            .json({message: 'Post not found'})
        return
    }
    res
        .status(HTTP_STATUSES.NO_CONTENT_204)
        .json({message: "successfully updated"})
}

export const deletePostByIdController =
    (req: Request<{ id: string }>, res: Response) => {
        const deletePost = postsRepository.deletePostById(req.params.id)
        if (!deletePost) {
            res
                .status(HTTP_STATUSES.NOT_FOUND_404)
                .json({message: 'Post not found'})
            return
        }
        res
            .status(HTTP_STATUSES.NO_CONTENT_204)
            .json({message: 'Blog deleted successfully'})
    }