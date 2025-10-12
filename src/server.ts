import { PrismaClient } from "../generated/prisma/index.js";
import app from "./app.js"
import prismaObj from "./prisma/prisma.js";

const PORT = 3000
async function main() {

    const user = await prismaObj.user.findFirst({
        include:{
            BodyComposition:true
        }
    })
    console.log(user)
    app.listen(PORT,()=>{
        console.log(`Server running on http://localhost:${PORT}`)
    })
}

main()
    .catch(e=>{
        console.error(e.message);
    })
    .finally(async()=>{
        await prismaObj.$disconnect();
    })