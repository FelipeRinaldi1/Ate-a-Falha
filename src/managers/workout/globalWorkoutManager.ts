import prismaObj from "../../prisma/prisma.js";

class GlobalWorkoutManager{
    constructor(){}

    //Create
    async createGlobalWorkout(data:any){
        return await prismaObj.globalWorkout.create({
            data:data
        })
    }

    //Read
    async getAllGlobalWorkouts(){
        return await prismaObj.globalWorkout.findMany()
    }

    async getGlobalWorkoutById(global_workout_id:string){
        return await prismaObj.globalWorkout.findUnique({
            where:{global_workout_id:global_workout_id}
        })
    }

    async getGlobalWorkoutsByUserId(user_id:string){
        return await prismaObj.globalWorkout.findMany({
            where:{user_id:user_id}
        })
    }

    //Update

    async updateGlobalWorkoutById(global_workout_id:string,data:any){
        return await prismaObj.globalWorkout.update({
            where:{global_workout_id:global_workout_id},
            data:data
        })
    }

    //Delete
    async deleteGlobalWorkoutById(global_workout_id:string){
        return await prismaObj.globalWorkout.delete({
            where:{global_workout_id:global_workout_id}
        })
    }
}