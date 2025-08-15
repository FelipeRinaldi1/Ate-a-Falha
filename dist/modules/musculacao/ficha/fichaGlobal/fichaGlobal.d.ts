import FichaEspecifica from "../fichaEspecifica/fichaEspecifica.js";
export default class FichaGlobal {
    private nome;
    private tags;
    private fichasEspecificas;
    constructor(nome: string);
    getNome(): string;
    getTags(): string[];
    getFichasEspecificas(): FichaEspecifica[];
    setNome(nome: string): void;
    setTags(tags: string[]): void;
    setFichasEspecificas(fichas: FichaEspecifica[]): void;
    criaFichaEspecifica(dia: string): FichaEspecifica;
    removeFichaEspecifica(fichaEspecifica: FichaEspecifica): void;
}
//# sourceMappingURL=fichaGlobal.d.ts.map