class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p = new Pessoa();
p.nomeCompleto = 'Nathan Augusto Junco Ferreira'
console.log(p.nomeCompleto);

/*
class Carro{
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(){
        if(this.velocidade >= 100) return;
        this.velocidade++;
    }
    
    freiar(){
        if(this.velocidade <= 0) return;
        this.velocidade--;
    }
}

const c1 = new Carro('Corolla');
for(let i = 0; i<= 200; i++){
    c1.acelerar();
}

console.log(c1); 
*/