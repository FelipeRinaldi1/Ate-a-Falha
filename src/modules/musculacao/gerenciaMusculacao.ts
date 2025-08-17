import type Exercicio from "./exercicio/exercicio.js";
import type Serie from "./exercicio/serie.js";
import type ExercicioNaFicha from "./exercicio/exercicioNaFicha.js";

import FichaEspecifica from "./ficha/fichaEspecifica.js";
import type FichaExecutavel from "./ficha/fichaExecutavel.js";
import FichaGlobal from "./ficha/fichaGlobal.js";

export default class gerenciaMusculacao{
    constructor(){}

    criaFichaGlobal(nome:string):FichaGlobal{
        return new FichaGlobal(nome)
    }
    criaFichaEspecifica(dia:string,fichaGlobal:FichaGlobal){
        fichaGlobal.criaFichaEspecifica(dia)
    }
    executaTreino(){
        
    }
}