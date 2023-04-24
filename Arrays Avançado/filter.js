//Filter sempre retorna um array com a mesma quantidade de elementos do array original ou menor.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor =>  valor > 30);

console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Nathan', idade: 19},
    {nome: 'Sara', idade: 22},
    {nome: 'Gabi', idade: 18},
    {nome: 'Valdecir', idade: 53},
    {nome: 'Erica', idade: 45}
];

const nomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const maisIdade = pessoas.filter(obj => obj.idade >= 50);
const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomeGrande,'---' ,maisIdade,'---' ,terminaComA);
