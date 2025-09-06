//Alimentação
import GerenciaAlimentacao from "./modules/alimentacao/gerenciaAlimentacao.js";
import BancoAlimentacao from "./modules/alimentacao/bancoAlimentacao.js";
import MenuAlimentacao from "./modules/alimentacao/menuAlimentacao.js";

const bancoAlimentacao = new BancoAlimentacao();
const gerenciaAlimentacao = new GerenciaAlimentacao(bancoAlimentacao);
const menuAlimentacao = new MenuAlimentacao(gerenciaAlimentacao);

gerenciaAlimentacao.criaDieta("Dieta Teste")
gerenciaAlimentacao.atualizaMetaDieta(0,600,160,64,40,4000)
gerenciaAlimentacao.adicionaRefeicaoNaDieta(0,"Café da Manhã")
gerenciaAlimentacao.criaAlimento("AlimentoTeste",1,1,1,0);
gerenciaAlimentacao.adicionaAlimentoNaRefeicao(0,0,0,100)


gerenciaAlimentacao.acrescentaAguaNaDieta(0,500);
console.log(gerenciaAlimentacao.exportaAlimento(0))
menuAlimentacao.menuPrincipal(0);