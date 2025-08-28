import Exercicio from "./exercicio.js";
import Serie from "./serie.js";
export default class ExercicioNaFicha {
    private exercicio: Exercicio;
    private series: Serie[];
    private concluido: boolean;
    constructor(exercicio: Exercicio, numeroSerie:number,repeticao:number,tempoDescanso:number,carga:number) {
        this.exercicio = exercicio;
        this.concluido = false;
        this.series = [];
        for (let i = 0; i < numeroSerie; i++) {
            this.series.push(new Serie(carga,repeticao, tempoDescanso));
        }
    }
    getExercicio(): Exercicio {
        return this.exercicio;
    }
    getSeries(): Serie[] {
        return this.series;
    }
    getConcluido(): boolean {
        return this.concluido;
    }
    getNomeExercicio():string{
        return this.exercicio.getNome();
    }
    getDescricaoExercicio():string{
        return this.exercicio.getDescricao();
    }
    getFocoMuscularExercicio():string{
        return this.exercicio.getFocoMuscular();
    }
    setExercicio(exercicio: Exercicio): void {
        this.exercicio = exercicio;
    }
    setSeries(series: Serie[]): void {
        this.series = series;
    }
    setConcluido(): void {
        this.concluido = true;
    }
    setNaoConcluido(): void {
        this.concluido = false;
    }
    setNomeExercicio(nome: string): void {
        this.exercicio.setNome(nome);
    }
    setDescricaoExercicio(nome:string):void{
        this.exercicio.setDescricao(nome);
    }
    setFocoMuscularExercicio(nome:string):void{
        this.exercicio.setFocoMuscular(nome);
    }

    //Metodos Da classe

    adicionaSerie(carga:number,repeticao:number,tempoDescanso:number):void{
        this.series.push(new Serie(carga,repeticao, tempoDescanso));
    }

    removeSerie(index:number):void{
        if (index >= 0 && index < this.series.length){
            this.series.splice(index, 1);
        }
    }

    checkConcluido():boolean{
        if(this.series.some(serie=>{serie.getConcluido() === false})){
            return false;
        }
        return true;
    }

    executaSerie(index:number):void{
        this.series[index]?.setConcluido()
        this.concluido = this.checkConcluido()
    }

    desExecutaSerie(index:number):void{
        this.series[index]?.setNaoConcluido()
        this.concluido = this.checkConcluido()
    }

    concluiExercicio():void{
        this.series.forEach(serie => {
            serie.setConcluido()
        });
        this.setConcluido();
    }
    
    mostraExercicio():void{
        console.log(`Exercicio :${this.getNomeExercicio()}`)
        this.series.forEach((serie, index) => {
            console.log(` Série ${index + 1}: 
                Carga: ${serie.getCarga()}, 
                Repetições: ${serie.getRepeticoes()}, 
                Tempo de Descanso: ${serie.getTempoDescanso()}
                Concluido: ${serie.getConcluido()}`);
        });
    }
}