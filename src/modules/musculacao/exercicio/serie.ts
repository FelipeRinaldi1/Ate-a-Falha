import { read } from "fs";

export default class Serie{
    private carga:number;
    private repeticoes:number;
    private tempoDescanso: number;
    private concluido: boolean;
    constructor(carga:number, repeticoes:number, tempoDescanso: number) {
        this.carga = carga;
        this.repeticoes = repeticoes;
        this.tempoDescanso = tempoDescanso;
        this.concluido = false;
    }
    getCarga(): number {
        return this.carga;
    }
    getRepeticoes(): number {
        return this.repeticoes;
    }
    getTempoDescanso(): number {
        return this.tempoDescanso;
    }
    getConcluido(): boolean {
        return this.concluido;
    }
    setCarga(carga: number): void {
        this.carga = carga;
    }
    setRepeticoes(repeticoes: number): void {
        this.repeticoes = repeticoes;
    }
    setTempoDescanso(tempoDescanso: number): void {
        this.tempoDescanso = tempoDescanso;
    }
    setConcluido(): void {
        this.concluido = true;
    }
    setNaoConcluido():void{
        this.concluido= false;
    }
    executaSerie():void{
        const readline = require('readline')
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("?",()=>{
            this.setConcluido()
        })
    }
}