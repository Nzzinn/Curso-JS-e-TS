//Quando o return aparece na função geradora ele retorna o valor e para a função, já o yield pega o valor e continua executando.
function* gera1(){
    yield 'Valor: 1';

    yield 'Valor: 2';

    yield 'Valor: 3';
}

const g1 = gera1();
console.log(g1.next().value); //Retorna o valor porém dentro de um objeto (Para pegar só o valor use .value)
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next()); //Nesse linha o "done" se torna true, que indica que os valores dentro da função acabaram;

function* gera2(){
    yield 0;
    yield 1;
    yield 2;
}

function* gera3(){
    yield* gera2(); //Atribui a função geradora2 dentro de outra função geradora.
    yield 3;
    yield 4;
    yield 5;
}

const g3 = gera3();
for(let valor of g3){
    console.log(valor);
}

function* gera4(){ //Funções geradoras também podem retornar métodos
    yield y1 = () => console.log('Vim do y1');
    yield y2 = () => console.log('Vim do y2');
}

const g4 = gera4();
const arrow1 = g4.next().value;
const arrow2 = g4.next().value;

arrow1();
arrow2();