/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna pra um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

//Construtora -> molde(classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.nome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome;
};

//Instância
const p1 = new Pessoa('Nathan', 'F.'); // <- Pessoa = função construtora
const data = new Date(); // <- Date = função construtora
console.dir(p1);
console.dir(data);