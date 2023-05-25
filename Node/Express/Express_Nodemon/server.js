const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home</h1><form action="/" method="post">Nome: <input type="text" name="nome"> <button>Enviar</button></form>');
});

app.post('/', (req, res) => {
    res.send(`Formulário enviado com sucesso!`);
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por ter entrado em contato comigo!');
});

app.listen(3000, () => {
    console.log('Servidor executando...');
    console.log('Para acessar clique aqui: http://localhost:3000');
});