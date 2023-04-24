const pessoas = [
    {id: 3, nome: 'Nathan'},
    {id: 2, nome: 'Sara'},
    {id: 1, nome: 'Gabi'}
];

/*
const novasPessoas = {};
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {..pessoa};
}
*/

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa});
}

/*
for(const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome);
}

for(const [pessoa] of novasPessoas){
    console.log(pessoa);
}
*/