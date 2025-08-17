import FichaEspecifica from "./fichaEspecifica.js";
export default class FichaGlobal{
    private nome:string;
    private tags:string[] = [];
    private fichasEspecificas: FichaEspecifica[] = [];
    constructor(nome:string) {
        this.nome = nome;
    }
    getNome(): string {
        return this.nome;
    }
    getTags(): string[] {
        return this.tags;
    }
    getFichasEspecificas(): FichaEspecifica[] {
        return this.fichasEspecificas;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    setTags(tags: string[]): void {
        this.tags = tags;
    }
    setFichasEspecificas(fichas: FichaEspecifica[]): void {
        this.fichasEspecificas = fichas;
    }
    criaFichaEspecifica(dia: string): FichaEspecifica {
        const ficha = new FichaEspecifica(dia);
        this.fichasEspecificas.push(ficha);
        return ficha;
    }
    removeFichaEspecifica(fichaEspecifica:FichaEspecifica): void {
        const index = this.fichasEspecificas.indexOf(fichaEspecifica);
        if (index > -1) {
            this.fichasEspecificas.splice(index, 1);
        }
    }
}