import { Router } from "express";
import nutritionController from "../controllers/nutritionController.js";

const nutritionRouter = Router({ mergeParams: true });


nutritionRouter.post("/foods", nutritionController.createFood);
nutritionRouter.get("/foods", nutritionController.getAllFoods);
nutritionRouter.get("/foods/:food_id", nutritionController.getFoodById);
nutritionRouter.get("/foods/name/:food_name", nutritionController.getFoodByName);
nutritionRouter.patch("/foods/:food_id", nutritionController.updateFood);
nutritionRouter.delete("/foods/:food_id", nutritionController.deleteFood);
nutritionRouter.delete("/foods", nutritionController.deleteAllFoods);

nutritionRouter.post("/diet-goals", nutritionController.createDietGoal);
nutritionRouter.get("/diet-goals/:diet_goal_id", nutritionController.getDietGoalById);
nutritionRouter.patch("/diet-goals/:diet_goal_id", nutritionController.updateDietGoal);
nutritionRouter.delete("/diet-goals/:diet_goal_id", nutritionController.deleteDietGoal);

export default nutritionRouter;