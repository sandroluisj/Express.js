const {aluguel} = require('../data')
const DeletarAluguel = (req,res) => {
    const {id} = req.params
    const index = aluguel.findIndex((f) => f.id == id)
    if(index === -1){
        return res.status (400).send({menssage: 'Aluguel não encontrado'})
    }
    const deletaaluguel = aluguel.splice(index, 1) [0]
    res.status(200).send({
        message: 'aluguel deletado!!',
        alguel: deletaaluguel 
    })
}
module.exports = DeletarAluguel
