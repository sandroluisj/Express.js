const express = require('express')
const app = express()
const port = 3000

const criarLivros= require('./criarLivros')
const listarLivros = require('./listarLivros')
const atualizarLivros = require("./atualizarLivros")
const excluirLivros = require("./excluirLivro")
const adicionarAluno= require('./estudantes.js/adicionarAluno')
const listarAluno = require('./estudantes.js/listarAluno')
const atualizarAluno = require("./estudantes.js/atualizarAluno")
const deletarAluno = require("./estudantes.js/deletarAluno")
const aluguelLivro = require('./aluguel.js/aluguelLivro')
const ListarAluguel = require('./aluguel.js/ListarAluguel')
const autualizarAluguel = require("./aluguel.js/autualizarAluguel")
const DeletarAluguel = require("./aluguel.js/DeletarAluguel")
const buscarporautor = require("./buscarporautor")
const buscarportitulo = require("./buscarportitulo")
const buscarporano = require("./buscarporano")
const buscarporgenero = require("./buscarporgenero")
const buscarpornome = require("./buscarpornome")
const buscarpormatricula = require("./buscarpormatricula")
const buscarporcurso = require("./buscarporcurso")
const buscarpordataAluguel = require("./buscarpordataAluguel")
const buscarporidLivro = require("./buscarporidLivro")
const buscarporidEstudante= require("./buscarporidEstudante")
const { livro, estudantes, aluguel } = require('./data');
app.use(express.json()); 

app.get('/',(req, res) => {
    res.send("servidor ok")
}) 

app.post('/livro', criarLivros)
app.get('/livro', listarLivros)
app.put('/livro/:id', atualizarLivros)
apsp.delete('/livro:id', excluirLivros)
app.post('/aluno',adicionarAluno)
app.get('/aluno',listarAluno)
app.put('/aluno/:id', atualizarAluno)
app.delete('/aluno/:id', deletarAluno)
app.post('/aluguel',aluguelLivro)
app.get('/aluguel',ListarAluguel)
app.put('/aluguel/:id', autualizarAluguel)
app.delete('/aluguel/:id', DeletarAluguel)
app.get('/livros/autor',buscarporautor)// deu certo
app.get('/livros/titluo',buscarportitulo)// deu certo
app.get('/livros/ano',buscarporano) // deu certo
app.get('/livros/genero',buscarporgenero) // deu certo
app.get('/estudantes/nome',buscarpornome) // deu certo
app.get('/estudantes/matricula',buscarpormatricula)// deu certo
app.get('/estudantes/curso',buscarporcurso) // deu certo
app.get('/aluguel/dataAluguel',buscarpordataAluguel)// deu certo
app.get('/aluguel/idLivro',buscarporidLivro)// deu certo
app.get('/aluguel/idEstudante',buscarporidEstudante)// deu certo
app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})