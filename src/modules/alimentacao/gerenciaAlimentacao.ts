import BancoAlimentacao from "./bancoAlimentacao.js";
import Alimento from "./alimento/alimento.js";
import Refeicao from "./refeicao/refeicao.js";
import Dieta from "./dieta/dieta.js";

export default class GerenciaAlimentacao{
    private bd:BancoAlimentacao;
    constructor(bancoDeDados:BancoAlimentacao){
        this.bd = bancoDeDados
    }
    getBancoDeDados():BancoAlimentacao{
        return this.bd;
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
    adicionaRefeicaoImportadaNaDieta(indexDieta:number,refeicao:Refeicao):void {
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada");
        dieta.importaRefeicao(refeicao);
    }

    //Exportar

    exportaAlimento(indexAlimento: number):string {
        const alimento = this.bd.getAlimento(indexAlimento);
        if (!alimento) throw new Error("Alimento não encontrado");
        return JSON.stringify(alimento,null,2);
    }
    exportaRefeicao(indexDieta:number,indexRefeicao:number):string{
        const dieta = this.bd.getDieta(indexDieta);
        if (!dieta) throw new Error("Dieta não encontrada")
        const refeicao = dieta.getRefeicoes()[indexRefeicao];
        if (!refeicao) throw new Error("Refeição não encontrada");
        return JSON.stringify(refeicao,null,2);
    }
    exportaDieta(indexDieta:number):string{
        const dieta = this.bd.getDieta(indexDieta);
        if(!dieta) throw new Error("Dieta não encontrada");
        return JSON.stringify(dieta,null,2);
    }

    //Importar

    importaAlimento(json:string):Alimento{
        const data = JSON.parse(json);
        return new Alimento(
            data.nomeAlimento,
            Number(data.carboidrato) * 100,
            Number(data.proteina) * 100,
            Number(data.gordura) * 100,
            Number(data.fibra) * 100
        );
    }
    importaRefeicao(json:string):Refeicao{
        const data = JSON.parse(json);
        let refeicao = new Refeicao(
            data.nomeRefeicao
        );
        data.alimentos.forEach((item:any) => {
            const dadosAlimento = item.alimento;
            const quantidade = item.quantidade;

            const alimento = new Alimento(
                dadosAlimento.nomeAlimento,
                dadosAlimento.carboidrato * 100,
                dadosAlimento.proteina * 100,
                dadosAlimento.gordura * 100,
                dadosAlimento.fibra * 100
            );
            refeicao.adicionaAlimento(alimento, quantidade);
        });
        return refeicao;
    }
    importaDieta(json:string):Dieta{
        const data = JSON.parse(json);
        const dieta = new Dieta(data.nomeDieta);
        data.refeicoes.forEach((item:any) => {
            const refeicao = this.importaRefeicao(JSON.stringify(item));
            dieta.importaRefeicao(refeicao);
        });
        return dieta;
    }
    //ARRUMAR AQUI

}