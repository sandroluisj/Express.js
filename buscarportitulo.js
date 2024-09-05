const {livro} = require("./data")

const buscarportitulo = (req, res) => {
    const { titulo } = req.query
    const livros = livro.find(l => l.titulo == titulo)
 
     if(livros){
        res.status(200).send(livros)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = buscarportitulo