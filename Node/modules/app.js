const path = require('path');
const caminho = path.resolve(__dirname, '','teste.json');
//const escreve = require('./escrever');
const ler = require('./ler');

/*
ESCREVE ARQUIVO:
const pessoas = [
    {nome: 'Nathan'},
    {nome: 'Gean'},
    {nome: 'Gabi'},
    {nome: 'Daniel'},
    {nome: 'Sara'}
];

const json = JSON.stringify(pessoas, '', 2);

escreve(caminho, json);
*/

//LÊ ARQUIVO:
const leArquivo = async (caminho) =>{
    const dados = await ler(caminho);
    renderizaDados(dados);
}

const renderizaDados = (dados) => {
    dados = JSON.parse(dados);

    dados.forEach(valor => console.log(valor));
}

leArquivo(caminho);