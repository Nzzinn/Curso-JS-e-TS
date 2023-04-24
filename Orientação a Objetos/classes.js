//As classes fazem as mesmas coisas que o Prototype porém é mais simples e intuitivo;
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`);
    }

    comer(){
        console.log(`${this.nome} está comendo.`)
    }

    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}

const p = new Pessoa('Nathan', 'Ferreira');
p.falar();
p.comer();
p.beber();