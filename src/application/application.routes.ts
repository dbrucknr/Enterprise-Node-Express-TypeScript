import { Application, Router } from "express";
import { AccountRouter } from "../modules/account/routes/account.routes";

export class SystemRouter {
    public router: Router = Router();
    private _instance: Application

    constructor(express: Application) {
        this._instance = express;
        this.prescribe()
    }

    private prescribe() {
        this._instance.use("/accounts", new AccountRouter().router)
    }
}