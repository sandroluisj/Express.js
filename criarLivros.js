const { livro } = require('../data');

function criarLivro(req, res) {
    console.log(req.body);
    const novoLivro = {
        id: livro.length + 1,
        titulo: req.body.titulo,
        nomeDoAutor: req.body.nomeDoAutor,
        ano: req.body.ano,
        genero: req.body.genero
    };
    livro.push(novoLivro)
    res.status(201).send({
        message: 'Livro adicionado com sucesso !',
        livro: novoLivro});
}

module.exports = criarLivro