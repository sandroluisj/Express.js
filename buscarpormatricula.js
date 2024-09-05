const {estudantes} = require("./data")

const buscarpormatricula = (req, res) => {
    const { matricula } = req.query
    const estudante = estudantes.find(j => j.matricula == matricula )
     if(estudante){
        res.status(200).send(estudante)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = buscarpormatricula