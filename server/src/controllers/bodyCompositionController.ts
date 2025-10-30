import { Request, Response } from "express";
import bodyCompositionManager from "../managers/bodyCompositionManager.js";

class BodyCompositionController{
    constructor(){}

    //create
    async createBodyComposition(req:Request, res:Response){
        const { body_composition_birth, body_composition_weight, body_composition_height, body_composition_gender, body_composition_activity_level, user_id } = req.body;
        if(!body_composition_birth){
            return res.status(400).json({message:"Body_composition_birth is Required"});
        }
        if(!body_composition_weight){
            return res.status(400).json({message:"Body_composition_weight is Required"});
        }

        if(!body_composition_height){
            return res.status(400).json({message:"Body_composition_height is Required"});
        }
        if(body_composition_gender===undefined){
            return res.status(400).json({message:"Body_composition_gender is Required"});
        }
        if(!body_composition_activity_level){
            return res.status(400).json({message:"Body_composition_activity_level is Required"});
        }
        if(!user_id){
            return res.status(400).json({message:"User_id is Required"});
        }
        const bodyComposition = await bodyCompositionManager.createBodyComposition(
            body_composition_birth,
            body_composition_weight,
            body_composition_height,
            body_composition_gender,
            body_composition_activity_level,
            user_id
        );
        res.status(201).json(bodyComposition);
    }

    //read
    async getBodyCompositionByUserId(req:Request, res:Response){
        const { user_id } = req.params;
        console.log(req.params);
        if(!user_id){
            return res.status(400).json({message:"User_id is Required"});
        }
        const bodyComposition = await bodyCompositionManager.getBodyCompositionByUserId(user_id);
        if(!bodyComposition){
            return res.status(404).json({message:"Body Composition not found"});
        }
        res.status(200).json(bodyComposition);
    }

    async getBodyCompositionById(req:Request, res:Response){
        const { id } = req.params;
        if(!id){
            return res.status(400).json({message:"Id is Required"});
        }
        const bodyComposition = await bodyCompositionManager.getBodyCompositionById(id);
        if(!bodyComposition){
            return res.status(404).json({message:"Body Composition not found"});
        }
        res.status(200).json(bodyComposition);
    }

    async getAllBodyCompositions(req:Request, res:Response){
        const bodyCompositions = await bodyCompositionManager.getAllBodyCompositions();
        res.status(200).json(bodyCompositions);
    }

    //update
    async updateBodyComposition(req:Request, res:Response){
        const { user_id } = req.params;
        const { body_composition_birth, body_composition_weight, body_composition_height, body_composition_gender, body_composition_activity_level } = req.body;
        if(!user_id){
            return res.status(400).json({message:"User_id is Required"});
        }
        if(!body_composition_birth){
            return res.status(400).json({message:"Body_composition_birth is Required"});
        }
        if(!body_composition_weight){
            return res.status(400).json({message:"Body_composition_weight is Required"});
        }

        if(!body_composition_height){
            return res.status(400).json({message:"Body_composition_height is Required"});
        }
        if(body_composition_gender===undefined){
            return res.status(400).json({message:"Body_composition_gender is Required"});
        }
        if(!body_composition_activity_level){
            return res.status(400).json({message:"Body_composition_activity_level is Required"});
        }

        const bodyComposition = await bodyCompositionManager.updateBodyComposition(
            body_composition_birth,
            body_composition_weight,
            body_composition_height,
            body_composition_gender,
            body_composition_activity_level,
            user_id
        );
        if(!bodyComposition){
            return res.status(404).json({message:"Body Composition not found"});
        }
        res.status(200).json(bodyComposition);
    }
    //delete
    async deleteBodyComposition(req:Request, res:Response){
        const { user_id } = req.params;
        if(!user_id){
            return res.status(400).json({message:"User_id is Required"});
        }
        const bodyComposition = await bodyCompositionManager.deleteBodyComposition(user_id);
        if(!bodyComposition){
            return res.status(404).json({message:"Body Composition not found"});
        }
        res.status(200).json({message:"Body Composition deleted successfully"});
    }

    async deleteAllBodyCompositions(req:Request, res:Response){
        const bodyCompositions = await bodyCompositionManager.deleteAllBodyCompositions();
        res.status(200).json({message:`${bodyCompositions.count} Body Compositions deleted successfully`});
    }
}

const bodyCompositionController = new BodyCompositionController()
export default bodyCompositionController;