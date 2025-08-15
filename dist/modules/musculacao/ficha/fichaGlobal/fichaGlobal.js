import FichaEspecifica from "../fichaEspecifica/fichaEspecifica.js";
export default class FichaGlobal {
    nome;
    tags = [];
    fichasEspecificas = [];
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getTags() {
        return this.tags;
    }
    getFichasEspecificas() {
        return this.fichasEspecificas;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setTags(tags) {
        this.tags = tags;
    }
    setFichasEspecificas(fichas) {
        this.fichasEspecificas = fichas;
    }
    criaFichaEspecifica(dia) {
        const ficha = new FichaEspecifica(dia);
        this.fichasEspecificas.push(ficha);
        return ficha;
    }
    removeFichaEspecifica(fichaEspecifica) {
        const index = this.fichasEspecificas.indexOf(fichaEspecifica);
        if (index > -1) {
            this.fichasEspecificas.splice(index, 1);
        }
    }
}
//# sourceMappingURL=fichaGlobal.js.map