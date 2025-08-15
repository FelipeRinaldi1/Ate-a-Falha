import ExercicioNaFicha from "../../exercicio/exercicioNaFicha/exercicioNaFicha.js";
export default class FichaEspecifica {
    private diaCorrespondente;
    private listaExercicios;
    private musculosTrabalhados;
    constructor(diaCorrespondente: string);
    getListaExercicios(): ExercicioNaFicha[];
    getDiaCorrespondente(): string;
    getMusculosTrabalhados(): string[];
    setListaExercicios(listaExercicios: ExercicioNaFicha[]): void;
    setDiaCorrespondente(diaCorrespondente: string): void;
    setMusculosTrabalhados(musculosTrabalhados: string[]): void;
    adicionaExercicio(exercicio: ExercicioNaFicha): void;
    removeExercicio(exercicio: ExercicioNaFicha): void;
}
//# sourceMappingURL=fichaEspecifica.d.ts.map