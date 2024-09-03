const { livro } = require('../data');

const atualizarLivro = (req, res) => {
    const { id } = req.params;
    const novoTitulo = req.body.titulo;
    const nomeDoAutor = req.body.nomeDoAutor;
    const ano = req.body.ano;
    const genero = req.body.genero;
    };

    const livros = livro.find((l) => l.id == id );

    if (!livros) {
        return res.status(404).send({message: 'Livro não encontrado'})
    }

    livros.titulo = novoTitulo;
    livros.nomeDoAutor = novoNome;
    livros.ano = novoAno;
    livros.genero = novoGenero;
    res.status(200).send({
        message: 'Livro atualizado com sucesso !',
        livros: livros 
    });


module.exports = atualizarLivro;