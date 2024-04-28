import {Request, Response} from "express";
import {InputBlogType, OutputBlogType} from "../types/blog-types";
import {HTTP_STATUSES} from "../settings";
import {blogsRepository} from "../repositories/blogs-repozitory";

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
    console.log(blog)
    if (!blog) {
        res
            .sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return
    }

    res
        .status(HTTP_STATUSES.OK_200)
        .json(blog)
}

export const updateBlogByIdController = (req: Request<{ id: string }, {}, InputBlogType>, res: Response) => {
    const updateBlog = blogsRepository.updateBlogById(req.params.id, req.body)
    if (!updateBlog) {
        res
            .status(HTTP_STATUSES.NOT_FOUND_404)
            .json({message: 'Blog not found'})
        return
    }
    res
        .status(HTTP_STATUSES.NO_CONTENT_204)
        .json({message: "successfully updated"})
}

export const deleteBlogByIdController = (req: Request<{ id: string }>, res: Response) => {
    const deleteBlog = blogsRepository.deleteBlogById(req.params.id)
    if (!deleteBlog) {
        res
            .status(HTTP_STATUSES.NOT_FOUND_404)
            .json({message: 'Blog not found'})
        return
    }
    res
        .status(HTTP_STATUSES.NO_CONTENT_204)
        .json({message: 'Blog deleted successfully'})
}