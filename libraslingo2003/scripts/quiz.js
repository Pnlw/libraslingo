const matrizImagens = ["imagens/A.jpg", "imagens/B.jpg","imagens/C.jpg","imagens/D.jpg","imagens/E.jpg","imagens/F.jpg", "imagens/G.jpg","imagens/H.jpg","imagens/I.jpg","imagens/J.jpg","imagens/K.jpg", "imagens/L.jpg","imagens/M.jpg","imagens/N.jpg","imagens/O.jpg","imagens/P.jpg", "imagens/Q.jpg","imagens/R.jpg","imagens/S.jpg","imagens/T.jpg","imagens/U.jpg", "imagens/V.jpg","imagens/W.jpg","imagens/X.jpg","imagens/Y.jpg", "imagens/Z.jpg"];
const opcoes = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const mensagem = document.getElementById("mensagem");
const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");
const opcao3 = document.getElementById("opcao3");
const opcao4 = document.getElementById("opcao4");
var acertos = 0;
var erros = 0;
var respostaCorreta;
var i = 0;

exibirQuestao();

function exibirQuestao(){
    i =  Math.floor(Math.random() * 26);
    document.getElementById("imagem").innerHTML = "<img src="+ matrizImagens[i] + ">";
    
    if(matrizImagens[i] == "imagens/A.jpg"){
        respostaCorreta = 'A';
    }
    if(matrizImagens[i] == "imagens/B.jpg"){
        respostaCorreta = 'B';
    }
    if(matrizImagens[i] == "imagens/C.jpg"){
        respostaCorreta = 'C';
    }
    if(matrizImagens[i] == "imagens/D.jpg"){
        respostaCorreta = 'D';
    }
    if(matrizImagens[i] == "imagens/E.jpg"){
        respostaCorreta = 'E';
    }
    if(matrizImagens[i] == "imagens/F.jpg"){
        respostaCorreta = 'F';
    }
    if(matrizImagens[i] == "imagens/G.jpg"){
        respostaCorreta = 'G';
    }
    if(matrizImagens[i] == "imagens/H.jpg"){
        respostaCorreta = 'H';
    }
    if(matrizImagens[i] == "imagens/I.jpg"){
        respostaCorreta = 'I';
    }
    if(matrizImagens[i] == "imagens/J.jpg"){
        respostaCorreta = 'J';
    }
    if(matrizImagens[i] == "imagens/K.jpg"){
        respostaCorreta = 'K';
    }
    if(matrizImagens[i] == "imagens/L.jpg"){
        respostaCorreta = 'L';
    }
    if(matrizImagens[i] == "imagens/M.jpg"){
        respostaCorreta = 'M';
    }
    if(matrizImagens[i] == "imagens/N.jpg"){
        respostaCorreta = 'N';
    }
    if(matrizImagens[i] == "imagens/O.jpg"){
        respostaCorreta = 'O';
    }
    if(matrizImagens[i] == "imagens/P.jpg"){
        respostaCorreta = 'P';
    }
    if(matrizImagens[i] == "imagens/Q.jpg"){
        respostaCorreta = 'Q';
    }
    if(matrizImagens[i] == "imagens/R.jpg"){
        respostaCorreta = 'R';
    }
    if(matrizImagens[i] == "imagens/S.jpg"){
        respostaCorreta = 'S';
    }
    if(matrizImagens[i] == "imagens/T.jpg"){
        respostaCorreta = 'T';
    }
    if(matrizImagens[i] == "imagens/U.jpg"){
        respostaCorreta = 'U';
    }
    if(matrizImagens[i] == "imagens/V.jpg"){
        respostaCorreta = 'V';
    }
    if(matrizImagens[i] == "imagens/W.jpg"){
        respostaCorreta = 'W';
    }
    if(matrizImagens[i] == "imagens/X.jpg"){
        respostaCorreta = 'X';
    }
    if(matrizImagens[i] == "imagens/Y.jpg"){
        respostaCorreta = 'Y';
    }
    if(matrizImagens[i] == "imagens/Z.jpg"){
        respostaCorreta = 'Z';
    }
    exibirOpcoes(respostaCorreta);
}
function exibirOpcoes(respostaCorreta){
        let x = Math.floor(Math.random() * 26);
        let y = Math.floor(Math.random() * 26);
        let z = Math.floor(Math.random() * 26);
        let w = Math.floor(Math.random() * 26);
    
        let matrizA = [opcoes[x], opcoes[y], opcoes[z], opcoes[w]];
        i =  Math.floor(Math.random() * 4);
        matrizA[i] = respostaCorreta;
        opcao1.innerText = matrizA[0];
        opcao2.innerText = matrizA[1];
        opcao3.innerText = matrizA[2];
        opcao4.innerText = matrizA[3];
        setTimeout(function(){
            mensagem.textContent = '';
        }, 2000);        
}

opcao1.addEventListener("click", function(){
    if(opcao1.innerText == respostaCorreta){
        acertos += 1; 
        mensagem.innerText = "Acertou!";
        document.getElementById("acertos").innerText = acertos.toString();
        exibirQuestao();

    }else{
        erros += 1;
        mensagem.innerText = "Errou! Tente novamente";
        document.getElementById("erros").innerText = erros.toString();
    }      
});
opcao2.addEventListener("click", function(){
    if(opcao2.innerText == respostaCorreta){
        acertos += 1;
        mensagem.innerText = "Acertou!";
        document.getElementById("acertos").innerText = acertos.toString();
        exibirQuestao();
    }else{
        erros += 1;
        mensagem.innerText = "Errou! Tente novamente";
        document.getElementById("erros").innerText = erros.toString();
    }   
});
opcao3.addEventListener("click", function(){
    if(opcao3.innerText == respostaCorreta){
        acertos += 1;
        mensagem.innerText = "Acertou!";
        document.getElementById("acertos").innerText = acertos.toString();
        exibirQuestao();
    }else{
        erros += 1;
        mensagem.innerText = "Errou! Tente novamente";
        document.getElementById("erros").innerText = erros.toString();
    }      
});
opcao4.addEventListener("click", function(){
    if(opcao4.innerText == respostaCorreta){
        acertos += 1;
        mensagem.innerText = "Acertou!";
        document.getElementById("acertos").innerText = acertos.toString();
        exibirQuestao();
    }else{
        erros += 1;
        mensagem.innerText = "Errou! Tente novamente";
        document.getElementById("erros").innerText = erros.toString();
    }      
});

opcao1.addEventListener("dblclick", function(){
    if(opcao1.innerText == respostaCorreta){
        mensagem.innerText = "Acertou!";
        document.getElementById("acertos").innerText = acertos.toString();
    }else{
        mensagem.innerText = "Errou! Tente novamente";
        document.getElementById("erros").innerText = erros.toString();
    }
});
opcao2.addEventListener("dblclick", function(){
    if(opcao2.innerText == respostaCorreta){
        mensagem.innerText = "Acertou!";
        document.getElementById("acertos").innerText = acertos.toString();
    }else{
        mensagem.innerText = "Errou! Tente novamente";
        document.getElementById("erros").innerText = erros.toString();
    }
});
opcao3.addEventListener("dblclick", function(){
    if(opcao3.innerText == respostaCorreta){
        mensagem.innerText = "Acertou!";
        document.getElementById("acertos").innerText = acertos.toString();
    }else{
        mensagem.innerText = "Errou! Tente novamente";
        document.getElementById("erros").innerText = erros.toString();
    }
});
opcao4.addEventListener("dblclick", function(){
    if(opcao4.innerText == respostaCorreta){
        mensagem.innerText = "Acertou!";
        document.getElementById("acertos").innerText = acertos.toString();
    }else{
        mensagem.innerText = "Errou! Tente novamente";
        document.getElementById("erros").innerText = erros.toString();
    }
});
document.addEventListener("click", function(){
    if(acertos >= 10){
        document.location = "vitoria.html";
    }
    if(erros >= 10){
        document.location = "derrota.html";
    }
});