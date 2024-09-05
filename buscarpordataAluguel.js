const {aluguel} = require("./data")

const buscarpordataAluguel = (req, res) => {
    const { dataAluguel } = req.query
    const aluguels = aluguel.find(l => l.dataAluguel == dataAluguel)
     if(aluguels){
        res.status(200).send(aluguels)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = buscarpordataAluguel