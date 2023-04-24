 function Pessoa(nome, sobrenome){
   this.nome = nome;
   this.sobrenome = sobrenome;

   Object.freeze(this); //Congela o valor do objeto, só que ele também é perigoso pois ele não permite criar mais nada.
};

const p = new Pessoa('Nathan', 'Ferreira');
p.nome = 'Outra coisa'; //O Object.freeze inviabiliza esse comando
console.log(p);