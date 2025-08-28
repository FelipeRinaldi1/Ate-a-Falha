import BancoAlimentacao from "./bancoAlimentacao.js";
import Alimento from "./alimento/alimento.js";
import type Refeicao from "./refeicao/refeicao.js";
import Dieta from "./dieta/dieta.js";

export default class GerenciaAlimentacao{
    private bd:BancoAlimentacao;
    constructor(bancoDeDados:BancoAlimentacao){
        this.bd = bancoDeDados
    }
    getCarboidrato(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getCarboidrato();
    }
    getProteina(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getProteina();
    }
    getGordura(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getGordura();
    }
    getFibra(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getFibra();
    }
    getAgua(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getAgua();
    }
    getCaloriasDieta(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.calculaCaloriaDieta();
    }
    getMetaCarboidrato(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getMeta().getMetaCarboidrato();
    }
    getMetaProteina(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getMeta().getMetaProteina();
    }
    getMetaGordura(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getMeta().getMetaGordura();
    }
    getMetaFibra(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getMeta().getMetaFibra();
    }
    getMetaAgua(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getMeta().getMetaAgua();
    }
    getMetaCaloria(indexDieta:number):number{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getMetaCaloria();
    }
    getRefeicoes(indexDieta:number):Refeicao[]{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        return dieta.getRefeicoes();
    }
    criaDieta(nomeDieta:string):Dieta{
        const dieta = new Dieta(nomeDieta);
        this.bd.adicionarDieta(dieta);
        return dieta;
    }
    criaAlimento(nome:string,carboidrato:number,proteina:number,gordura:number,fibra:number):Alimento{
        const alimento = new Alimento(nome,carboidrato,proteina,gordura,fibra);
        this.bd.adicionarAlimento(alimento);
        return alimento;
    }
    atualizaMetaDieta(indexDieta:number, metaCarboidrato:number, metaProteina:number, metaGordura:number, metaFibra:number, metaAgua:number):void{
        const dieta = this.bd.getDieta(indexDieta);
        if(dieta){
            dieta.atualizaMetas(metaCarboidrato, metaProteina, metaGordura, metaFibra, metaAgua);
        }
    }
    adicionaAlimentoNaRefeicao(indexDieta:number,indexRefeicao:number,indexAlimento:number,quantidade:number):void{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        const refeicoes = dieta.getRefeicoes();
        if (indexRefeicao < 0 || indexRefeicao >= refeicoes.length) throw new Error("Refeição não encontrada");
        const refeicao = refeicoes[indexRefeicao];
        const alimento = this.bd.getAlimento(indexAlimento);
        if (!alimento) throw new Error("Alimento não encontrado");
        refeicao?.adicionaAlimento(alimento, quantidade);
    }
    adicionaRefeicaoNaDieta(indexDieta: number,nomeRefeicao:string): void {
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        dieta.adicionaRefeicao(nomeRefeicao);
    }
}