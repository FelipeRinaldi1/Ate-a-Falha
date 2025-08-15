import Alimento from "../alimento/alimento.js";

export default class AlimentoNaRefeicao{
    private alimento: Alimento;
    private quantidade: number;

    constructor(alimento: Alimento, quantidade: number) {
        this.alimento = alimento;
        this.quantidade = quantidade;
    }

    getAlimento(): Alimento {
        return this.alimento;
    }
    getQuantidade(): number {
        return this.quantidade;
    }
    getCarboidrato(): number {
        return this.alimento.getCarboidrato() * this.quantidade;
    }
    getProteina(): number {
        return this.alimento.getProteina() * this.quantidade;
    }
    getGordura(): number {
        return this.alimento.getGordura() * this.quantidade;
    }  
    calculaCaloria(): number {
        return this.alimento.getCaloria() * this.quantidade;
    }

}
