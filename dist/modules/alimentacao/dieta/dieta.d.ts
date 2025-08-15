import Refeicao from "../refeicao/refeicao.js";
import MetaDieta from "./metasDieta/metasDieta.js";
export default class Dieta {
    private nome;
    private refeicoes;
    private meta;
    constructor(nome: string);
    getNome(): string;
    getRefeicoes(): Refeicao[];
    getMeta(): MetaDieta;
    setNome(nome: string): void;
    setRefeicoes(refeicoes: Refeicao[]): void;
    setMeta(meta: MetaDieta): void;
    setMetaCarboidrato(carboidrato: number): void;
    setMetaProteina(proteina: number): void;
    setMetaGordura(gordura: number): void;
    setMetaFibra(fibra: number): void;
    setMetaAgua(agua: number): void;
    adicionaRefeicao(refeicao: Refeicao): void;
    removeRefeicao(refeicao: Refeicao): void;
    calculaCaloriaDieta(): number;
}
//# sourceMappingURL=dieta.d.ts.map