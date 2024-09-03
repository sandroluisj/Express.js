const {aluguel} = require('../data')

const autualizarAluguel = (req, res) =>{
    const{id} = req.params
    const novadatadealuguel = req.body.dataAluguel
    const novadatadevolução = req.body.datadevolução
    const algueis = aluguel.find((b) => b.id == id)
    if(algueis){
        return res.status (400).send({menssage: 'Aluguel não encontrado'})

    }
    algueis.dataAluguel = novadatadealuguel
    algueis.datadevolução = novadatadevolução
    res.status(200).send({
        message: 'aluguel autualizado!!',
        algueis: aluguel
    })
}
 module.exports = autualizarAluguel