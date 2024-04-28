import {NextFunction, Request, Response} from "express";
import {FieldValidationError, validationResult} from "express-validator"
import {HTTP_STATUSES} from "../settings";

export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res
            .status(HTTP_STATUSES.BAD_REQUEST_400)
            .json({
                errorsMessages: (errors.array({onlyFirstError:true}) as FieldValidationError[]).map(error => ({
                    message: error.msg,
                    field: error.path
                }))
            })
        return
    }
    next()
}