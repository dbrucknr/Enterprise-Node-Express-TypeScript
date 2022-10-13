import { Request, Response } from "express";

export interface IAccountController {
    create(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    retrieve(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    update(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    delete(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}