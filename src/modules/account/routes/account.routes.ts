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
        this.router.post("/new", this._controller.create);
        this.router.get("/", this._controller.retrieve);
        this.router.put("/:id/update", this._controller.update);
        this.router.delete("/:id/delete", this._controller.retrieve);
    }
}
