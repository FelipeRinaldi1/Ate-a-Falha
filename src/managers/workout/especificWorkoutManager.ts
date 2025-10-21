import { PrismaClient } from "@prisma/client";
import prismaObj from "../../prisma/prisma.js";

class especificWorkoutManager{
    constructor(){}
    //Create
    async createEspecificWorkout(data:any){
        return await prismaObj.especificWorkout.create({
            data:data
        })
    }

    //Read
    async getAllEspecificWorkouts(){
        return await prismaObj.especificWorkout.findMany()
    }

    async getEspecificWorkoutsByGlobalId(global_id:string){
        return await prismaObj.especificWorkout.findMany({
            where:{globalWorkoutGlobal_workout_id:global_id}
        })
    }

    async getEspecificWorkoutById(especific_workout_id:string){
        return await prismaObj.especificWorkout.findUnique({
            where:{especific_workout_id:especific_workout_id}
        })
    }

    //Update

    async updateEspecificWorkoutById(especific_workout_id:string,data:any){
        return await prismaObj.especificWorkout.update({
            where:{especific_workout_id:especific_workout_id},
            data:data
        })
    }

    //Delete

    async deleteEspecificWorkoutById(especific_workout_id:string){
        return await prismaObj.especificWorkout.delete({
            where:{especific_workout_id:especific_workout_id}
        })
    }
}