const {estudantes} = require("./data")

const buscarporcurso = (req, res) => {
    const { curso } = req.query
    const estudante = estudantes.find(j => j.curso == curso)
     if(estudante){
        res.status(200).send(estudante)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = buscarporcurso