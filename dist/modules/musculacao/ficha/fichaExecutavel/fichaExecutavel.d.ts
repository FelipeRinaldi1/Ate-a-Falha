import type ExercicioNaFicha from "../../exercicio/exercicioNaFicha/exercicioNaFicha.js";
import FichaEspecifica from "../fichaEspecifica/fichaEspecifica.js";
export default class FichaExecutavel {
    listaExercicios: ExercicioNaFicha[];
    constructor(ficha: FichaEspecifica);
    getListaExercicios(): ExercicioNaFicha[];
    setListaExercicios(lista: ExercicioNaFicha[]): void;
    mostraSeries(index: number): void;
}
//# sourceMappingURL=fichaExecutavel.d.ts.map