import {pessoa as pessoa2, Univeridade } from "./modulo"; // as -> Faz com que seja criada uma váriavel que referência o que foi importado.
import qlqr from './modulo';

const pessoa = {
    nome: 'Sara',
    sobrenome: 'Bolotaro',
    idade: 22
}

const universidade = new Univeridade('Universidade Positivo');

console.log(pessoa, pessoa2);
console.log(universidade);
console.log(qlqr(1, 1));