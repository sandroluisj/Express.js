const { livro } = require('../data');

const listarLivros = (req, res) => {
    res.status(200).send(livro);
};

module.exports = listarLivros