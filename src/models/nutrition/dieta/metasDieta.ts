export default class MetaDieta{
    private metaCaloria:number;
    private metaCarboidrato:number;
    private metaProteina:number;
    private metaGordura:number;
    private metaFibra:number;
    private metaAgua:number;
    constructor(metaCarboidrato:number, metaProteina:number, metaGordura:number, metaFibra:number, metaAgua:number) {
        this.metaCarboidrato = metaCarboidrato;
        this.metaProteina = metaProteina;
        this.metaGordura = metaGordura;
        this.metaFibra = metaFibra;
        this.metaAgua = metaAgua;
        this.metaCaloria = this.calculaCaloria();
    }
    getMetaCaloria(): number {
        return this.metaCaloria;
    }
    getMetaCarboidrato(): number {
        return this.metaCarboidrato;
    }
    getMetaProteina(): number {
        return this.metaProteina;
    }
    getMetaGordura(): number {
        return this.metaGordura;
    }
    getMetaFibra(): number {
        return this.metaFibra;
    }
    getMetaAgua(): number {
        return this.metaAgua;
    }
    setMetaCarboidrato(metaCarboidrato: number): void {
        this.metaCarboidrato = metaCarboidrato;
        this.calculaCaloria();
    }
    setMetaProteina(metaProteina: number): void {
        this.metaProteina = metaProteina;
        this.calculaCaloria();
    }
    setMetaGordura(metaGordura: number): void {
        this.metaGordura = metaGordura;
        this.calculaCaloria();
    }
    setMetaFibra(metaFibra: number): void {
        this.metaFibra = metaFibra;
        this.calculaCaloria();
    }
    setMetaAgua(metaAgua: number): void {
        this.metaAgua = metaAgua;
        this.calculaCaloria();
    }

    calculaCaloria():number{
        this.metaCaloria = this.metaCarboidrato * 4 + this.metaProteina * 4 + this.metaGordura * 9;
        return this.metaCaloria;
    }
}