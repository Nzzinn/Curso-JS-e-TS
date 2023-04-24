//Define Property - Define Properties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Valor
        writable: false, //Pode alterar
        configurable: true //Pode reconfigurar
    });

    //Object.defineProperty(this, 'estoque', { //RECONFIGURA O VALOR DO ESTOQUE.
        //enumerable: true, //Mostra a chave
        //value: estoque, //Valor
        //writable: true, //Pode alterar
        //configurable: false //Pode reconfigurar
    //});

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //Mostra a chave
            value: nome, //Valor
            writable: true, //Pode alterar
            configurable: true //Pode reconfigurar
        },
        preco: {
            enumerable: true, //Mostra a chave
            value: preco, //Valor
            writable: true, //Pode alterar
            configurable: true //Pode reconfigurar
        }
    });
}

const p = new Produto('Camiseta', 110, 20);
console.log(p); //Mostra Objeto

for(let chave in p){ //Mostra as chaves do objeto
    console.log(chave);
}