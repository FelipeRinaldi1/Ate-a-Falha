import GerenciaMusculacao from "./gerenciaMusculacao.js"
export default class MenuMusculacao{
    gerenciaMusculacao: GerenciaMusculacao
    constructor(gerenciador: GerenciaMusculacao){
        this.gerenciaMusculacao = gerenciador
    }
}