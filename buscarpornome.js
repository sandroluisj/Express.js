const {estudantes} = require("./data")

const buscarpornome = (req, res) => {
    const { nome } = req.query
    const estudante = estudantes.find(l => l.nome == nome)
     if(estudante){
        res.status(200).send(estudante)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = buscarpornome