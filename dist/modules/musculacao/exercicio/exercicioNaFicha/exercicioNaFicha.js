import Exercicio from "../exercicio/exercicio.js";
import Serie from "../serie/serie.js";
export default class ExercicioNaFicha {
    exercicio;
    series;
    concluido;
    constructor(exercicio, numeroSerie, repeticao, tempoDescanso, carga) {
        this.exercicio = exercicio;
        this.concluido = false;
        this.series = [];
        for (let i = 0; i < numeroSerie; i++) {
            this.series.push(new Serie(carga, repeticao, tempoDescanso));
        }
    }
    getExercicio() {
        return this.exercicio;
    }
    getSeries() {
        return this.series;
    }
    getConcluido() {
        return this.concluido;
    }
    setExercicio(exercicio) {
        this.exercicio = exercicio;
    }
    setSeries(series) {
        this.series = series;
    }
    setConcluido() {
        this.concluido = true;
    }
    setNaoConcluido() {
        this.concluido = false;
    }
    adicionaSerie(carga, repeticao, tempoDescanso) {
        this.series.push(new Serie(carga, repeticao, tempoDescanso));
    }
    removeSerie(index) {
        if (index >= 0 && index < this.series.length) {
            this.series.splice(index, 1);
        }
    }
    mostraSeries() {
        this.series.forEach((serie, index) => {
            console.log(`Série ${index + 1}: 
                Carga: ${serie.getCarga()}, 
                Repetições: ${serie.getRepeticoes()}, 
                Tempo de Descanso: ${serie.getTempoDescanso()}`);
        });
    }
}
//# sourceMappingURL=exercicioNaFicha.js.map