export default class Exercicio {
    nome;
    descricao;
    focoMuscular;
    constructor(nome, descricao, focoMuscular) {
        this.nome = nome;
        this.descricao = descricao;
        this.focoMuscular = focoMuscular;
    }
    getNome() {
        return this.nome;
    }
    getDescricao() {
        return this.descricao;
    }
    getFocoMuscular() {
        return this.focoMuscular;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setFocoMuscular(focoMuscular) {
        this.focoMuscular = focoMuscular;
    }
}
//# sourceMappingURL=exercicio.js.map