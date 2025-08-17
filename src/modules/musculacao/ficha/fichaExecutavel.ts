import type Serie from "../exercicio/serie.js";
import type Exercicio from "../exercicio/exercicio.js";
import ExercicioNaFicha from "../exercicio/exercicioNaFicha.js";
import FichaEspecifica from "./fichaEspecifica.js";

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
        console.log("Exercicio: " + exercicio?.getNomeExercicio());
        exercicio?.mostraSeries();
    }
    mostraExercicios():void{
        this.listaExercicios.forEach((ExercicioNaFicha,index)=>{
            console.log(`Exercicio ${index +1}: ${ExercicioNaFicha.getNomeExercicio()}`)
        });
    }
    executaTreino(){
        this.listaExercicios.forEach
    }
}