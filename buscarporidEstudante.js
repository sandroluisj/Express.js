const {aluguel} = require("./data")

const buscarporidEstudante = (req, res) => {
    const { idEstudante } = req.query
    const aluguels = aluguel.find(l => l.idEstudante == idEstudante)
     if(aluguels){
        res.status(200).send(aluguels)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = buscarporidEstudante