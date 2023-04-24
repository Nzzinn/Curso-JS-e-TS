class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} está dizendo:  Estou ligado!`);
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} está dizendo:  Estou desligado!`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends Dispositivo{
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }
}

const s = new Smartphone('Iphone 13 Pro Max', 'Branco');
s.ligar();
console.log(s);