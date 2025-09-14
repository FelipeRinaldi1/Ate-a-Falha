import type { Request, Response } from "express";
import UserManager from "../models/user/userManager.js";
import userManager from "../models/user/userManager.js";

class UserController {
    private userManager: typeof UserManager;
    constructor(userManager: typeof UserManager) {
        this.userManager = userManager;
    }

    getUsers(req: Request, res: Response): Response {
        try {
            const usuarios = this.userManager.getUsers();
            return res.json(usuarios);
        } catch (error) {
            console.error("Error get users - UserController", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default new UserController(userManager);