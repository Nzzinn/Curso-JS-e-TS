//Declaração de função(Function hoisting)
aulaFacul();
function aulaFacul(){
    console.log('Aula chata do kacete');
}

//First-class objects(Objetos de primeria classe)
//Function expression
const souDado = function(){
    console.log('Sou um dado');
}
souDado();

//Arrow function
const funcaoArrow = () => {
    console.log('Arrow');
}
funcaoArrow();

//Dentro de um objeto
const obj = {
    falaOi(){
        console.log('Oi');
    }
};

obj.falaOi();