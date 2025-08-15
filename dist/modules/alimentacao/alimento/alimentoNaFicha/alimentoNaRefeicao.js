import Alimento from "../alimento/alimento.js";
export default class AlimentoNaRefeicao {
    alimento;
    quantidade;
    constructor(alimento, quantidade) {
        this.alimento = alimento;
        this.quantidade = quantidade;
    }
    getAlimento() {
        return this.alimento;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getCaloria() {
        return this.alimento.getCaloria() * this.quantidade;
    }
}
//# sourceMappingURL=alimentoNaRefeicao.js.map