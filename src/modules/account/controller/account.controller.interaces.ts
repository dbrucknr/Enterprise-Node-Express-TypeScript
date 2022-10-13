import { Request, Response } from "express";

export interface IAccountController {
    retrieve(request: Request, response: Response): Promise<Response<any, Record<string, any>>>
}