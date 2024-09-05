const {livro} = require('./data')

const buscarporgenero = (req, res) => {
    const { genero } = req.query
    const livros = livro.find(j => j.genero == genero )
    
     if(livros){
        res.status(200).send(livros)
     } else{
        res.status(404).send({message: 'hjhj'})
     }
}
module.exports = buscarporgenero