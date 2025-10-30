// src/routes/user.routes.ts

import { Router } from "express";
import userController from "../controllers/userController.js";
import bodyCompositionController from "../controllers/bodyCompositionController.js";
import nutritionController from "../controllers/nutritionController.js";

const userRouter = Router({ mergeParams: true });

// Ex: /api/users/user123/diets/dietABC/meals/mealXYZ/foods
userRouter.post("/:user_id/diets/:diet_id/meals/:meal_id/foods", nutritionController.createMealWithFood);
userRouter.get("/:user_id/diets/:diet_id/meals/:meal_id/foods", nutritionController.getMealWithFoodById);
userRouter.patch("/:user_id/diets/:diet_id/meals/:meal_id/foods/:food_id", nutritionController.updateMealWithFood);
userRouter.delete("/:user_id/diets/:diet_id/meals/:meal_id/foods/:food_id", nutritionController.deleteMealWithFood);

// Ex: /api/users/user123/diets/dietABC/meals/mealXYZ
userRouter.post("/:user_id/diets/:diet_id/meals", nutritionController.createMeal);
userRouter.get("/:user_id/diets/:diet_id/meals", nutritionController.getMealsByDietId);
userRouter.get("/:user_id/diets/:diet_id/meals/:meal_id", nutritionController.getMealById);
userRouter.patch("/:user_id/diets/:diet_id/meals/:meal_id", nutritionController.updateMeal);
userRouter.delete("/:user_id/diets/:diet_id/meals/:meal_id", nutritionController.deleteMeal);

// Ex: /api/users/user123/diets/dietABC
userRouter.post("/:user_id/diets", nutritionController.createDiet);
userRouter.get("/:user_id/diets", nutritionController.getDietByUserId);
userRouter.get("/:user_id/diets/:diet_id", nutritionController.getDietById);
userRouter.patch("/:user_id/diets/:diet_id", nutritionController.updateDiet);
userRouter.delete("/:user_id/diets/:diet_id", nutritionController.deleteDiet);

// Ex: /api/users/user123/body-composition
userRouter.post("/:user_id/body-composition", bodyCompositionController.createBodyComposition);
userRouter.get("/:user_id/body-composition", bodyCompositionController.getBodyCompositionByUserId);
userRouter.patch("/:user_id/body-composition", bodyCompositionController.updateBodyComposition);
userRouter.delete("/:user_id/body-composition", bodyCompositionController.deleteBodyComposition);


userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/", userController.getAllUsers);
userRouter.get("/:user_id", userController.getUserById);


export default userRouter;