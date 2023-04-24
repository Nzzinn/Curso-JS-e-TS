function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (min - max) + min);
}

function loading(msg, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('CAI NO ERRO!');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;
        }, time);
    });
}

async function execute(){
    const parte1 = await loading('Primeira parte', rand());
    console.log(parte1);

    const parte2 = await loading('Segunda parte', rand());
    console.log(parte2);

    const parte3 = await loading('Terceira parte', rand());
    console.log(parte3);
}

execute();