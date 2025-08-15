export default class MetaDieta {
    metaCaloria;
    metaCarboidrato;
    metaProteina;
    metaGordura;
    metaFibra;
    metaAgua;
    constructor(metaCarboidrato, metaProteina, metaGordura, metaFibra, metaAgua) {
        this.metaCarboidrato = metaCarboidrato;
        this.metaProteina = metaProteina;
        this.metaGordura = metaGordura;
        this.metaFibra = metaFibra;
        this.metaAgua = metaAgua;
        this.metaCaloria = this.calculaCaloria();
    }
    getMetaCaloria() {
        return this.metaCaloria;
    }
    getMetaCarboidrato() {
        return this.metaCarboidrato;
    }
    getMetaProteina() {
        return this.metaProteina;
    }
    getMetaGordura() {
        return this.metaGordura;
    }
    getMetaFibra() {
        return this.metaFibra;
    }
    getMetaAgua() {
        return this.metaAgua;
    }
    setMetaCarboidrato(metaCarboidrato) {
        this.metaCarboidrato = metaCarboidrato;
        this.calculaCaloria();
    }
    setMetaProteina(metaProteina) {
        this.metaProteina = metaProteina;
        this.calculaCaloria();
    }
    setMetaGordura(metaGordura) {
        this.metaGordura = metaGordura;
        this.calculaCaloria();
    }
    setMetaFibra(metaFibra) {
        this.metaFibra = metaFibra;
        this.calculaCaloria();
    }
    setMetaAgua(metaAgua) {
        this.metaAgua = metaAgua;
        this.calculaCaloria();
    }
    calculaCaloria() {
        this.metaCaloria = this.metaCarboidrato * 4 + this.metaProteina * 4 + this.metaGordura * 9;
        return this.metaCaloria;
    }
}
//# sourceMappingURL=metasDieta.js.map