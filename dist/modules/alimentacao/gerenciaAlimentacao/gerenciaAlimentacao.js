import Alimento from "../alimento/alimento/alimento.js";
import AlimentoNaRefeicao from "../alimento/alimentoNaFicha/alimentoNaRefeicao.js";
import Refeicao from "../refeicao/refeicao.js";
import MetaDieta from "../dieta/metasDieta/metasDieta.js";
import Dieta from "../dieta/dieta.js";
export default class GerenciaAlimentacao {
    constructor() { }
    criaDieta(nomeDieta) {
        const dieta = new Dieta(nomeDieta);
        return dieta;
    }
    criaMetaDieta(calorias, carboidrato, proteina, gordura, fibra) {
        const meta = new MetaDieta(calorias, carboidrato, proteina, gordura, fibra);
        return meta;
    }
    criaRefeicao(nomeRefeicao) {
        const refeicao = new Refeicao(nomeRefeicao);
        return refeicao;
    }
    criaAlimentoPersonalizado(nome, carboidrato, proteina, gordura, fibra) {
        const alimento = new Alimento(nome, carboidrato, proteina, gordura, fibra);
        return alimento;
    }
    criaAlimentoNaRefeicao(alimento, quantidade) {
        const alimentoNaRefeicao = new AlimentoNaRefeicao(alimento, quantidade);
        return alimentoNaRefeicao;
    }
    adicionaRefeicaoNaDieta(dieta, refeicao) {
        dieta.adicionaRefeicao(refeicao);
    }
    removeRefeicaoNaDieta(dieta, refeicao) {
        dieta.removeRefeicao(refeicao);
    }
    adicionaAlimentoNaRefeicao(refeicao, alimentoNaRefeicao) {
        refeicao.adicionaAlimento(alimentoNaRefeicao);
    }
    removeAlimentoNaRefeicao(refeicao, alimentoNaRefeicao) {
        refeicao.removeAlimento(alimentoNaRefeicao);
    }
    calculaCaloriaDieta(dieta) {
        return dieta.calculaCaloriaDieta();
    }
    trocaMetasDieta(dieta, carboidrato, proteina, gordura, fibra, agua) {
        dieta.setMetaCarboidrato(carboidrato);
        dieta.setMetaProteina(proteina);
        dieta.setMetaGordura(gordura);
        dieta.setMetaFibra(fibra);
        dieta.setMetaAgua(agua);
    }
}
//# sourceMappingURL=gerenciaAlimentacao.js.map