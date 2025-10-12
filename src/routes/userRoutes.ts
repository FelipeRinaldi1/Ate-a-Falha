import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/users/register",userController.registerUser);
userRouter.post("/users/login",userController.loginUser);
userRouter.get("/users",userController.getAllUsers);
userRouter.get("/users/:user_id",userController.getUserById);

export default userRouter;
