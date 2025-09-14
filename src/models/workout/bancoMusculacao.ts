import Exercicio from "./exercicio/exercicio.js";
import FichaGlobal from "./ficha/fichaGlobal.js";

export default class BancoMusculacao{
    private listaExercicio: Exercicio[]
    private listaFichaGlobal: FichaGlobal[]
    constructor(){
        this.listaExercicio= [];
        this.listaFichaGlobal = [];
    }
    getListaExercicio(): Exercicio[] {
        return this.listaExercicio;
    }
    getListaFichaGlobal(): FichaGlobal[] {
        return this.listaFichaGlobal;
    }
    getExercicio(index: number): Exercicio | undefined {
        return this.listaExercicio[index];
    }
    getFichaGlobal(index: number): FichaGlobal | undefined {
        return this.listaFichaGlobal[index];
    }
    adicionarExercicio(exercicio: Exercicio): void {
        this.listaExercicio.push(exercicio);
    }
    adicionarFichaGlobal(fichaGlobal: FichaGlobal): void {
        this.listaFichaGlobal.push(fichaGlobal);
    }
}