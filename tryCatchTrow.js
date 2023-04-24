function retornaData(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:30');
    const hora = retornaData(1);
    console.log(hora);
}catch(error){
    //Tratar erro
}finally{
    console.log('Tenha um bom dia.')
}

/*
try{
    //Executa quando não há erros
    //console.log(a); - erro
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
}catch(error){
    //Executa quando há erros
    console.log('Tratando erro');
}finally{
    //Sempre executa
    console.log('Eu sempre sou executado');
}

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('Isso precisa ser um número');
    }

    return x + y;
}
try{
    console.log(soma(1, 9));
    console.log(soma('1' + 9));
}catch(error){
    console.log(error);
}
*/