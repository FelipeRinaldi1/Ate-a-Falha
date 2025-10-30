import { PrismaClient } from "../generated/prisma/index.js";
import app from "./app.js"
import prismaObj from "./prisma/prisma.js";

const PORT = 3000
async function main() {

    const user = await prismaObj.user.findFirst({
        where: { user_email: "felipe.rinaldi.sobreira0@gmail.com"},
        include: { BodyComposition: true, Diet: true }
    })
    const diet = await prismaObj.diet.findFirst({
        where: { user_id: user?.user_id },
        include: { dietGoal: true, Meal: { include: { MealWithFood: true } } }
    })
    const mealsWithFood = await prismaObj.mealWithFood.findMany({
        where: { meal: { diet_id: diet?.diet_id } },
        include: { food: true, meal: true }
    })

    console.log(user)
    console.log(diet)
    console.log(mealsWithFood)

    


    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    });
}

main()
    .catch(e=>{
        console.error(e.message);
    })
    .finally(async()=>{
        await prismaObj.$disconnect();
    })