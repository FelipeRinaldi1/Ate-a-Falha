import Refeicao from "../refeicao/refeicao.js";
import MetaDieta from "./metasDieta/metasDieta.js";
export default class Dieta {
    nome;
    refeicoes;
    meta;
    constructor(nome) {
        this.nome = nome;
        this.refeicoes = [];
        this.meta = new MetaDieta(0, 0, 0, 0, 0);
    }
    getNome() {
        return this.nome;
    }
    getRefeicoes() {
        return this.refeicoes;
    }
    getMeta() {
        return this.meta;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setRefeicoes(refeicoes) {
        this.refeicoes = refeicoes;
    }
    setMeta(meta) {
        this.meta = meta;
    }
    setMetaCarboidrato(carboidrato) {
        this.meta.setMetaCarboidrato(carboidrato);
    }
    setMetaProteina(proteina) {
        this.meta.setMetaProteina(proteina);
    }
    setMetaGordura(gordura) {
        this.meta.setMetaGordura(gordura);
    }
    setMetaFibra(fibra) {
        this.meta.setMetaFibra(fibra);
    }
    setMetaAgua(agua) {
        this.meta.setMetaAgua(agua);
    }
    adicionaRefeicao(refeicao) {
        this.refeicoes.push(refeicao);
    }
    removeRefeicao(refeicao) {
        const index = this.refeicoes.indexOf(refeicao);
        if (index > -1) {
            this.refeicoes.splice(index, 1);
        }
    }
    calculaCaloriaDieta() {
        return this.refeicoes.reduce((total, refeicao) => total + refeicao.calculaCaloriaRefeicao(), 0);
    }
}
//# sourceMappingURL=dieta.js.map