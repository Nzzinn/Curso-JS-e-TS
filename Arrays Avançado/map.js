//Dobra os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numsDobrados = numeros.map(valor => valor * 2);

console.log(numsDobrados);

//Retorna apenas o nome das pessoas.
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Cleiton', idade: 49},
    {nome: 'Lorivaldo', idade: 87},
    {nome: 'José', idade: 90}
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

//Remove a chave nome do objeto.
const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

//Adiciona uma chave id em cada objeto.
const id = pessoas.map((obj, indice) => {
    const newObj = {... obj}; //Cria um novo objeto com o id de cada nome, sem alterar o objeto original.
    newObj.id = indice + 1;
    return newObj;
});

console.log(id);