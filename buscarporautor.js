const { livro } = require("./data")

const buscarporautor = (req, res) => {
    const { autor } = req.query
    const livros = livro.find(l => l.autor == autor )
  
     if(livros){
        res.status(200).send(livros)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = buscarporautor