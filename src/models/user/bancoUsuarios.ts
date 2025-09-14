import Usuario from "./usuario.js";

export default class bancoUsuario{
    private usuarios: Usuario[]
    constructor(){
        this.usuarios = [new Usuario("admin","admin@example.com","admin123")]
    }
    getUsuarios(){
        return this.usuarios
    }
    getUsuario(index:number):Usuario | undefined{
        return this.usuarios[index]
    }
}