let alunos = [];
let alunosNota10 = [];
document.getElementById("btnCadastrarAluno").addEventListener("click", cadastrarAlunos);
document.getElementById("btnfiltrarMedia").addEventListener("click", filtrarMedia);
document.getElementById("btnfiltrarCinco").addEventListener("click", filtrarCinco);

function cadastrarAlunos(){
    let nome = document.getElementById("nome").value;
    let notaUm = Number(document.getElementById("notaUm").value)
    let notaDois = Number(document.getElementById("notaDois").value)
    let restultadoDasituacao = document.getElementById("restultadoDasituacao");
    let media = (notaUm + notaDois) / 2;

    if (nome === "" || notaUm === "" || notaDois === "") {
        alert("Preencha os requisitos");
        return;
    }
    if (media <=7 ){
        restultadoDasituacao = "reprovado";
    } else{
        restultadoDasituacao = "aprovado";
    }
    let aluno = {
        nome: nome,
        notaUm: notaUm,
        notaDois: notaDois,
        media: media,
       restultadoDasituacao : restultadoDasituacao
    };
        alunos.push(aluno);
        limparCampos()
        exibirAlunos(alunos);
    
    if (aluno.media === 10){
    alunosNota10.push(aluno);
    }
}
function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("notaUm").value = "";
    document.getElementById("notaDois").value = "";
}
function exibirAlunos(lista) {
    let texto = lista.map(f => `${f.nome} -Primeira Nota: ${f.notaUm} || Segunda Nota: ${f.notaDois} || Média: ${f.media} || Situação: ${f.restultadoDasituacao}`).join("<br>");
    document.getElementById("saida").innerHTML = texto;
}
function exibirMelhoresAlunos(lista) {
    let texto = lista.map(f => `${f.nome} -Primeira Nota: ${f.notaUm} || Segunda Nota: ${f.notaDois} || Média: ${f.media} || Situação: ${f.restultadoDasituacao}`).join("<br>");
    document.getElementById("alunos10").innerHTML = texto;
} 

function filtrarMedia() {
    let resultado = alunos.filter(f => f.media >= 7);
    exibirAlunos(resultado);
    }
    

function filtrarCinco(){
    if(alunosNota10.length > 5){
        alert("limite máximo");
    }else{
      exibirMelhoresAlunos(alunosNota10); 
    }
    

}

