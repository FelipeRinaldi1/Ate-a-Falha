export default class Alimento {
    nomeAlimento;
    carboidrato;
    proteina;
    gordura;
    fibra;
    caloria;
    constructor(nomeAlimento, carboidrato, proteina, gordura, fibra) {
        this.nomeAlimento = nomeAlimento;
        this.carboidrato = carboidrato;
        this.proteina = proteina;
        this.gordura = gordura;
        this.fibra = fibra;
        this.caloria = this.calcularCaloria();
    }
    getNomeAlimento() {
        return this.nomeAlimento;
    }
    getCarboidrato() {
        return this.carboidrato;
    }
    getProteina() {
        return this.proteina;
    }
    getGordura() {
        return this.gordura;
    }
    getFibra() {
        return this.fibra;
    }
    setNomeAlimento(nome) {
        this.nomeAlimento = nome;
    }
    setCarboidrato(carboidrato) {
        this.carboidrato = carboidrato;
    }
    setProteina(proteina) {
        this.proteina = proteina;
    }
    setGordura(gordura) {
        this.gordura = gordura;
    }
    setFibra(fibra) {
        this.fibra = fibra;
    }
    calcularCaloria() {
        return (this.carboidrato * 4) + (this.proteina * 4) + (this.gordura * 9) - (this.fibra * 2);
    }
    getCaloria() {
        return this.caloria;
    }
}
//# sourceMappingURL=alimento.js.map