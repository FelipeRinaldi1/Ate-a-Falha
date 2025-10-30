import prismaObj from "../prisma/prisma.js"; 
class UserManager{
    //create
    async registerUser(user_name:string, user_email:string, user_password:string){
        return await prismaObj.user.create({
            data: {
                user_name: user_name,
                user_email: user_email,
                user_password: user_password
            }
        });
    }
    async loginUser(user_email:string, user_password:string){
        return await prismaObj.user.findFirst({
            where: { user_email: user_email, 
                     user_password: user_password }
        });
    }
    
    //read
    async getAllUsers(){
        return await prismaObj.user.findMany();
    }
    async getUserById(user_id:string){
        return await prismaObj.user.findUnique({
            where: { user_id: user_id }
        });
    }
    async getUserByEmail(user_email:string){
        return await prismaObj.user.findUnique({
            where: { user_email: user_email }
        });
    }

    //update
    async updateUser(user_id:string, user_name?:string, user_email?:string, user_password?:string){
        return await prismaObj.user.update({
            where: { user_id: user_id },
            data: {
                user_name: user_name,
                user_email: user_email,
                user_password: user_password
            }
        });
    }

    //delete
    async deleteUser(user_id:string){
        return await prismaObj.user.delete({
            where: { user_id: user_id }
        });
    }
}
const userManager = new UserManager();
export default userManager;