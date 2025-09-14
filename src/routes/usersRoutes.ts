import express, { response } from "express";
import { Router } from "express";
import userController from "../controllers/userController.js";

class UserRoutes{
    public userController = userController
    public router: Router
    constructor(){
        this.router = express.Router();
        this.initializeRoutes();
    }
    initializeRoutes(){
        this.getAllUsers()
    }

    getAllUsers(){
        this.router.get('/allUsers',this.userController.getUsers.bind(this.userController))
    }
}

const userRoutes = new UserRoutes().router;
export default userRoutes