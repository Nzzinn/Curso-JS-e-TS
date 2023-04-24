const retornaFuncao = () => {
    const nome = 'Nathan'; //Closure
    return function(){
        return nome;
    }
}
console.log(retornaFuncao());

//O closure é nada mais nada menos do que a habilidade do JavaScript de "lembrar" do escopo léxico da função.

const funcao = (nome) => {
    return function(){
        return nome;
    }
}

const nome1 = funcao('Nathan'); //Closure
const nome2 = funcao('Sara'); //Closure
console.log(nome1(), nome2());

//Nesse caso onde a função tem um parâmetro o closure pode ser alterado de função pra função.