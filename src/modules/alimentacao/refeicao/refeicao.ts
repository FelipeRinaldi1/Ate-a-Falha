import type Alimento from "../alimento/alimento.js";
import AlimentoNaRefeicao from "../alimento/alimentoNaRefeicao.js";

export default class Refeicao{
    private alimentos: AlimentoNaRefeicao[];
    private nomeRefeicao: string;
    private horarioRefeicao: number;

    constructor(nomeRefeicao: string) {
        this.alimentos = [];
        this.nomeRefeicao = nomeRefeicao;
        this.horarioRefeicao = 0; // atualizar depois
    }

    getAlimentos(): AlimentoNaRefeicao[] {
        return this.alimentos;
    }
    getNomeRefeicao(): string {
        return this.nomeRefeicao;
    }
    getHorarioRefeicao(): number {
        return this.horarioRefeicao;
    }
    getCarboidrato():number {
        return this.alimentos.reduce((total, alimento) =>
             total + alimento.getCarboidrato(), 0);
    }
    getProteina():number {
        return this.alimentos.reduce((total, alimento) =>
            total + alimento.getProteina(),0);
    }
    getGordura():number {
        return this.alimentos.reduce((total, alimento) =>
            total + alimento.getGordura(), 0);
    }
    getFibra():number {
        return this.alimentos.reduce((total, alimento) =>
            total + alimento.getFibra(), 0);
    }
    adicionaAlimento(alimento: Alimento, quantidade:number): void {
        const alimentoNaRefeicao = new AlimentoNaRefeicao(alimento, quantidade);
        this.alimentos.push(alimentoNaRefeicao);
    }
    removeAlimento(alimento:AlimentoNaRefeicao):void{
        const index = this.alimentos.indexOf(alimento);
        if (index !==-1){
            this.alimentos.splice(index,1);
        }
    }
    calculaCaloriaRefeicao():number{
        return this.alimentos.reduce((total,alimento)=>{
            return total + alimento.calculaCaloria();
        }, 0);
    }
    mostraRefeicaoCompleta():void{
        console.log(`Refeição: ${this.nomeRefeicao}`);
        this.alimentos.forEach((alimentoNaRefeicao) => {
            const alimento = alimentoNaRefeicao.getAlimento();
            const quantidade = alimentoNaRefeicao.getQuantidade();
            console.log(`- ${alimento.getNomeAlimento()}: ${quantidade}g`);
        });
        console.log(`Calorias: ${this.calculaCaloriaRefeicao()} kcal`);
        console.log(`Carboidratos: ${this.getCarboidrato()} g`);
        console.log(`Proteínas: ${this.getProteina()} g`);
        console.log(`Gorduras: ${this.getGordura()} g`);
        console.log(`Fibras: ${this.getFibra()} g`);
    }
    mostraRefeicaoResumida():void{
        console.log(`\tRefeição: ${this.nomeRefeicao}`);
        console.log(`\tCalorias: ${this.calculaCaloriaRefeicao()} kcal`);
        console.log(`\tCarboidratos: ${this.getCarboidrato()} g`, `Proteinas: ${this.getProteina()} g`, `Gorduras: ${this.getGordura()} g`, `Fibras: ${this.getFibra()} g`);
    }
}