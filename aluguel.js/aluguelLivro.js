const{ aluguel } = require('../data')

function  aluguelLivro(req, res){
    console.log(req.body)
    const novoAluguel = {
        id: aluguel.length + 1,
        idLivro: req.body.idLivro,
        idEstudante: req.body.idEstudante,
        dataAluguel: req.body.dataAluguel,
        datadevolução: req.body.datadevolução
    }
    aluguel.push(novoAluguel)
    res
    .status(201)
    .send({ message: 'aluguel criado!!'})
}
module.exports = aluguelLivro