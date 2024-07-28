const prompt = require("prompt-sync")();
const {criar, listar, atualizar, remover,mostrarMaioridade, alunos} = require('./crud.js');

while(true) {
    console.log(`O que vc gostaria de fazer hoje?
1 - Cadastar um novo aluno
2 - Listar os alunos cadastrados
3 - Atualizar um cadastro
4 - Remover um cadastro
5 - Mostrar maioridade dos alunos
0 - Sair`);
    const opcao = prompt();

    switch(opcao) {
        case "1":
            criar();            
            break;
        case "2":
            listar();
            break;
        case "3":
            listar();
            atualizar();
            break;
        case "4":
            listar();
            remover();
            break;
        case "5":
            mostrarMaioridade();
            break;
        case "0":
            console.log("Ok, até mais!");
            return;
        default:
            break;
        
    }

}
