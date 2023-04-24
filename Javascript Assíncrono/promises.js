function connect(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg);
        }, time);
    })
}

connect('Calma aí', 3000).then();

//Métodos úteis para Promises.
const promises = [ 
connect('Promise 1', 2000),
connect('Promise 2', 3000),
connect('Promise 3', 4000)
];

Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})

Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})