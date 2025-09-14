export default class ProgressaoMetricas{
    private x: number[] = [];
    private y: number[] = [];
    constructor(){
        this.x = [];
        this.y = [];
    }
    getX(): number[] {
        return this.x;
    }
    getY(): number[] {
        return this.y;
    }
    setXLista(x: number[]): void {
        this.x = x;
    }
    setYLista(y: number[]): void {
        this.y = y;
    }
    criaPonto(x: number, y: number): void {
        this.x.push(x);
        this.y.push(y);
    }
    getPonto(indexPonto:number){
        if(indexPonto < 0 || indexPonto >= this.x.length){
            throw new Error("Ponto inválido");
        }
        return {x: this.x[indexPonto], y: this.y[indexPonto]};
    }
    removePonto(indexPonto:number):void{
        if(indexPonto < 0 || indexPonto >= this.x.length){
            throw new Error("Ponto inválido");
        }
        this.x.splice(indexPonto, 1);
        this.y.splice(indexPonto, 1);
    }
}