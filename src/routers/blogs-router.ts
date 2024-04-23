import {Router} from "express";
import {
    createBlogController, deleteBlogByIdController,
    getBlogByIdController,
    getBlogsController,
    updateBlogByIdController
} from "../controllers/blogs-controller";

export const blogsRouter = Router()

blogsRouter.get('/', getBlogsController)
blogsRouter.post('/', createBlogController)
blogsRouter.get('/:id', getBlogByIdController)
blogsRouter.put('/:id', updateBlogByIdController)
blogsRouter.delete('/:id', deleteBlogByIdController)