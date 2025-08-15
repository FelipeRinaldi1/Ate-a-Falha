import ExercicioNaFicha from "../../exercicio/exercicioNaFicha/exercicioNaFicha.js";
export default class FichaEspecifica {
    diaCorrespondente;
    listaExercicios;
    musculosTrabalhados;
    constructor(diaCorrespondente) {
        this.diaCorrespondente = diaCorrespondente;
        this.listaExercicios = [];
        this.musculosTrabalhados = [];
    }
    getListaExercicios() {
        return this.listaExercicios;
    }
    getDiaCorrespondente() {
        return this.diaCorrespondente;
    }
    getMusculosTrabalhados() {
        return this.musculosTrabalhados;
    }
    setListaExercicios(listaExercicios) {
        this.listaExercicios = listaExercicios;
    }
    setDiaCorrespondente(diaCorrespondente) {
        this.diaCorrespondente = diaCorrespondente;
    }
    setMusculosTrabalhados(musculosTrabalhados) {
        this.musculosTrabalhados = musculosTrabalhados;
    }
    adicionaExercicio(exercicio) {
        this.listaExercicios.push(exercicio);
    }
    removeExercicio(exercicio) {
        const index = this.listaExercicios.indexOf(exercicio);
        if (index > -1) {
            this.listaExercicios.splice(index, 1);
        }
    }
}
//# sourceMappingURL=fichaEspecifica.js.map