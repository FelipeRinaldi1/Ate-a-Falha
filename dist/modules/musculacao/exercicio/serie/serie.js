export default class Serie {
    carga;
    repeticoes;
    tempoDescanso;
    concluido;
    constructor(carga, repeticoes, tempoDescanso) {
        this.carga = carga;
        this.repeticoes = repeticoes;
        this.tempoDescanso = tempoDescanso;
        this.concluido = false;
    }
    getCarga() {
        return this.carga;
    }
    getRepeticoes() {
        return this.repeticoes;
    }
    getTempoDescanso() {
        return this.tempoDescanso;
    }
    getConcluido() {
        return this.concluido;
    }
    setCarga(carga) {
        this.carga = carga;
    }
    setRepeticoes(repeticoes) {
        this.repeticoes = repeticoes;
    }
    setTempoDescanso(tempoDescanso) {
        this.tempoDescanso = tempoDescanso;
    }
    setConcluido(concluido) {
        this.concluido = concluido;
    }
    setNaoConcluido() {
        this.concluido = false;
    }
}
//# sourceMappingURL=serie.js.map