const {aluguel} = require("./data")

const buscarporidLivro = (req, res) => {
    const { idLivro } = req.query
    const aluguels =aluguel.find(l => l.idLivro == idLivro)
     if(aluguels){
        res.status(200).send(aluguels)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = buscarporidLivro