import prismaObj from "../../prisma/prisma.js";

class ExerciseManager{
    public prisma:any;
    constructor(){
        this.prisma = prismaObj;
    }

    //Create
    async createExercise(data:any){
        return await this.prisma.exercise.create({
            data:data
        })
    }

    //Read

    async getExerciseById(exercise_id:string){
        return await this.prisma.exercise.findUnique({
            where:{exercise_id:exercise_id}
        })
    }

    //Update

    async updateExerciseById(exercise_id:string,data:any){
        return await this.prisma.exercise.update({
            where:{exercise_id:exercise_id},
            data:data
        })
    }
}