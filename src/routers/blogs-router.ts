import {Router} from "express";
import {getBlogByIdController, getBlogsController} from "../controllers/blogs-controller";

export const blogsRouter = Router()

blogsRouter.get('', getBlogsController)
blogsRouter.get('/:id', getBlogByIdController)