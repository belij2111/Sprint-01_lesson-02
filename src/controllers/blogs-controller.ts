import {Request, Response} from "express";
import {OutputBlogType} from "../types/blog-types";
import {HTTP_STATUSES} from "../settings";
import {blogsRepository} from "../repositories/blogs-repozitory";

export const getBlogsController = (req: Request, res: Response<OutputBlogType[]>) => {
    const allBlogs = blogsRepository.getBlogs()

    res
        .status(HTTP_STATUSES.OK_200)
        .json(allBlogs)
}

export const getBlogByIdController = (req: Request, res: Response<OutputBlogType>) => {
    const blogId = req.params.id
    const blog = blogsRepository.getBlogById(blogId)

    if (!blog) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return
    }

    res
        .status(HTTP_STATUSES.OK_200)
        .json(blog)
}