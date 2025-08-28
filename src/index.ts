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

menuAlimentacao.menuPrincipal(0);

//Musculação
import BancoMusculacao from "./modules/musculacao/bancoMusculacao.js";
import GerenciaMusculacao from "./modules/musculacao/gerenciaMusculacao.js";
import MenuMusculacao from "./modules/musculacao/menuMusculacao.js";

const bancoMusculacao = new BancoMusculacao();
const gerenciaMusculacao = new GerenciaMusculacao(bancoMusculacao);
const menuMusculacao = new MenuMusculacao(gerenciaMusculacao);


gerenciaMusculacao.criaExercicio("Supino", "Empurrar halteres contraindo peitoral", "Peitoral");
gerenciaMusculacao.criaExercicio("Agachamento", "Agachar com barra nas costas", "Pernas");
gerenciaMusculacao.criaExercicio("Levantamento Terra", "Puxar barra do chão até a altura do quadril", "Costas");

gerenciaMusculacao.criaFichaGlobal("Ficha Teste");
gerenciaMusculacao.adicionaFichaEspecifica(0, "Segunda-feira");
gerenciaMusculacao.adicionaExercicioNaFicha(0, 0, 0, 3, 12, 60, 100);
gerenciaMusculacao.adicionaExercicioNaFicha(0, 0, 2, 5, 8, 120, 200);
gerenciaMusculacao.adicionaExercicioNaFicha(0, 0, 1, 4, 10, 90, 150);
