import { Request, Response } from "express";
import userManager from "../managers/userManager.js";

class UserController{
    constructor(){}
    async registerUser(req:Request, res:Response){
        const { user_name,user_email,user_password} = req.body;
        if(!user_name){
            return res.status(400).json({message:"User_name is Required"});
        }
        if(!user_email){
            return res.status(400).json({message:"User_email is Required"});
        }
        if(!user_password){
            return res.status(400).json({message:"User_password is Required"});
        }

        try{
            const newUser = await userManager.registerUser(user_name,user_email,user_password);
            res.status(201).json(newUser);
        }catch(error){
            res.status(500).json({message:"Error creating user", error})
        }
    }
    async loginUser(req:Request, res:Response){
        const { user_email, user_password } = req.body;
        if(!user_email){
            return res.status(400).json({message:"User_email is Required"});
        }
        if(!user_password){
            return res.status(400).json({message:"User_password is Required"});
        }
        try{
            const user = await userManager.loginUser(user_email, user_password);
            if(!user){
                return res.status(404).json({message:"User not found"});
            }
            return res.status(200).json(user);
        }catch(error){
            res.status(500).json({message:"Error logging in", error})
        }
    }
    async getAllUsers(req:Request, res:Response){
        try{
            const users = await userManager.getAllUsers();
            res.status(200).json(users);
        }catch(error){
            res.status(500).json({message:"Error fetching users", error})
        }
    }
    async getUserById(req:Request, res:Response){
        const { user_id } = req.params;
        try{
            const user = await userManager.getUserById(user_id);
            if(!user){
                return res.status(404).json({message:"User not found"});
            }
            res.status(200).json(user);
        }catch(error){
            res.status(500).json({message:"Error fetching user", error})
        }
    }
    async getUserByEmail(req:Request, res:Response){
        const { user_email } = req.params;
        try{
            const user = await userManager.getUserByEmail(user_email);
            if(!user){
                return res.status(404).json({message:"User not found"});
            }
            res.status(200).json(user);
        }catch(error){
            res.status(500).json({message:"Error fetching user", error})
        }
    }
}
const userController = new UserController();
export default userController;