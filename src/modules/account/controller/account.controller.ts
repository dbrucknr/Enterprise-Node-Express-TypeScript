import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IAccountController } from "./account.controller.interaces";

export class AccountController implements IAccountController {
    async create(request: Request, response: Response): Promise<Response> {
        return response.json({ account: "new"})
    }

    async retrieve(request: Request, response: Response): Promise<Response> {
        return response.json({ account: 'test'})
    }

    async update(request: Request, response: Response): Promise<Response> {
        return response.json({ account: 'update'})
    }

    async delete(request: Request, response: Response): Promise<Response> {
        return response.json({ account: 'delete'})
    }
}
