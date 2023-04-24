//const nome = new Array('Nathan', 'Handa', 'Stutz'); //Funciona igual porém não é tão usado
const nomes = ['Nathan', 'Handa', 'Stutz'];
console.log(nomes.length);

const removido = nomes.pop();
console.log(`O nome removido foi: ${removido}`);

const removido2 = nomes.shift();
console.log(`O nome removido foi: ${removido2}`);

const removido3 = nomes.shift();
console.log(`O nome removido foi: ${removido3}`);

console.log(nomes);

const add = nomes.push('Sara', 'Daniel', 'Matheus');
const valor1 = nomes[0], valor2 = nomes[1], valor3 = nomes[2];

console.log(`Adicionando: ${valor1}, ${valor2} e ${valor3}`);

console.log(nomes);

const limita = nomes.slice(0, -2);
console.log(limita);

const nome = 'Nathan Augusto Junco Ferreira'; 
const recortaNome = nome.split(' '); //Transforma String em Array
console.log(recortaNome);

const nome1 = ['Nathan', 'Augusto', 'Junco', 'Ferreira'];
const juntaNome = nome1.join(' '); //Tranforma Array em String
console.log(juntaNome);