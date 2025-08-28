export default class Alimento{
    private nomeAlimento:string;
    private carboidrato:number;
    private proteina:number;
    private gordura:number;
    private fibra:number;
    private caloria:number;
    constructor(nomeAlimento:string,carboidrato100g:number,proteina100g:number,gordura100g:number,fibra100g:number){
        this.nomeAlimento = nomeAlimento
        this.carboidrato = carboidrato100g / 100
        this.proteina = proteina100g / 100
        this.gordura = gordura100g / 100
        this.fibra =  fibra100g / 100
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
        this.carboidrato = carboidrato / 100;
    }

    setProteina(proteina:number):void{
        this.proteina = proteina / 100;
    }

    setGordura(gordura:number):void{
        this.gordura = gordura / 100;
    }

    setFibra(fibra:number):void{
        this.fibra = fibra / 100;
    }

    calcularCaloria():number{
        return (this.carboidrato * 4) + (this.proteina * 4) + (this.gordura * 9);
    }

    getCaloria():number{
        return this.caloria
    }
}