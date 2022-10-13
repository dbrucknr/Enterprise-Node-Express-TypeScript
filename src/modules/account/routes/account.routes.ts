import { Router } from "express";
import { IAccountRouter } from "./account.routes.interfaces";
import { AccountController } from "../controller/account.controller";

export class AccountRouter implements IAccountRouter {
    public router: Router = Router();
    private _controller: AccountController = new AccountController();

    constructor() {
        this.register()
    }

    register(): void {
        this.router.get("/", this._controller.retrieve)
    }
}