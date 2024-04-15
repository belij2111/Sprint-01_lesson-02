import {Router} from "express";
import {getBlogsController} from "../controllers/blogs-controller";

export const blogsRouter = Router()

blogsRouter.get('/', getBlogsController)