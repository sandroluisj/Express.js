
let livro = [
    {id: 1, titulo: "Os Miseráveis", autor:"Victor Hugo", ano: 1862, genero:"Romance"},
    {id: 2, titulo: "Orgulho e Preconceito", autor:"Jane Austen", ano: 1813, genero:"Romance"},
    {id: 3, titulo: "Memórias Póstumas de Brás Cubas", autor:"Machado de Assis", ano: 1881, genero:"Romance"},
    {id: 4, titulo: "O Pequeno Príncipe", autor:"Antoine de Saint-Exupéry", ano: 1943, genero:"Fábula"}
    
]

let estudante = [
    {id: 1, nome: "João Felipe", matricula: "2024002", curso: "Sistemas da Informação", ano: 2024},
    {id: 2, nome: "Maria Eloisa", matricula: "2023001", curso: "Desing Gráfico", ano: 2023},
    {id: 3, nome: "Rafael Santos", matricula: "2022006", curso: "Medicina", ano: 2022},
    {id: 4, nome: "Vanessa Costa", matricula: "2021005", curso: "Química", ano: 2021}

]

let aluguel= [
    {id: 1, idLivro: 2, idEstudante: 4, dataAluguel: "2024-10-05", dataDevolucao: "2024-10-25"},
    {id: 2, idLivro: 4, idEstudante: 1, dataAluguel: "2024-10-04", dataDevolucao: "2024-10-22"},
    {id: 3, idLivro: 2, idEstudante: 2, dataAluguel: "2024-09-06", dataDevolucao: "2024-09-30"},
    {id: 4, idLivro: 1, idEstudante: 3, dataAluguel: "2024-11-08", dataDevolucao: "2024-11-26"},
    
]

module.exports = {livro, estudante, aluguel}
