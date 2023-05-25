exports.homePage = (req, res) => {
    res.render('index');
};

exports.receiveResponse = (req, res) => {
    res.send(`Recebi o seu formulário: Você disse ${req.body.value}!`);
}