export default class Usuario{
    private nome: string;
    private email: string;
    private senha: string;

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public getNome(): string {
        return this.nome;
    }
    public getEmail(): string {
        return this.email;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public setEmail(email: string): void {
        this.email = email;
    }

    public verificaSenha(senha: string): boolean {
        return this.senha === senha;
    }
}