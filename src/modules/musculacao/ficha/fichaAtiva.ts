import FichaGlobal from "./fichaGlobal.js"
export default class FichaAtiva{
    private ficha: FichaGlobal;
    constructor(ficha: FichaGlobal){
        this.ficha = ficha;
    }
    getFicha(): FichaGlobal {
        return this.ficha;
    }
    setFicha(ficha: FichaGlobal): void {
        this.ficha = ficha;
    }
}