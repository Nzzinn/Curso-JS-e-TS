//Factory Function
//Constructor Function 
const pessoa = (nome, sobrenome, a, p) => {
    return{
        nome, 
        sobrenome,
        get nomeCompleto(){ //Getter
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){ //Setter 
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        frase(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        get imc(){ //Getter
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = pessoa('Nathan', 'Ferreira', 1.86, 101.2);
p1.nomeCompleto = 'Nathan Augusto Junco Ferreira';
console.log(p1.nome);
console.log(p1.sobrenome);