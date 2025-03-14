import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET = '8769q8xjhhqgkjq8q79t287tys78s289hs2897y2789y';

interface AuthRequest extends Request {
    userId?: string;
    id?: 'string | JwtPayload';
}

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["token"];
    const decoded = jwt.verify(header as string, JWT_SECRET);
    console.log(decoded);
    if(decoded) {
        (req as AuthRequest).userId = (decoded as AuthRequest).id;
        next();
    } else {
        res.status(403).json({
            message: "You are not logged in."
        })
    }
}