/*
    Object.values
    Object.entries
    Object.assign(des, any)
    Object.getOwnPropertyDescriptor(o, 'prop')
    ...(spread)

    //Já vimos
    Object.keys()
    Object.freeze()
    Object.defineProperties()
    Object.defineProperty()
*/

const produto = {
    nome: 'Produto',
    preco: 200
};

Object.defineProperty(produto, 'nome', { //Define as propriedades da chave nome a chava preço eu posso editar
    writable: false,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //Retorna as propriedades das chaves do Objeto.

produto.nome = 'Computador';
//delete produto.preco;
console.log(produto);

console.log(Object.values(produto)); //Mostra os valores do Objeto


