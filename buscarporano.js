const {livro} = require("./data")

const buscarporano = (req, res) => {
    const { ano } = req.query
    const livros = livro.find(l => l.ano == ano)
      if(livros){
        res.status(200).send(livros)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = buscarporano