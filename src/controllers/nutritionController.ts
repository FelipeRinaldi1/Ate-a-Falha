import { Request,Response } from "express";
import nutritionManager from "../managers/nutritionManager.js";

class NutritionController{
    constructor(){}

    //FOOD
    async createFood(req:Request, res:Response){
        try{
            const foodData = req.body;
            const newFood = await nutritionManager.createFood(foodData);
            res.status(201).json(newFood);
        }catch(error){
            res.status(500).json({ error: "Failed to create food", details: error });
        }
    }

    async getAllFoods(req:Request, res:Response){
        try{
            const foods = await nutritionManager.getAllFoods();
            res.status(200).json(foods);
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve foods", details: error });
        }
    }
    async getFoodById(req:Request, res:Response){
        try{
            const { food_id } = req.params;
            const food = await nutritionManager.getFoodById(food_id);
            if(food){
                res.status(200).json(food);
            }else{
                res.status(404).json({ error: "Food not found" });
            }
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve food", details: error });
        }
    }
    async getFoodByName(req:Request, res:Response){
        try{
            const { food_name } = req.params;
            const food = await nutritionManager.getFoodByName(food_name);

            if(food){
                res.status(200).json(food);
            }else{
                res.status(404).json({ error: "Food not found" });
            }
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve food", details: error });
        }
    }

    async updateFood(req:Request,res:Response){
        try{
            const {food_id} = req.params;
            const updateData= req.body;
            const updatedFood = await nutritionManager.updateFood(food_id,updateData);
            res.status(200).json(updatedFood);
        }catch(error){
            res.status(500).json({error:"Failed to update food",details:error})
        }
    }
    async deleteFood(req:Request,res:Response){
        try{
            const {food_id} = req.params;
            await nutritionManager.deleteFood(food_id);
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete food",details:error})
        }
    }
    async deleteAllFoods(req:Request,res:Response){
        try{
            await nutritionManager.deleteAllFoods();
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete foods",details:error})
        }
    }

//DIET GOAL
    async createDietGoal(req:Request,res:Response){
        try{
            const dietGoalData=req.body;
            const newDietGoal = await nutritionManager.createDietGoal(dietGoalData);
            res.status(201).json(newDietGoal);
        }catch(error){
            res.status(500).json({error:"Failed to create diet goal",details:error})
        }
    }
    async getDietGoalByDietId(req:Request,res:Response){
        try{
            const {diet_id}=req.params;
            const dietGoal = await nutritionManager.getDietGoalByDietId(diet_id);
            if(dietGoal){
                res.status(200).json(dietGoal);
            }else{
                res.status(404).json({ error: "Diet goal not found" });
            }
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve diet goal", details: error });
        }
    }
    async getDietGoalById(req:Request,res:Response){
        try{
            const {diet_goal_id}=req.params;
            const dietGoal = await nutritionManager.getDietGoalById(diet_goal_id);
            if(dietGoal){
                res.status(200).json(dietGoal);
            }else{
                res.status(404).json({ error: "Diet goal not found" });
            }
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve diet goal", details: error });
        }
    }
    async getAllDietGoals(req:Request,res:Response){
        try{
            const dietGoals = await nutritionManager.getAllDietGoals();
            res.status(200).json(dietGoals);
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve diet goals", details: error });
        }
    }
    async updateDietGoal(req:Request,res:Response){
        try{
            const {diet_goal_id}=req.params;
            const updateData=req.body;
            const updatedDietGoal = await nutritionManager.updateDietGoal(diet_goal_id,updateData);
            res.status(200).json(updatedDietGoal);
        }catch(error){
            res.status(500).json({error:"Failed to update diet goal",details:error})
        }
    }
    async deleteDietGoal(req:Request,res:Response){
        try{
            const {diet_goal_id}=req.params;
            await nutritionManager.deleteDietGoal(diet_goal_id);
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete diet goal",details:error})
        }
    }
    async deleteAllDietGoals(req:Request,res:Response){
        try{
            await nutritionManager.deleteAllDietGoals();
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete diet goals",details:error})
        }
    }

//DIET
    async createDiet(req:Request,res:Response){
        try{
            const dietData=req.body;
            const newDiet = await nutritionManager.createDiet(dietData);
            res.status(201).json(newDiet);
        }catch(error){
            res.status(500).json({error:"Failed to create diet",details:error})
        }
    }
    async getAllDiets(req:Request,res:Response){
        try{
            const diets = await nutritionManager.getAllDiets();
            res.status(200).json(diets);
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve diets", details: error });
        }
    }
    async getDietById(req:Request,res:Response){
        try{
            const {diet_id}=req.params;
            const diet = await nutritionManager.getDietById(diet_id);
            if(diet){
                res.status(200).json(diet);
            }else{
                res.status(404).json({ error: "Diet not found" });
            }
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve diet", details: error });
        }
    }
    async getDietByUserId(req:Request,res:Response){
        try{
            const {user_id}=req.params;
            const diet = await nutritionManager.getDietByUserId(user_id);
            if(diet){
                res.status(200).json(diet);
            }else{
                res.status(404).json({ error: "Diet not found" });
            }
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve diet", details: error });
        }
    }

    async updateDiet(req:Request,res:Response){
        try{
            const {diet_id}=req.params;
            const updateData=req.body;
            const updatedDiet = await nutritionManager.updateDiet(diet_id,updateData);
            res.status(200).json(updatedDiet);
        }catch(error){
            res.status(500).json({error:"Failed to update diet",details:error})
        }
    }
    async deleteDiet(req:Request,res:Response){
        try{
            const {diet_id}=req.params;
            await nutritionManager.deleteDiet(diet_id);
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete diet",details:error})
        }
    }
    async deleteAllDiets(req:Request,res:Response){
        try{
            await nutritionManager.deleteAllDiets();
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete diets",details:error})
        }
    }

//MEAL
    async createMeal(req:Request,res:Response){
        try{
            const mealData=req.body;
            const newMeal = await nutritionManager.createMeal(mealData);
            res.status(201).json(newMeal);
        }catch(error){
            res.status(500).json({error:"Failed to create meal",details:error})
        }
    }
    async getAllMeals(req:Request,res:Response){
        try{
            const meals = await nutritionManager.getAllMeals();
            res.status(200).json(meals);
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve meals", details: error });
        }
    }
    async getMealById(req:Request,res:Response){
        try{
            const {meal_id}=req.params;
            const meal = await nutritionManager.getMealById(meal_id);
            if(meal){
                res.status(200).json(meal);
            }else{
                res.status(404).json({ error: "Meal not found" });
            }
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve meal", details: error });
        }
    }
    async getMealsByDietId(req:Request,res:Response){
        try{
            const {diet_id}=req.params;
            const meals = await nutritionManager.getMealsByDietId(diet_id);
            res.status(200).json(meals);
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve meals", details: error });
        }
    }
    async updateMeal(req:Request,res:Response){
        try{
            const {meal_id}=req.params;
            const updateData=req.body;
            const updatedMeal = await nutritionManager.updateMeal(meal_id,updateData);
            res.status(200).json(updatedMeal);
        }catch(error){
            res.status(500).json({error:"Failed to update meal",details:error})
        }
    }
    async deleteMeal(req:Request,res:Response){
        try{
            const {meal_id}=req.params;
            await nutritionManager.deleteMeal(meal_id);
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete meal",details:error})
        }
    }
    async deleteAllMeals(req:Request,res:Response){
        try{
            await nutritionManager.deleteAllMeals();
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete meals",details:error})
        }
    }

//MEAL WITH FOOD
//Create
    async createMealWithFood(req:Request,res:Response){
        try{
            const mealData=req.body;
            const newMeal = await nutritionManager.createMealWithFood(mealData);
            res.status(201).json(newMeal);
        }catch(error){
            res.status(500).json({error:"Failed to create meal with food",details:error})
        }
    }
//Read
    async getAllMealsWithFood(req:Request,res:Response){
        try{
            const meals = await nutritionManager.getAllMealsWithFood();
            res.status(200).json(meals);
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve meals with food", details: error });
        }
    }
    async getMealWithFoodById(req:Request,res:Response){
        try{
            const {meal_with_food_id}=req.params;
            const meal = await nutritionManager.getMealWithFoodById(meal_with_food_id);
            if(meal){
                res.status(200).json(meal);
            }else{
                res.status(404).json({ error: "Meal with food not found" });
            }
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve meal with food", details: error });
        }
    }
    async getMealsWithFoodByMealId(req:Request,res:Response){
        try{
            const {meal_id}=req.params;
            const meals = await nutritionManager.getMealsWithFoodByMealId(meal_id);
            res.status(200).json(meals);
        }catch(error){
            res.status(500).json({ error: "Failed to retrieve meals with food", details: error });
        }
    }
    async updateMealWithFood(req:Request,res:Response){
        try{
            const {meal_with_food_id}=req.params;
            const updateData=req.body;
            const updatedMeal = await nutritionManager.updateMealWithFood(meal_with_food_id,updateData);
            res.status(200).json(updatedMeal);
        }catch(error){
            res.status(500).json({error:"Failed to update meal with food",details:error})
        }
    }
    async deleteMealWithFood(req:Request,res:Response){
        try{
            const {meal_with_food_id}=req.params;
            await nutritionManager.deleteMealWithFood(meal_with_food_id);
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete meal with food",details:error})
        }
    }
    async deleteAllMealsWithFood(req:Request,res:Response){
        try{
            await nutritionManager.deleteAllMealsWithFood();
            res.status(204).send();
        }catch(error){
            res.status(500).json({error:"Failed to delete meals with food",details:error})
        }
    }

}
const nutritionController = new NutritionController();
export default nutritionController;