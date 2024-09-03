//feito por Kauany 
const {estudantes} = require('../data')

const deletarAluno = (req, res) => {
    const {id} = req.params;
    const index = estudantes.findIndex((b) => b.id == id);

    if (index === -1){
        return res.status(404).send('Aluno não encontrado!');
    }

    const alunoDeletado = estudantes.splice(index, 1)[0];

    res.status(200).send({
        message: 'Aluno deletado com sucesso!',
        estudante: alunoDeletado
    })
}
module.exports = deletarAluno