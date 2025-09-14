import Usuario from "./usuario.js";
import bancoUsuario from "./bancoUsuarios.js";

class UserManager{
    private banco: bancoUsuario
    constructor(){
        this.banco = new bancoUsuario();
    }
    getBanco(): bancoUsuario{
        return this.banco;
    }

    getUsers():Usuario[]{
        return this.banco.getUsuarios();
    }

    criaUsuario(nome:string, email:string, senha:string): Usuario{
        try{
            const usuario = new Usuario(nome, email, senha);
            this.banco.getUsuarios().push(usuario);
            return usuario;
        }catch(error){
            console.log("Error create user - UserManager");
            throw error;
        }

    }
}

const userManager = new UserManager();
export default userManager;