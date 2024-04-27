import {NextFunction, Request, Response} from "express";
import {HTTP_STATUSES, SETTINGS} from "../settings";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers['authorization'] as string
    console.log(auth)
    if (!auth) {
        res
            .status(HTTP_STATUSES.UNAUTHORIZED_401)
            .json({})
        return
    }

    const buff = Buffer.from(SETTINGS.ADMIN_AUTH, 'utf-8')
    const codedAuth = buff.toString('base64')

    if (auth.slice(6) !== codedAuth || auth.slice(0, 5) !== 'Basic') {
        res
            .status(HTTP_STATUSES.UNAUTHORIZED_401)
            .json({})
    }
    next()
}