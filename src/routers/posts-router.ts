import {Router} from "express";
import {
    createPostController, deletePostByIdController,
    getPostByIdController,
    getPostsController,
    updatePostByIdController
} from "../controllers/posts-controller";

export const postsRouter = Router()

postsRouter.get('/', getPostsController)
postsRouter.post('/', createPostController)
postsRouter.get('/:id', getPostByIdController)
postsRouter.put('/:id', updatePostByIdController)
postsRouter.delete('/:id', deletePostByIdController)
