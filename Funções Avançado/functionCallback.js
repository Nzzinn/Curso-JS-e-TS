const rand = (min = 1000, max = 3000) => {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

const f1 = (callback) => {
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, rand());
}

const f2 = (callback) => {
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, rand());
}

const f3 = (callback) => {
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, rand());
}

//Cria uma ordem de execução da função atribuindo o callback de cada função
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Testando');
        });
    });
});        