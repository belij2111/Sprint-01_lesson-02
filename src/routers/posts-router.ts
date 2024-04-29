import {Router} from "express";
import {
    createPostController, deletePostByIdController,
    getPostByIdController,
    getPostsController,
    updatePostByIdController
} from "../controllers/posts-controller";
import {authMiddleware} from "../middlewares/auth-middleware";
import {inputValidationMiddleware} from "../middlewares/input-validation-middlware";
import {postsInputValidationMiddleware} from "../middlewares/posts-input-validation-middleware";

export const postsRouter = Router()

postsRouter.get('/', getPostsController)
postsRouter.post('/', authMiddleware, postsInputValidationMiddleware, inputValidationMiddleware, createPostController)
postsRouter.get('/:id', getPostByIdController)
postsRouter.put('/:id', authMiddleware, postsInputValidationMiddleware, inputValidationMiddleware, updatePostByIdController)
postsRouter.delete('/:id', authMiddleware, deletePostByIdController)
