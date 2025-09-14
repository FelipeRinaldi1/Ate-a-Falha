import Exercicio from "./exercicio/exercicio.js"
import Serie from "./exercicio/serie.js";
import ExercicioNaFicha from "./exercicio/exercicioNaFicha.js";
import FichaEspecifica from "./ficha/fichaEspecifica.js";
import FichaExecutavel from "./ficha/fichaExecutavel.js";
import FichaGlobal from "./ficha/fichaGlobal.js";
import BancoMusculacao from "./bancoMusculacao.js";

export default class WorkoutManager{
    private banco: BancoMusculacao;
    constructor(bancoMusculacao: BancoMusculacao){
        this.banco = bancoMusculacao;
    }
    getBanco(): BancoMusculacao {
        return this.banco;
    }
    getListaExercicio(): Exercicio[] {
        return this.banco.getListaExercicio();
    }
    getListaFichaGlobal(): FichaGlobal[] {
        return this.banco.getListaFichaGlobal();
    }
    getExercicio(index: number): Exercicio | undefined {
        return this.banco.getExercicio(index);
    }
    getFichaGlobal(index: number): FichaGlobal | undefined {
        return this.banco.getFichaGlobal(index);
    }
    criaFichaGlobal(nome:string): FichaGlobal {
        const fichaGlobal = new FichaGlobal(nome);
        this.banco.adicionarFichaGlobal(fichaGlobal);
        return fichaGlobal;
    }
    criaExercicio(nome:string,descricao:string,focoMuscular:string):Exercicio{
        const exercicio = new Exercicio(nome,descricao,focoMuscular);
        this.banco.adicionarExercicio(exercicio);
        return exercicio;
    }
    adicionaFichaEspecifica(indexFichaGlobal:number,dia:string):FichaEspecifica | undefined{
        const fichaGlobal = this.getFichaGlobal(indexFichaGlobal);
        if(fichaGlobal){
            return fichaGlobal.criaFichaEspecifica(dia);
        }
        return undefined;
    }
    adicionaExercicioNaFicha(indexFichaGlobal:number,indexFichaEspecifica:number,indexExercicio:number,numeroSerie:number,numeroRepeticao:number,tempoDescanso:number,carga:number):ExercicioNaFicha | undefined{
        const fichaGlobal = this.getFichaGlobal(indexFichaGlobal);
        const exercicio = this.getExercicio(indexExercicio);
        if(!fichaGlobal || !exercicio) return undefined;
        const fichaEspecifica = fichaGlobal.getFichasEspecificas()[indexFichaEspecifica];
        if(!fichaEspecifica) return undefined;
        return fichaEspecifica.adicionaExercicio(exercicio,numeroSerie,numeroRepeticao,tempoDescanso,carga);
    }
    

}