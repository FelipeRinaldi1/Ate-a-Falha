import prismaObj from "../../prisma/prisma.js";

class SetManager{
    constructor(){
    }
    //Create

    async createSet(data:any){
        return await prismaObj.sets.create({
            data:data
        })
    }

    //Read

    async getSetById(set_id:string){
        return await prismaObj.sets.findUnique({
            where:{set_id:set_id}
        })
    }
    async getAllSets(){
        return await prismaObj.sets.findMany();
    }

    //Update
    async updateSetById(set_id:string, data:any){
        return await prismaObj.sets.update({
            where:{set_id:set_id},
            data:data
        })
    }

    //Delete
    async deleteSetById(set_id:string){
        return await prismaObj.sets.delete({
            where:{set_id:set_id}
        })
    }

}