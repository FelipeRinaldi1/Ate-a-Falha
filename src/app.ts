import express, { type Application } from 'express'
import methodOverride from 'method-override'
import path from 'path'
import { fileURLToPath } from 'url' 


export default class App{
    private server: Application;
    private port: number;
    public __filename:string = fileURLToPath(import.meta.url);
    public __dirname:string = path.dirname(__filename);
    
    constructor(port:number){
        this.server = express();
        this.port = port;
        this.middlewares() // Duvida aqui
        this.routes() // Duvida aqui
    }

    middlewares(){
        this.server.use(methodOverride('_method'))
        this.server.use(express.static(path.join(__dirname,'views')))
        this.server.use(express.json());
        this.server.use(express.urlencoded({extended:true}))
    }

    routes(){

    }
    getServer():Application{
        return this.server
    }
    getPort():number{
        return this.port
    }
}