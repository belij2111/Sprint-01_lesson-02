import {Router} from "express";
import {createBlogController, getBlogByIdController, getBlogsController} from "../controllers/blogs-controller";

export const blogsRouter = Router()

blogsRouter.get('/', getBlogsController)
blogsRouter.post('/', createBlogController)
blogsRouter.get('/:id', getBlogByIdController)