import AlimentoNaRefeicao from "../alimento/alimentoNaFicha/alimentoNaRefeicao.js";
export default class Refeicao {
    private alimentos;
    private nomeRefeicao;
    private horarioRefeicao;
    constructor(nomeRefeicao: string);
    getAlimentos(): AlimentoNaRefeicao[];
    getNomeRefeicao(): string;
    getHorarioRefeicao(): number;
    getCarboidrato(): number;
    getProteina(): number;
    getGordura(): number;
    adicionaAlimento(alimento: AlimentoNaRefeicao): void;
    removeAlimento(alimento: AlimentoNaRefeicao): void;
    calculaCaloriaRefeicao(): number;
}
//# sourceMappingURL=refeicao.d.ts.map