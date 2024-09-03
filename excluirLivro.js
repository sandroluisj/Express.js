const { livro } = require('../data')

const excluirLivro = (req, res) => {
    const { id } = req.params;
    const index = livro.findIndex((l) => l.id == id)
    livro.forEach((livros, index) => {   //aqui era com s no final fs
        if (livros.livroId == id){
            livro.splice(index, 1);
        }
    })
    
    res.status(200).send({
        message: 'Livro deletado com sucesso !',
        livros: livroExcluido
    })
  }

module.exports = excluirLivro;
    
        if (index === -1){
        return res.status(404).send('Livro não encontrado !');
    }
    const livroExcluido = livro.splice(index,1) [0]
