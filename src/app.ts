import express, { type Application } from 'express'
import methodOverride from 'method-override'
import path from 'path'
import { fileURLToPath } from 'url' 

export default class App{
    private server: Application;
    private port: number;
    
    constructor(port:number){
        this.server = express();
        this.port = port;
    }

    getServer():Application{
        return this.server
    }
    getPort():number{
        return this.port
    }
}