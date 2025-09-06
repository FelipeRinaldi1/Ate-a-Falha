import Refeicao from "../refeicao/refeicao.js";
import MetaDieta from "./metasDieta.js";

export default class Dieta{
    private nome: string;
    private refeicoes: Refeicao[];
    private meta: MetaDieta;
    private agua:number;
    
    constructor(nome: string) {
        this.nome = nome;
        this.refeicoes = [];
        this.meta = new MetaDieta(0, 0, 0, 0, 0);
        this.agua = 0;
    }
    getCarboidrato():number{
        return this.refeicoes.reduce((total, refeicao) => 
            total + refeicao.getCarboidrato(),0);
    }
    getProteina():number{
        return this.refeicoes.reduce((total, refeicao) => 
            total + refeicao.getProteina(),0);
    }
    getGordura():number{
        return this.refeicoes.reduce((total, refeicao) => 
            total + refeicao.getGordura(),0);
    }
    getFibra():number{
        return this.refeicoes.reduce((total, refeicao) => 
            total + refeicao.getFibra(),0);
    }
    getMetaCarboidrato():number{
        return this.meta.getMetaCarboidrato();
    }
    getMetaProteina():number{
        return this.meta.getMetaProteina();
    }
    getMetaGordura():number{
        return this.meta.getMetaGordura();
    }
    getMetaFibra():number{
        return this.meta.getMetaFibra();
    }
    getMetaAgua():number{
        return this.meta.getMetaAgua();
    }
    getMetaCaloria():number{
        return this.meta.getMetaCaloria();
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

    getNome(): string {
        return this.nome;
    }
    getRefeicoes(): Refeicao[] {
        return this.refeicoes;
    }
    getMeta(): MetaDieta {
        return this.meta;
    }
    getAgua():number{
        return this.agua;
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
    setAgua(agua: number): void {
        this.agua = agua;
    }
    calculaCaloriaDieta(): number {
        return this.refeicoes.reduce((total, refeicao) => 
            total + refeicao.calculaCaloriaRefeicao(),0);
    }
    atualizaMetas(metaCarboidrato:number, metaProteina:number, metaGordura:number, metaFibra:number, metaAgua:number):void{
        this.setMetaCarboidrato(metaCarboidrato);
        this.setMetaProteina(metaProteina);
        this.setMetaGordura(metaGordura);
        this.setMetaFibra(metaFibra);
        this.setMetaAgua(metaAgua);
    }
    adicionaRefeicao(nome: string): void {
        const refeicao = new Refeicao(nome);
        this.refeicoes.push(refeicao);
    }
    removeRefeicao(refeicao: Refeicao): void {
        const index = this.refeicoes.indexOf(refeicao);
        if (index > -1) {
            this.refeicoes.splice(index, 1);
        }
    }
    acrescentaAgua(quantidade: number): void {
        this.agua += quantidade;
    }

    importaRefeicao(refeicao: Refeicao): void {
        this.refeicoes.push(refeicao);
    }


}