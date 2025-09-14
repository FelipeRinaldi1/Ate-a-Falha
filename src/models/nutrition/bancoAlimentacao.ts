import Alimento from "./alimento/alimento.js";
import Dieta from "./dieta/dieta.js";

export default class BancoAlimentacao{
    private listaAlimento: Alimento[]
    private listaDieta: Dieta[]
    constructor(){
        this.listaAlimento= [];
        this.listaDieta = [];
    }
    getListaAlimento(): Alimento[] {
        return this.listaAlimento;
    }
    getListaDieta(): Dieta[] {
        return this.listaDieta;
    }
    getAlimento(index: number): Alimento | undefined {
        return this.listaAlimento[index];
    }
    getDieta(index: number): Dieta | undefined {
        return this.listaDieta[index];
    }
    adicionarAlimento(alimento: Alimento): void {
        this.listaAlimento.push(alimento);
    }
    adicionarDieta(dieta: Dieta): void {
        this.listaDieta.push(dieta);
    }
}