export default class Serie {
    private carga;
    private repeticoes;
    private tempoDescanso;
    private concluido;
    constructor(carga: number, repeticoes: number, tempoDescanso: number);
    getCarga(): number;
    getRepeticoes(): number;
    getTempoDescanso(): number;
    getConcluido(): boolean;
    setCarga(carga: number): void;
    setRepeticoes(repeticoes: number): void;
    setTempoDescanso(tempoDescanso: number): void;
    setConcluido(concluido: boolean): void;
    setNaoConcluido(): void;
}
//# sourceMappingURL=serie.d.ts.map