exports.homePage = (req, res) => {
    res.send('<h1>Home</h1><form action="/" method="post">Nome: <input type="text" name="value"> <button>Enviar</button></form>');
};

exports.receiveResponse = (req, res) => {
    res.send(`Recebi o seu formulário: Você disse ${req.body.value}!`);
}