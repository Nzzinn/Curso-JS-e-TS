const soma = (a, b) => {
    return a, b;
};

const pessoa = (nome, sobrenome) => {
    return {nome, sobrenome};
};

const p1 = pessoa('Nathan', 'Ferreira');
console.log(p1);

    const falaFrase = (comeco) =>{
        const falaResto = (resto) =>{
            return comeco + ' ' +resto;
        }
        return falaResto;
    }

    const frase = falaFrase('O Zé é meu');
    const resto = frase('amigo');
    console.log(resto);

    const duplica = (n) =>{
        return n * 2;
    };

    console.log(duplica(8));

    const multiplicador = (mult) =>{
        const multiplica = (n) =>{
            return n * mult; 
        }

        return multiplica;
    };
    
    const vzs2 = multiplicador(2);
    console.log(duplica(20));
