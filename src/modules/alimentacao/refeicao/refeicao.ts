import AlimentoNaRefeicao from "../alimento/alimentoNaFicha/alimentoNaRefeicao.js";

export default class Refeicao{
    private alimentos: AlimentoNaRefeicao[];
    private nomeRefeicao: string;
    private horarioRefeicao: number;

    constructor(nomeRefeicao: string) {
        this.alimentos = [];
        this.nomeRefeicao = nomeRefeicao;
        this.horarioRefeicao = 0;
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
             total + alimento.getAlimento().getCarboidrato() * alimento.getQuantidade(), 0);
    }
    getProteina():number {
        return this.alimentos.reduce((total, alimento) =>
            total + alimento.getAlimento().getProteina() * alimento.getQuantidade(), 0);
    }
    getGordura():number {
        return this.alimentos.reduce((total, alimento) =>
            total + alimento.getAlimento().getGordura() * alimento.getQuantidade(), 0);
    }

    adicionaAlimento(alimento: AlimentoNaRefeicao): void {
        this.alimentos.push(alimento);
    }
    removeAlimento(alimento:AlimentoNaRefeicao):void{
        const index = this.alimentos.indexOf(alimento);
        if (index !==-1){
            this.alimentos.splice(index,1);
        }
    }
    calculaCaloriaRefeicao():number{
        return this.alimentos.reduce((total,alimento)=>{
            return total + alimento.getCaloria();
        }, 0);
    }
}