export default class Alimento {
    private nomeAlimento;
    private carboidrato;
    private proteina;
    private gordura;
    private fibra;
    private caloria;
    constructor(nomeAlimento: string, carboidrato: number, proteina: number, gordura: number, fibra: number);
    getNomeAlimento(): string;
    getCarboidrato(): number;
    getProteina(): number;
    getGordura(): number;
    getFibra(): number;
    setNomeAlimento(nome: string): void;
    setCarboidrato(carboidrato: number): void;
    setProteina(proteina: number): void;
    setGordura(gordura: number): void;
    setFibra(fibra: number): void;
    calcularCaloria(): number;
    getCaloria(): number;
}
//# sourceMappingURL=alimento.d.ts.map