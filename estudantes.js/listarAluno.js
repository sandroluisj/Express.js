//feito por Kauany 
const {estudantes} = require('../data');

const listarAluno = (req, res) => {
    res.status(200).send(estudantes);
};

module.exports = listarAluno