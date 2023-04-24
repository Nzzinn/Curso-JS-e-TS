const nomes = ['Nathan', 'Gabi', 'Erica', 'Valdecir', 'Alessandra', 'Ferreira', 'Junco'];
//nome.splice(indice, delete, adicionaElementos);
//retorna um array porque ela pode remover mais de um elemento.
//const removidos = nomes.splice(4, 3, 'Sara');
const removidos = nomes.splice(-2, Number.MAX_VALUE); //Executa até o infinito
console.log(nomes);
console.log(removidos); //Array retornado