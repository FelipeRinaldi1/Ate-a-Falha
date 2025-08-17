import Refeicao from "../refeicao/refeicao.js";
import MetaDieta from "./metasDieta.js";

export default class Dieta{
    private nome: string;
    private refeicoes: Refeicao[];
    private meta: MetaDieta;

    constructor(nome: string) {
        this.nome = nome;
        this.refeicoes = [];
        this.meta = new MetaDieta(0, 0, 0, 0, 0);
    }

    getNome(): string {
        return this.nome;
    }
    getRefeicoes(): Refeicao[] {
        return this.refeicoes;
    }
    getMeta(): MetaDieta {
        return this.meta;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    setRefeicoes(refeicoes: Refeicao[]): void {
        this.refeicoes = refeicoes;
    }
    setMeta(meta: MetaDieta): void {
        this.meta = meta;
    }
    setMetaCarboidrato(carboidrato:number):void{
        this.meta.setMetaCarboidrato(carboidrato);
    }
    setMetaProteina(proteina:number):void{
        this.meta.setMetaProteina(proteina);
    }
    setMetaGordura(gordura:number):void{
        this.meta.setMetaGordura(gordura);
    }
    setMetaFibra(fibra:number):void{
        this.meta.setMetaFibra(fibra);
    }
    setMetaAgua(agua:number):void{
        this.meta.setMetaAgua(agua);
    }

    adicionaRefeicao(refeicao: Refeicao): void {
        this.refeicoes.push(refeicao);
    }
    removeRefeicao(refeicao: Refeicao): void {
        const index = this.refeicoes.indexOf(refeicao);
        if (index > -1) {
            this.refeicoes.splice(index, 1);
        }
    }
    calculaCaloriaDieta(): number {
        return this.refeicoes.reduce((total, refeicao) => 
            total + refeicao.calculaCaloriaRefeicao(),0);
    }
}