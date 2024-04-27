import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator"
import {HTTP_STATUSES} from "../settings";

export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res
            .status(HTTP_STATUSES.NOT_FOUND_404)
            .json({
                errorsMessages: errors.array().map(error => ({
                    message: error.msg,
                    field: error.type
                }))
            })
        return
    }
    next()
}