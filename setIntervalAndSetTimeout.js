function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function funcaoInterval(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
    console.log('Olá mundo!')
}, 5000);