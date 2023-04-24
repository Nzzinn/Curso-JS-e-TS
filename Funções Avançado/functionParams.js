const funcao = ({nome, sobrenome, idade}) =>{
    console.log(nome, sobrenome, idade);
}

let pessoa = {nome: 'Nathan', sobrenome: 'Ferreira', idade: 19};
funcao(pessoa);

const conta = (operador, acumulador, numeros) =>{
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 0, [20, 30, 40, 50]);
/*
function funcao(a, b = 0){
    console.log(a + b);
}
funcao(2);
*/

/*
Argumento que sustenta todos os argumentos enviados
function funcao(a, b, c){
    let total = 0;

    for(let argumento of arguments){
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
*/