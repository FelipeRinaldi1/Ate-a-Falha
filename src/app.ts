  import express from 'express';
  import methodOverride from 'method-override';
  import path from 'path';
  import userRoutes from './routes/usersRoutes.js';

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
      this.server.get("/", (req, res) => {
        res.send("Hello from Vercel!");
      });
      this.server.use('/users', userRoutes);
    }

    public getServer(): express.Application {
      return this.server;
    }
  }
  const app = new App(3000)
  const server = app.getServer();

  export default server