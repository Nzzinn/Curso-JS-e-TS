// Função fábrica -> objetos
// Função construtora -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Nathan', 'Augusto');
p1.metodo();