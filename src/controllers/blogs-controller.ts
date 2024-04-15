import {Request, Response} from "express";
import {OutputBlogType} from "../types/blog-types";
import {HTTP_STATUSES} from "../settings";
import {blogsRouter} from "../routers/blogs-router";
import {blogsRepository} from "../repositories/blogs-repozitory";

export const getBlogsController = (req: Request, res: Response<OutputBlogType[]>) => {
    const allBlogs = blogsRepository.getBlogs(req.body)
res
    .status(HTTP_STATUSES.OK_200)
    .json(allBlogs)
}