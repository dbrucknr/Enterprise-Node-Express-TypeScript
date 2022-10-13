import { Request, Response } from "express";
import { IAccountController } from "./account.controller.interaces";

export class AccountController implements IAccountController {
    async retrieve(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        return response.json({ account: 'test'})
    }
}