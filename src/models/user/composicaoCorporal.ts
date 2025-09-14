export default class ComposicaoCorporal{
    private peso: number; 
    private altura: number;
    private idade: number;
    private sexo: 0 | 1; // 0 Masculino / 1 Feminino
    private nivelAtividade: 0 | 1 | 2 | 3 | 4; // sedentario, pouco ativo, moderadamente ativo, muito ativo, extremamente ativo
    private porcentagemGorduraCorporal: number | null; // em porcentagem, null se não calculado

    constructor(peso: number, altura: number, idade: number, sexo: 0 | 1, nivelAtividade: 0 | 1 | 2 | 3 | 4) {
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
        this.sexo = sexo;
        this.nivelAtividade = nivelAtividade;
        this.porcentagemGorduraCorporal = null;
    }
    getPeso(): number {
        return this.peso;
    }
    getAltura(): number {
        return this.altura;
    }
    getIdade(): number {
        return this.idade;
    }
    getSexo(): number {
        return this.sexo;
    }
    getNivelAtividade(): number {
        return this.nivelAtividade;
    }
    getPorcentagemGorduraCorporal(): number | null {
        return this.porcentagemGorduraCorporal;
    }
    setPeso(peso: number): void {
        this.peso = peso;
    }
    setAltura(altura: number): void {
        this.altura = altura;
    }
    setIdade(idade: number): void {
        this.idade = idade;
    }
    setSexo(sexo: 0 | 1): void {
        this.sexo = sexo;
    }
    setNivelAtividade(nivelAtividade: 0 | 1 | 2 | 3 | 4): void {
        this.nivelAtividade = nivelAtividade;
    }
    setPorcentagemGorduraCorporal(porcentagem: number | null): void {
        this.porcentagemGorduraCorporal = porcentagem;
    }

    calculaTMB():number{
        if(this.sexo === 0){
            return (10 * this.peso) + (6.25 * this.altura) - (5.0 * this.idade) + 5;
        }
        else{
            return (10 * this.peso) + (6.25 * this.altura) - (5.0 * this.idade) - 161;
        }
    }
    calculaAtividadeFisica(): number {
        switch (this.nivelAtividade) {
            case 0:
                const sedentario = 1.2;
                return this.calculaTMB() * sedentario;
            case 1:
                const poucoAtivo = 1.375;
                return this.calculaTMB() * poucoAtivo;
            case 2:
                const moderadamenteAtivo = 1.55;
                return this.calculaTMB() * moderadamenteAtivo;
            case 3:
                const muitoAtivo = 1.725;
                return this.calculaTMB() * muitoAtivo;
            case 4:
                const extremamenteAtivo = 1.9;
                return this.calculaTMB() * extremamenteAtivo;
            default:
                throw new Error("Nível de atividade inválido");
        }
    }
}