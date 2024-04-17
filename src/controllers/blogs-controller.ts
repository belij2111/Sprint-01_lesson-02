import {Request, Response} from "express";
import {OutputBlogType} from "../types/blog-types";
import {HTTP_STATUSES} from "../settings";
import {blogsRepository} from "../repositories/blogs-repozitory";

export const getBlogsController = (req: Request, res: Response<OutputBlogType[]>) => {
    const name = req.query.name as string | null | undefined;
    const allBlogs = blogsRepository.getBlogs(name)
    res
        .status(HTTP_STATUSES.OK_200)
        .json(allBlogs)
}