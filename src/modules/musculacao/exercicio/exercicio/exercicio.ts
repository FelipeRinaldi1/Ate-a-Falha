export default class Exercicio {
    private nome:string;
    private descricao:string;
    private focoMuscular:string;

    constructor(nome:string, descricao:string, focoMuscular:string) {
        this.nome = nome;
        this.descricao = descricao;
        this.focoMuscular = focoMuscular;
    }
    getNome(): string {
        return this.nome;
    }
    getDescricao(): string {
        return this.descricao;
    }
    getFocoMuscular(): string {
        return this.focoMuscular;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
    setFocoMuscular(focoMuscular: string): void {
        this.focoMuscular = focoMuscular;
    }
}