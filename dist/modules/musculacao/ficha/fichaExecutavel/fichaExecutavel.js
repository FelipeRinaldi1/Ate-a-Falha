import FichaEspecifica from "../fichaEspecifica/fichaEspecifica.js";
export default class FichaExecutavel {
    listaExercicios;
    constructor(ficha) {
        this.listaExercicios = ficha.getListaExercicios();
    }
    getListaExercicios() {
        return this.listaExercicios;
    }
    setListaExercicios(lista) {
        this.listaExercicios = lista;
    }
    mostraSeries(index) {
        const exercicio = this.listaExercicios[index];
        console.log("Exercicio: " + exercicio?.getExercicio().getNome());
        exercicio?.mostraSeries();
    }
}
//# sourceMappingURL=fichaExecutavel.js.map