//Define Property - Define Properties
function Produto(nome, preco, estoque){ //Constructor function
    this.nome = nome;
    this.preco = preco;
    let estoqueP = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        configurable: true, //Pode reconfigurar

        get: function(){ //Getter
            return estoqueP;
        },

        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Value is not valid');
            }

            estoqueP = valor;
        }
    });
}

const criaProduto = (nome) => { //Factory function
    return{ 
        get nome(){
            return nome;
        },

        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
};

const p = new Produto('Camiseta', 110, 20);
//p.estoque = 'kakakaka'; //Testa o TyperError.
console.log(p.estoque); //Mostra Objeto

const p1 = criaProduto('Tênis'); //Imprime a Factory function
p1.nome = 'Qualquer coisa'
console.log(p1.nome);
