//feito por Kauany 
const {estudantes} = require('../data');

function adicionarEstudante(req, res) {
    console.log(req.body);
    const novoEstudante = { 
        id: estudantes.length + 1,
        nome: req.body.titulo
    };
    estudantes.push(novoEstudante)
    res
    .status(201)
    .send({message: 'Aluno adicionado com sucesso!',estudante:
novoEstudante});
}

module.exports = adicionarEstudante