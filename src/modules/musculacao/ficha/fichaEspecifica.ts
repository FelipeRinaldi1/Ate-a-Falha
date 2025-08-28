import type Exercicio from "../exercicio/exercicio.js";
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
    adicionaExercicio(exercicio:Exercicio,numeroSerie:number,numeroRepeticao:number,tempoDescanso:number,carga:number): ExercicioNaFicha {
        const exercicioNaFicha = new ExercicioNaFicha(exercicio,numeroSerie,numeroRepeticao,tempoDescanso,carga);
        this.listaExercicios.push(exercicioNaFicha);
        return exercicioNaFicha;
    }
    removeExercicio(indexExercicio:number): void {
        if (indexExercicio > -1 && indexExercicio < this.listaExercicios.length) {
            this.listaExercicios.splice(indexExercicio, 1);
        }
    }
}