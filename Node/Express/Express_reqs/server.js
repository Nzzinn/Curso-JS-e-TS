const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Home</h1><form action="/" method="post">Nome: <input type="text" name="value"> <button>Enviar</button></form>');
});

app.get('/teste/:profile?', (req, res) => {
    res.send(req.query);
    res.send(req.params);
});

app.post('/', (req, res) => {
    res.send(`Formulário enviado com sucesso: O que você me enviou foi ${req.body.value}!`);
});

app.listen(3000, () => {
    console.log('Servidor executando...');
    console.log('Para acessar clique aqui: http://localhost:3000');
});