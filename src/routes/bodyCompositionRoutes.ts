import bodyCompositionController from "../controllers/bodyCompositionController.js";
import { Router } from "express";

const userBodyCompositionRouter = Router({ mergeParams: true });

userBodyCompositionRouter.post("/", bodyCompositionController.createBodyComposition); 
userBodyCompositionRouter.get("/", bodyCompositionController.getBodyCompositionByUserId); 
userBodyCompositionRouter.patch("/", bodyCompositionController.updateBodyComposition); 
userBodyCompositionRouter.delete("/", bodyCompositionController.deleteBodyComposition);

export {userBodyCompositionRouter};

const generalBodyCompositionRouter = Router();

generalBodyCompositionRouter.get("/", bodyCompositionController.getAllBodyCompositions); 
generalBodyCompositionRouter.get("/:id", bodyCompositionController.getBodyCompositionById);

export {generalBodyCompositionRouter}