import prismaObj from "../prisma/prisma.js";
class NutritionManager{
    constructor(){}
    async getDietById(diet_id:string){
        return await prismaObj.diet.findUnique({
            where: { diet_id: diet_id }
        });
    }
}