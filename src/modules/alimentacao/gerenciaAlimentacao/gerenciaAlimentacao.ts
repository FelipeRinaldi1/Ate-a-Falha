import Alimento from "../alimento/alimento/alimento.js";
import AlimentoNaRefeicao from "../alimento/alimentoNaFicha/alimentoNaRefeicao.js";
import Refeicao from "../refeicao/refeicao.js";
import MetaDieta from "../dieta/metasDieta/metasDieta.js";
import Dieta from "../dieta/dieta.js";

export default class GerenciaAlimentacao{
    constructor(){}

    criaDieta(nomeDieta:string):Dieta{
        const dieta = new Dieta(nomeDieta);
        return dieta;
    }
    criaMetaDieta(calorias:number,carboidrato:number,proteina:number,gordura:number,fibra:number):MetaDieta{
        const meta = new MetaDieta(calorias,carboidrato,proteina,gordura,fibra);
        return meta;
    }
    criaRefeicao(nomeRefeicao:string):Refeicao{
        const refeicao = new Refeicao(nomeRefeicao);
        return refeicao;
    }
    criaAlimentoPersonalizado(nome:string,carboidrato:number,proteina:number,gordura:number,fibra:number):Alimento{
        const alimento = new Alimento(nome,carboidrato,proteina,gordura,fibra);
        return alimento;
    }
    criaAlimentoNaRefeicao(alimento:Alimento,quantidade:number):AlimentoNaRefeicao{
        const alimentoNaRefeicao = new AlimentoNaRefeicao(alimento, quantidade);
        return alimentoNaRefeicao;
    }
    adicionaRefeicaoNaDieta(dieta: Dieta, refeicao: Refeicao): void {
        dieta.adicionaRefeicao(refeicao);
    }
    removeRefeicaoNaDieta(dieta: Dieta, refeicao: Refeicao): void {
        dieta.removeRefeicao(refeicao);
    }
    adicionaAlimentoNaRefeicao(refeicao: Refeicao, alimentoNaRefeicao: AlimentoNaRefeicao): void {
        refeicao.adicionaAlimento(alimentoNaRefeicao);
    }
    removeAlimentoNaRefeicao(refeicao: Refeicao, alimentoNaRefeicao: AlimentoNaRefeicao): void {
        refeicao.removeAlimento(alimentoNaRefeicao);
    }
    calculaCaloriaDieta(dieta: Dieta): number {
        return dieta.calculaCaloriaDieta();
    }
    trocaMetasDieta(dieta:Dieta,carboidrato:number,proteina:number,gordura:number,fibra:number,agua:number):void{
        dieta.setMetaCarboidrato(carboidrato);
        dieta.setMetaProteina(proteina);
        dieta.setMetaGordura(gordura);
        dieta.setMetaFibra(fibra);
        dieta.setMetaAgua(agua);
    }
}