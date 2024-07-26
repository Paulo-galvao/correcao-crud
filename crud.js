const prompt = require("prompt-sync")();
const thisYear = new Date().getFullYear();

const alunos = [{
    'nomeAluno': "Edson",
    'dataNascimento': 1988,
    'curso': "dev",
    'periodo': "noite",
    },
    {
    'nomeAluno': "Aluno 1",
    'dataNascimento': 2010,
    'curso': "dev",
    'periodo': "noite",
    }];

const modelo = () => {
    const nomeAluno = prompt("Nome do aluno: ");
    const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");

    if (
        nomeAluno !== "" && 
        curso !== "" &&
        periodo !== "" && 
        !isNaN(dataNascimento) &&
        dataNascimento <= thisYear
    ) {
        return {
        nomeAluno,
        dataNascimento,
        curso,
        periodo,
        };
    } else {
        console.log("Dados inválidos");
        return undefined;
    }
};

const criar = () => {
    let aluno = modelo();
    if (aluno !== undefined) {
        alunos.push(aluno);
        console.log("Aluno cadastrado com sucesso");
    }
};

const listar = () => {
    if (alunos.length === 0) {
        console.log("Nenhum aluno encontrado ");
        return false;
    } else {
        console.log("Lista de alunos atualizada:");
        alunos.forEach((aluno, indice) => {
            console.log(`${indice + 1}. Nome do Aluno: ${aluno.nomeAluno } 
Ano de Nascimento: ${aluno.dataNascimento }
Curso: ${aluno.curso}
Período: ${aluno.periodo}
-------------------------`);
        });        
        return true;
    }
};

const remover = () => {
    const indice = parseInt(prompt("Qual indice você deseja remover? "), 10) - 1;
    if(indice < alunos.length && indice > 0) {
        alunos.splice(indice, 1);
        console.log("Aluno removido com sucesso");
    } else {
        console.log("Índice não encontrado!");
    }
};

const atualizar = () => {
    const indice = parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;
    if(indice < alunos.length && indice > 0) {
        let aluno = modelo();
    
        if (aluno !== undefined) {
            alunos[indice] = aluno;
            console.log("Aluno atualizado com sucesso");
            
        } else {
            console.log("Falha na atualização");
        }

    } else {
        console.log("índice não encontrado!");
    }
};

const mostrarMaioridade = () => {
    const alunosMaiores = [];
    const alunosMenores = [];
    alunos.forEach(aluno => {
        if(thisYear - aluno.dataNascimento >= 18) {
            alunosMaiores.push(aluno);
        } else {
            alunosMenores.push(aluno);
        }
    })

    console.log("Lista de alunos maiores de idade:");
    alunosMaiores.forEach(aluno => console.log(aluno.nomeAluno))
    console.log("Lista de alunos menores de idade:");
    alunosMenores.forEach(aluno => console.log(aluno.nomeAluno))
}

module.exports = {
    criar,
    listar,
    atualizar,
    remover,
    mostrarMaioridade,
    alunos
};