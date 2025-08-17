import type Alimento from "./modules/alimentacao/alimento/alimento.js";
import type AlimentoNaRefeicao from "./modules/alimentacao/alimento/alimentoNaRefeicao.js";
import type Dieta from "./modules/alimentacao/dieta/dieta.js";
import GerenciaAlimentacao from "./modules/alimentacao/gerenciaAlimentacao.js"
import type Refeicao from "./modules/alimentacao/refeicao/refeicao.js";

const gerenciaAlimentacao = new GerenciaAlimentacao();

var listaAlimentos:Alimento[] = [];

var arroz:Alimento = (gerenciaAlimentacao.criaAlimentoPersonalizado("Arroz", 28, 2, 0.3, 0.4));
var feijao:Alimento = (gerenciaAlimentacao.criaAlimentoPersonalizado("Feijão", 27, 9, 0.2, 6.4));
var frango:Alimento = (gerenciaAlimentacao.criaAlimentoPersonalizado("Frango", 0, 31, 3.6, 0));

var arrozNaRefeicao:AlimentoNaRefeicao = gerenciaAlimentacao.criaAlimentoNaRefeicao(arroz, 1);
var feijaoNaRefeicao:AlimentoNaRefeicao = gerenciaAlimentacao.criaAlimentoNaRefeicao(feijao, 1);
var frangoNaRefeicao:AlimentoNaRefeicao = gerenciaAlimentacao.criaAlimentoNaRefeicao(frango, 1);

var refeicaoObj:Refeicao = gerenciaAlimentacao.criaRefeicao("Almoço");

gerenciaAlimentacao.adicionaAlimentoNaRefeicao(refeicaoObj, arrozNaRefeicao);
gerenciaAlimentacao.adicionaAlimentoNaRefeicao(refeicaoObj, feijaoNaRefeicao);
gerenciaAlimentacao.adicionaAlimentoNaRefeicao(refeicaoObj, frangoNaRefeicao);

console.log(refeicaoObj);
console.log("Calorias da Refeição: " + refeicaoObj.calculaCaloriaRefeicao());

var dietaObj:Dieta = gerenciaAlimentacao.criaDieta("DietaTeste");

gerenciaAlimentacao.adicionaRefeicaoNaDieta(dietaObj, refeicaoObj);

console.log(dietaObj);
console.log("Calorias da Dieta: " + gerenciaAlimentacao.calculaCaloriaDieta(dietaObj));

gerenciaAlimentacao.removeRefeicaoNaDieta(dietaObj, refeicaoObj);
gerenciaAlimentacao.removeAlimentoNaRefeicao(refeicaoObj, arrozNaRefeicao);
gerenciaAlimentacao.removeAlimentoNaRefeicao(refeicaoObj, feijaoNaRefeicao);
gerenciaAlimentacao.removeAlimentoNaRefeicao(refeicaoObj, frangoNaRefeicao);

gerenciaAlimentacao.trocaMetasDieta(dietaObj, 500, 160, 64, 25, 4);
console.log(dietaObj.getMeta());

import Exercicio from "./modules/musculacao/exercicio/exercicio.js";
import Serie from "./modules/musculacao/exercicio/serie.js";
import ExercicioNaFicha from "./modules/musculacao/exercicio/exercicioNaFicha.js";
import FichaEspecifica from "./modules/musculacao/ficha/fichaEspecifica.js";
import FichaGlobal from "./modules/musculacao/ficha/fichaGlobal.js";
import FichaExecutavel from "./modules/musculacao/ficha/fichaExecutavel.js";

var supino = new Exercicio("Supino","Empurrar a barra contraindo o peitoral" ,"Peitoral");
var supinoNaFicha = new ExercicioNaFicha(supino,4,12,60,50);

var fichaTeste = new FichaEspecifica("Ficha Especifica de Teste")
fichaTeste.adicionaExercicio(supinoNaFicha);

var fichaTesteExecutavel = new FichaExecutavel(fichaTeste);
fichaTesteExecutavel.mostraSeries(0);

console.log("teste")