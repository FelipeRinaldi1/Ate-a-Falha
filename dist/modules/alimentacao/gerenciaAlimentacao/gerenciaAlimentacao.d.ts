import Alimento from "../alimento/alimento/alimento.js";
import AlimentoNaRefeicao from "../alimento/alimentoNaFicha/alimentoNaRefeicao.js";
import Refeicao from "../refeicao/refeicao.js";
import MetaDieta from "../dieta/metasDieta/metasDieta.js";
import Dieta from "../dieta/dieta.js";
export default class GerenciaAlimentacao {
    constructor();
    criaDieta(nomeDieta: string): Dieta;
    criaMetaDieta(calorias: number, carboidrato: number, proteina: number, gordura: number, fibra: number): MetaDieta;
    criaRefeicao(nomeRefeicao: string): Refeicao;
    criaAlimentoPersonalizado(nome: string, carboidrato: number, proteina: number, gordura: number, fibra: number): Alimento;
    criaAlimentoNaRefeicao(alimento: Alimento, quantidade: number): AlimentoNaRefeicao;
    adicionaRefeicaoNaDieta(dieta: Dieta, refeicao: Refeicao): void;
    removeRefeicaoNaDieta(dieta: Dieta, refeicao: Refeicao): void;
    adicionaAlimentoNaRefeicao(refeicao: Refeicao, alimentoNaRefeicao: AlimentoNaRefeicao): void;
    removeAlimentoNaRefeicao(refeicao: Refeicao, alimentoNaRefeicao: AlimentoNaRefeicao): void;
    calculaCaloriaDieta(dieta: Dieta): number;
    trocaMetasDieta(dieta: Dieta, carboidrato: number, proteina: number, gordura: number, fibra: number, agua: number): void;
}
//# sourceMappingURL=gerenciaAlimentacao.d.ts.map