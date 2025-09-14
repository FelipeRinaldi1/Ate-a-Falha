import express from 'express';
import methodOverride from 'method-override';
import path from 'path';

class App {
  private server: express.Application;
  private port: number;

  constructor(port: number) {
    this.server = express();
    this.port = port;
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(methodOverride('_method'));
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }

  private routes() {
    // Define a rota de teste dentro da classe
    this.server.get("/", (req, res) => {
      res.send("Hello from Vercel!");
    });
  }

  public getServer(): express.Application {
    return this.server;
  }
}
const app = new App(3000)
export default app