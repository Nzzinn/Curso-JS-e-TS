const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
};

const pessoaPrototype = {...falar, ...comer, ...beber}; //Chamado de Composição ou Mixing;

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
};

const p = criaPessoa('Nathan', 'Ferreira');
const p2 = criaPessoa('Sara', 'Bolotaro');
console.log(p);
console.log(p2);