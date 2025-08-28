import type Serie from "../exercicio/serie.js";
import type Exercicio from "../exercicio/exercicio.js";
import ExercicioNaFicha from "../exercicio/exercicioNaFicha.js";
import FichaEspecifica from "./fichaEspecifica.js";

export default class FichaExecutavel {
    private listaExercicios: ExercicioNaFicha[];
    private concluido = false

    constructor(ficha: FichaEspecifica) {
        this.listaExercicios = ficha.getListaExercicios();
    }
    getListaExercicios(): ExercicioNaFicha[] {
        return this.listaExercicios;
    }
    setListaExercicios(lista:ExercicioNaFicha[]):void{
        this.listaExercicios = lista;
    }
    getConcluido():boolean{
        return this.concluido
    }
    setConcluido():void{
        this.concluido = true
    }
    setNaoConcluido():void{
        this.concluido = false
    }
    mostraExercicio(index:number):void{
        console.log(this.listaExercicios[index])
    }

    mostraExercicios():void{
        this.listaExercicios.forEach((ExercicioNaFicha,index)=>{
            console.log(`Exercicio ${index +1}: ${ExercicioNaFicha.mostraExercicio()}`)
        });
    }
    executaTreino():void{
        if(!this.listaExercicios){
            return;
        }
        while(this.concluido ===false){
            
        }
    }
}