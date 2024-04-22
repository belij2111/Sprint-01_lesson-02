import {Request, Response} from "express";
import {InputBlogType, OutputBlogType} from "../types/blog-types";
import {HTTP_STATUSES} from "../settings";
import {blogsRepository} from "../repositories/blogs-repozitory";
import {OutputErrorsType} from "../types/output-errors-type";

export const getBlogsController = (req: Request, res: Response<OutputBlogType[]>) => {
    const allBlogs = blogsRepository.getBlogs()
    res
        .status(HTTP_STATUSES.OK_200)
        .json(allBlogs)
}

export const createBlogController = (req: Request, res: Response) => {
    const createdInfo = blogsRepository.createBlog(req.body)
    const newBlog = blogsRepository.getBlogById(createdInfo.id)
    res
        .status(HTTP_STATUSES.CREATED_201)
        .json(newBlog)
}

export const getBlogByIdController = (req: Request, res: Response<OutputBlogType>) => {
    const blogId = req.params.id
    const blog = blogsRepository.getBlogById(blogId)

    if (!blog) {
        res
            .status(HTTP_STATUSES.NOT_FOUND_404)
        return
    }

    res
        .status(HTTP_STATUSES.OK_200)
        .json(blog)
}