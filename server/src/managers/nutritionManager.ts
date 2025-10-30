import { Prisma } from "@prisma/client";
import prismaObj from "../prisma/prisma.js";
class NutritionManager{
    constructor(){}

// FOOD
    //Create
    async createFood(data : any){
        return await prismaObj.food.create({
            data: data
        });
    }
    //Read
    async getAllFoods(){
        return await prismaObj.food.findMany();
    }
    async getFoodById(food_id:string){
        return await prismaObj.food.findUnique({
            where: { food_id: food_id }
        });
    }
    async getFoodByName(food_name:string){
        return await prismaObj.food.findFirst({
            where: { food_name: food_name }
        });
    }

    //Update
    async updateFood(food_id:string, data : any){
        return await prismaObj.food.update({
            where: { food_id: food_id },
            data: data
        });
    }

    //Delete
    async deleteFood(food_id:string){
        return await prismaObj.food.delete({
            where: { food_id: food_id }
        });
    }
    async deleteAllFoods(){
        return await prismaObj.food.deleteMany({});
    }

//DietGoal
    //Create
    async createDietGoal(data : any){
        return await prismaObj.dietGoal.create({
            data: data
        });
    }

    //Read
    async getDietGoalByDietId(diet_id:string){
        return await prismaObj.dietGoal.findFirst({
            where: { diet_id: diet_id }
        });
    }
    async getDietGoalById(diet_goal_id:string){
        return await prismaObj.dietGoal.findUnique({
            where: { diet_goal_id: diet_goal_id }
        });
    }

    async getAllDietGoals(){
        return await prismaObj.dietGoal.findMany();
    }

    //update
    async updateDietGoal(diet_goal_id:string, data : any){
        return await prismaObj.dietGoal.update({
            where: { diet_goal_id: diet_goal_id },
            data: data
        });
    }
    //delete
    async deleteDietGoal(diet_goal_id:string){
        return await prismaObj.dietGoal.delete({
            where: { diet_goal_id: diet_goal_id }
        });
    }
    async deleteAllDietGoals(){
        return await prismaObj.dietGoal.deleteMany({});
    }

//Diet
    //Create
    async createDiet(data : any){
        return await prismaObj.diet.create({
            data: data
        });
    }
    //Read
    async getAllDiets(){
        return await prismaObj.diet.findMany();
    }
    async getDietById(diet_id:string){
        return await prismaObj.diet.findUnique({
            where: { diet_id: diet_id },
            include: { Meal: true }
        });
    }
    async getDietByUserId(user_id:string){
        return await prismaObj.diet.findMany({
            where: { user_id: user_id },
            include: { Meal: true }
        });
    }
    //update
    async updateDiet(diet_id:string, data : any){
        return await prismaObj.diet.update({
            where: { diet_id: diet_id },
            data: data
        });
    }
    //delete
    async deleteDiet(diet_id:string){
        return await prismaObj.diet.delete({
            where: { diet_id: diet_id }
        });
    }
    async deleteAllDiets(){
        return await prismaObj.diet.deleteMany({});
    }

//Meal
    //Create
    async createMeal(data : any){
        return await prismaObj.meal.create({
            data: data
        });
    }
    //Read
    async getAllMeals(){
        return await prismaObj.meal.findMany();
    }
    async getMealById(meal_id:string){
        return await prismaObj.meal.findUnique({
            where: { meal_id: meal_id }
        });
    }
    async getMealsByDietId(diet_id:string){
        return await prismaObj.meal.findMany({
            where: { diet_id: diet_id },
            include: { MealWithFood: true }
        });
    }
    //update
    async updateMeal(meal_id:string, data : any){
        return await prismaObj.meal.update({
            where: { meal_id: meal_id },
            data: data
        });
    }
    //delete
    async deleteMeal(meal_id:string){
        return await prismaObj.meal.delete({
            where: { meal_id: meal_id }
        });
    }
    async deleteAllMeals(){
        return await prismaObj.meal.deleteMany({});
    }
//MealWithFood
//Create
    async createMealWithFood(data : any){
        return await prismaObj.mealWithFood.create({
            data: data
        });
    }
//Read
    async getAllMealsWithFood(){
        return await prismaObj.mealWithFood.findMany();
    }
    async getMealWithFoodById(meal_with_food_id:string){
        return await prismaObj.mealWithFood.findUnique({
            where: { meal_with_food_id: meal_with_food_id }
        });
    }
    async getMealsWithFoodByMealId(meal_id:string){
        return await prismaObj.mealWithFood.findMany({
            where: { meal_id: meal_id }
        });
    }
//update
    async updateMealWithFood(meal_with_food_id:string, data : any){
        return await prismaObj.mealWithFood.update({
            where: { meal_with_food_id: meal_with_food_id },
            data: data
        });
    }
//delete
    async deleteMealWithFood(meal_with_food_id:string){
        return await prismaObj.mealWithFood.delete({
            where: { meal_with_food_id: meal_with_food_id }
        });
    }
    async deleteAllMealsWithFood(){
        return await prismaObj.mealWithFood.deleteMany({});
    }
}

const nutritionManager = new NutritionManager();
export default nutritionManager;