
const express = require('express')
const app = express()
const port = 3000

const criarLivros= require('./criarLivros')
const listarLivros = require('./listarLivros')
const atualizarLivros = require("./atualizarLivros")
const excluirLivros = require("./ExcluirLivros")
const adicionarAluno= require('./adiconarAluno')
const listarAluno = require('./listarAluno')
const atualizarAluno = require("./atualizarAluno")
const deletarAluno = require("./deletarAluno")
const aluguelLivro = require('./aluguelLivro')
const ListarAluguel = require('./listarAluguel')
const autualizarAluguel = require("./autualizarAluguel")
const DeletarAluguel = require("./DeletarAluguel")

app.use(express.json()); 

app.get('/',(req, res) => {
    res.send("servidor ok")
}) 

app.post(criarLivros)
app.get(listarLivros)
app.put('/:id', autualizarLivros)
app.delete(':id', excluirLivros)
app.post(adicionarAluno)
app.get(listarAluno)
app.put(':idBaralho/:id', atualizarAluno)
app.delete(':idBaralho/:id', deletarAluno)
app.post(aluguelLivro)
app.get(ListarAluguel)
app.put(':idBaralho/:id', autualizarAluguel)
app.delete(':idBaralho/:id', deletarAluguel)

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})