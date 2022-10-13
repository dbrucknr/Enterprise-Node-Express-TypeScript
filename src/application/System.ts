import express, { Application } from "express";
import { Server, createServer } from "http";

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
        System._instance._server.listen(System._instance._port, () => {
            console.log(`System server active and listening on port: ${System._instance._port}`)
        });
    }

    public configure() {
        this._express.use(express.json());
    }
}