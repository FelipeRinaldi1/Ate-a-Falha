import type Serie from "../../exercicio/serie/serie.js";
import type Exercicio from "../../exercicio/exercicio/exercicio.js";
import type ExercicioNaFicha from "../../exercicio/exercicioNaFicha/exercicioNaFicha.js";
import FichaEspecifica from "../fichaEspecifica/fichaEspecifica.js";

export default class FichaExecutavel {
    listaExercicios: ExercicioNaFicha[];

    constructor(ficha: FichaEspecifica) {
        this.listaExercicios = ficha.getListaExercicios();
    }
    getListaExercicios(): ExercicioNaFicha[] {
        return this.listaExercicios;
    }
    setListaExercicios(lista:ExercicioNaFicha[]):void{
        this.listaExercicios = lista;
    }
    mostraSeries(index:number):void{
        const exercicio= this.listaExercicios[index];
        console.log("Exercicio: " + exercicio?.getExercicio().getNome());
        exercicio?.mostraSeries();
    } 
}