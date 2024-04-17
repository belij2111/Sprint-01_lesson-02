import {Request, Response} from "express";
import {HTTP_STATUSES} from "../settings";
import {blogsRepository} from "../repositories/blogs-repozitory";
import {testingRepository} from "../repositories/testing-repozitory";

export const testingController = (req: Request, res: Response) => {
    testingRepository.deleteAllData()
    res
        .status(HTTP_STATUSES.NO_CONTENT_204)
        .json({message: 'Attention the database has been cleared'})
}