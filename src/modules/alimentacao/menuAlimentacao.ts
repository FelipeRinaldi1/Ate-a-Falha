import type GerenciaAlimentacao from "./gerenciaAlimentacao.js";

export default class MenuAlimentacao{
    private gerenciaAlimentacao: GerenciaAlimentacao
    constructor(gerenciador: GerenciaAlimentacao){
        this.gerenciaAlimentacao = gerenciador
    }
    menuPrincipal(indexDieta:number){
        console.log(`Agua: ${this.gerenciaAlimentacao.getAgua(indexDieta)}ml / ${this.gerenciaAlimentacao.getMetaAgua(indexDieta)}` )
        console.log(`Calorias: ${this.gerenciaAlimentacao.getCaloriasDieta(indexDieta)} / ${this.gerenciaAlimentacao.getMetaCaloria(indexDieta)}`,
            `\tCarboidrato: ${this.gerenciaAlimentacao.getCarboidrato(indexDieta)} / ${this.gerenciaAlimentacao.getMetaCarboidrato(indexDieta)}`,
            `\tProteina: ${this.gerenciaAlimentacao.getProteina(indexDieta)} / ${this.gerenciaAlimentacao.getMetaProteina(indexDieta)}`,
            `\tGordura: ${this.gerenciaAlimentacao.getGordura(indexDieta)} / ${this.gerenciaAlimentacao.getMetaGordura(indexDieta)}`,
            `\tFibra: ${this.gerenciaAlimentacao.getFibra(indexDieta)} / ${this.gerenciaAlimentacao.getMetaFibra(indexDieta)}`)
        console.log(
            `${this.gerenciaAlimentacao.getRefeicoes(indexDieta).forEach(refeicao=>{
                refeicao.mostraRefeicaoResumida();
            })}`
        )
        console.log("Adicionar Refeição (+)")
        
    }
}
