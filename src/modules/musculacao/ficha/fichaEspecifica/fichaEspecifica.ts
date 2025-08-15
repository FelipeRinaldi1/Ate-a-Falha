import ExercicioNaFicha from "../../exercicio/exercicioNaFicha/exercicioNaFicha.js";

export default class FichaEspecifica {
    private diaCorrespondente: string;
    private listaExercicios: ExercicioNaFicha[];
    private musculosTrabalhados: string[];
    constructor(diaCorrespondente: string) {
        this.diaCorrespondente = diaCorrespondente;
        this.listaExercicios = [];
        this.musculosTrabalhados = [];
    }
    getListaExercicios(): ExercicioNaFicha[] {
        return this.listaExercicios;
    }
    getDiaCorrespondente(): string {
        return this.diaCorrespondente;
    }
    getMusculosTrabalhados(): string[] {
        return this.musculosTrabalhados;
    }
    setListaExercicios(listaExercicios: ExercicioNaFicha[]): void {
        this.listaExercicios = listaExercicios;
    }
    setDiaCorrespondente(diaCorrespondente: string): void {
        this.diaCorrespondente = diaCorrespondente;
    }
    setMusculosTrabalhados(musculosTrabalhados: string[]): void {
        this.musculosTrabalhados = musculosTrabalhados;
    }
    adicionaExercicio(exercicio: ExercicioNaFicha): void {
        this.listaExercicios.push(exercicio);
    }
    removeExercicio(exercicio: ExercicioNaFicha): void {
        const index = this.listaExercicios.indexOf(exercicio);
        if (index > -1) {
            this.listaExercicios.splice(index, 1);
        }
    }
}