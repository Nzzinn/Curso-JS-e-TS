class Controle{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentaVolume(){
        this.volume += 2;
    }

    diminuiVolume(){ //Método de instância
        this.volume -= 2;
    }

    static trocaPilha(){ //Método estático
        console.log('Ok, vou trocar!')
    }
}

const controle = new Controle('Samsung');
controle.aumentaVolume();
Controle.trocaPilha(); //Quando o método é estático você só pode acessá-lo pela classe.
console.log(controle);