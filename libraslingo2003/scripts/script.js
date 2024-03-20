function cadastro(){
    document.location = "telaCadastro.html";
}
function login(){
    document.location = "telaLogin.html";
}
function voltar(){
    document.location = "principal.html";
}
function jogar(){
    document.location = "telaJogo.html";
}
function irAoQuiz(){
    document.location = "quiz.html";
}
function irAoJM(){
    alert("indisponivel no momento");
}
function irAsExpressoes(){
    alert("indisponivel no momento");
}
document.addEventListener('DOMContentLoaded', function (){
    const corFundoInput = document.getElementById('corFundo');
    const tamanhoFonteInput = document.getElementById('tamanhoFonte');
    const resetButton = document.getElementById('resetButton');
    
    function resetSettings() {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.fontSize = '16px';
        corFundoInput.value = '#ffffff';
        tamanhoFonteInput.value = '16';
    }
    document.addEventListener("input", function(){
        document.body.style.backgroundColor = corFundoInput.value;
        document.body.style.margin = tamanhoFonteInput.value + 'px';});
    resetButton.addEventListener("click", function(){
        resetSettings();
    })    
    });
