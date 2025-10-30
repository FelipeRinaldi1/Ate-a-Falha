import prismaObj from "../prisma/prisma.js";

class BodyCompositionManager{
    constructor(){}

    //create
    async createBodyComposition(birth:Date,weight:number,height:number,gender:boolean,activityLevel:number,user_id:string){
        const bodyComposition = await prismaObj.bodyComposition.create({
            data:{
                body_composition_birth:birth,
                body_composition_weight:weight,
                body_composition_height:height,
                body_composition_gender:gender,
                body_composition_activity_level:activityLevel,
                user_id:user_id
            }
        })
        return bodyComposition
    }

    //read
    async getBodyCompositionByUserId(user_id:string){
        const bodyComposition = await prismaObj.bodyComposition.findFirst({
            where:{
                user_id:user_id
            }
        })
        return bodyComposition
    }
    
    async getBodyCompositionById(id:string){
        const bodyComposition = await prismaObj.bodyComposition.findUnique({
            where:{
                body_composition_id:id
            }
        })
        return bodyComposition
    }

    async getAllBodyCompositions(){
        const bodyCompositions = await prismaObj.bodyComposition.findMany()
        return bodyCompositions
    }

    //update
    async updateBodyComposition(birth:Date,weight:number,height:number,gender:boolean,activityLevel:number,user_id:string){
        const bodyComposition = await prismaObj.bodyComposition.update({
            where:{
                user_id:user_id
            },
            data:{
                body_composition_birth:birth,
                body_composition_weight:weight,
                body_composition_height:height,
                body_composition_gender:gender,
                body_composition_activity_level:activityLevel,
                user_id:user_id
            }
        })
        return bodyComposition
    }

    //delete
    async deleteBodyComposition(user_id:string){
        const bodyComposition = await prismaObj.bodyComposition.delete({
            where:{
                user_id:user_id
            }
        })
        return bodyComposition
    }

    async deleteAllBodyCompositions(){
        const bodyCompositions = await prismaObj.bodyComposition.deleteMany()
        return bodyCompositions
    }

}

const bodyCompositionManager = new BodyCompositionManager()
export default bodyCompositionManager