//Soma todos os números.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
});

console.log(total);

//Retorna um array com os numeros pares.
const numeros1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total1 = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0)acumulador.push(valor);
    return acumulador;
}, []);

console.log(total1);

//Soma todos os numeros pares.
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total2 = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0);

console.log(total2);

//Retorna a pessoa mais velha.
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Cleiton', idade: 49},
    {nome: 'Lorivaldo', idade: 87},
    {nome: 'José', idade: 90}
];

const maisVelha = pessoas.reduce((acumulador, valor)=> {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);