export default class MetaDieta {
    private metaCaloria;
    private metaCarboidrato;
    private metaProteina;
    private metaGordura;
    private metaFibra;
    private metaAgua;
    constructor(metaCarboidrato: number, metaProteina: number, metaGordura: number, metaFibra: number, metaAgua: number);
    getMetaCaloria(): number;
    getMetaCarboidrato(): number;
    getMetaProteina(): number;
    getMetaGordura(): number;
    getMetaFibra(): number;
    getMetaAgua(): number;
    setMetaCarboidrato(metaCarboidrato: number): void;
    setMetaProteina(metaProteina: number): void;
    setMetaGordura(metaGordura: number): void;
    setMetaFibra(metaFibra: number): void;
    setMetaAgua(metaAgua: number): void;
    calculaCaloria(): number;
}
//# sourceMappingURL=metasDieta.d.ts.map