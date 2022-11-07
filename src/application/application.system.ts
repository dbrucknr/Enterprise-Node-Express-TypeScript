import express, { Application } from "express";
import { Server, createServer } from "http";
import { SystemRouter } from "./application.routes";

export class System {
    private _express: Application;
    private _server: Server;
    private _port: number;
    static _instance: System;

    private constructor(port: number) {
        this._port = port;
        this._express = express();
        this.configure();
        this._server = createServer(this._express);
    }

    public static instance(port: number): System {
        if (!System._instance) {
            System._instance = new System(port)
        }
        return System._instance
    }

    public async listen() {
        const instance = System._instance;
        instance._server.listen(instance._port, () => {
            console.log(`System server active and listening on port: ${instance._port}`)
        });
    }

    public configure() {
        this._express.use(express.json());
        new SystemRouter(this._express);
    }
}
