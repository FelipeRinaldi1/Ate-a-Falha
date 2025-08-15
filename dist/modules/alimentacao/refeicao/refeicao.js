import AlimentoNaRefeicao from "../alimento/alimentoNaFicha/alimentoNaRefeicao.js";
export default class Refeicao {
    alimentos;
    nomeRefeicao;
    horarioRefeicao;
    constructor(nomeRefeicao) {
        this.alimentos = [];
        this.nomeRefeicao = nomeRefeicao;
        this.horarioRefeicao = 0;
    }
    getAlimentos() {
        return this.alimentos;
    }
    getNomeRefeicao() {
        return this.nomeRefeicao;
    }
    getHorarioRefeicao() {
        return this.horarioRefeicao;
    }
    getCarboidrato() {
        return this.alimentos.reduce((total, alimento) => total + alimento.getAlimento().getCarboidrato() * alimento.getQuantidade(), 0);
    }
    getProteina() {
        return this.alimentos.reduce((total, alimento) => total + alimento.getAlimento().getProteina() * alimento.getQuantidade(), 0);
    }
    getGordura() {
        return this.alimentos.reduce((total, alimento) => total + alimento.getAlimento().getGordura() * alimento.getQuantidade(), 0);
    }
    adicionaAlimento(alimento) {
        this.alimentos.push(alimento);
    }
    removeAlimento(alimento) {
        const index = this.alimentos.indexOf(alimento);
        if (index !== -1) {
            this.alimentos.splice(index, 1);
        }
    }
    calculaCaloriaRefeicao() {
        return this.alimentos.reduce((total, alimento) => {
            return total + alimento.getCaloria();
        }, 0);
    }
}
//# sourceMappingURL=refeicao.js.map