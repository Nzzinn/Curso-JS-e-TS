//IIFE -> Immediately invoked function expression
(anonima = (num1, num2) => {
    const media = (num1 + num2) / 2;
    console.log(media);
})(30, 70);

(anonima = (idade, peso, altura) => {
    const sobrenome = 'Ferreira';

    const criaNome = (nome) => {
        return `${nome} ${sobrenome}`
    }

    const falaNome = () => {
        console.log(criaNome('Nathan'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(19, 101.2, 1.86);

