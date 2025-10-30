import prismaObj from "../../prisma/prisma.js";

class ExerciseWithSetsManager{

    constructor(){}

    //Create
    async createExerciseWithSets(data:any){
        return await prismaObj.exerciseWithSets.create({
            data:data
        })
    }
    
    //Read

    async getExerciseWithSetsById(exercise_with_sets_id:string){
        return await prismaObj.exerciseWithSets.findUnique({
            where :{exercise_with_set_id:exercise_with_sets_id}
        })
    }

    //Update

    async updateExerciseWithSetsById(exercise_with_sets_id:string,data:any){
        return await prismaObj.exerciseWithSets.update({
            where:{exercise_with_set_id:exercise_with_sets_id},
            data:data
        })
    }

    //Delete

    async deleteExerciseWithSetsById(exercise_with_sets_id:string){
        return await prismaObj.exerciseWithSets.delete({
            where:{exercise_with_set_id:exercise_with_sets_id}
        })
    }
}