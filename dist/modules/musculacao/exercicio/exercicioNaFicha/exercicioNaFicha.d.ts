import Exercicio from "../exercicio/exercicio.js";
import Serie from "../serie/serie.js";
export default class ExercicioNaFicha {
    private exercicio;
    private series;
    private concluido;
    constructor(exercicio: Exercicio, numeroSerie: number, repeticao: number, tempoDescanso: number, carga: number);
    getExercicio(): Exercicio;
    getSeries(): Serie[];
    getConcluido(): boolean;
    setExercicio(exercicio: Exercicio): void;
    setSeries(series: Serie[]): void;
    setConcluido(): void;
    setNaoConcluido(): void;
    adicionaSerie(carga: number, repeticao: number, tempoDescanso: number): void;
    removeSerie(index: number): void;
    mostraSeries(): void;
}
//# sourceMappingURL=exercicioNaFicha.d.ts.map