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

    getCaloria(): number {
        return this.alimento.getCaloria() * this.quantidade;
    }
}
