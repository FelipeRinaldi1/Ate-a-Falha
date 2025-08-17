import ExercicioNaFicha from "../exercicio/exercicioNaFicha.js";

export default class FichaEspecifica {
    private dia: string;
    private listaExercicios: ExercicioNaFicha[];
    private musculosTrabalhados: string[];
    constructor(dia: string) {
        this.dia = dia;
        this.listaExercicios = [];
        this.musculosTrabalhados = [];
    }
    getListaExercicios(): ExercicioNaFicha[] {
        return this.listaExercicios;
    }
    getdia(): string {
        return this.dia;
    }
    getMusculosTrabalhados(): string[] {
        return this.musculosTrabalhados;
    }
    setListaExercicios(listaExercicios: ExercicioNaFicha[]): void {
        this.listaExercicios = listaExercicios;
    }
    setdia(dia: string): void {
        this.dia = dia;
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