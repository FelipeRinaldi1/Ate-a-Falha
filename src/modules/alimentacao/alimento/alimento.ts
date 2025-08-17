export default class Alimento{
    private nomeAlimento:string;
    private carboidrato:number;
    private proteina:number;
    private gordura:number;
    private fibra:number;
    private caloria:number;
    constructor(nomeAlimento:string,carboidrato:number,proteina:number,gordura:number,fibra:number){
        this.nomeAlimento = nomeAlimento
        this.carboidrato = carboidrato
        this.proteina = proteina
        this.gordura = gordura
        this.fibra = fibra
        this.caloria = this.calcularCaloria()
    }

    getNomeAlimento():string{
        return this.nomeAlimento
    }

    getCarboidrato():number{
        return this.carboidrato
    }

    getProteina():number{
        return this.proteina
    }

    getGordura():number{
        return this.gordura
    }

    getFibra():number{
        return this.fibra
    }

    setNomeAlimento(nome:string):void{
        this.nomeAlimento = nome
    }

    setCarboidrato(carboidrato:number):void{
        this.carboidrato = carboidrato
    }

    setProteina(proteina:number):void{
        this.proteina = proteina
    }

    setGordura(gordura:number):void{
        this.gordura = gordura
    }

    setFibra(fibra:number):void{
        this.fibra = fibra
    }

    calcularCaloria():number{
        return (this.carboidrato * 4) + (this.proteina * 4) + (this.gordura * 9) - (this.fibra * 2);
    }

    getCaloria():number{
        return this.caloria
    }
}