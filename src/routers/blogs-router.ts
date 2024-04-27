import {Router} from "express";
import {
    createBlogController, deleteBlogByIdController,
    getBlogByIdController,
    getBlogsController,
    updateBlogByIdController
} from "../controllers/blogs-controller";
import {authMiddleware} from "../middlewares/authMiddleware";

export const blogsRouter = Router()

blogsRouter.get('/', getBlogsController)
blogsRouter.post('/', authMiddleware, createBlogController)
blogsRouter.get('/:id', getBlogByIdController)
blogsRouter.put('/:id', authMiddleware, updateBlogByIdController)
blogsRouter.delete('/:id', authMiddleware, deleteBlogByIdController)