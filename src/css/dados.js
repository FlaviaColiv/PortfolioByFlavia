// var anoAtual = new Date()

// var idade = anoAtual.getUTCFullYear() - 1989

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById(minhaIdade).innerText = "<p>Sou Flávia Conceição Oliveira, em julho completo  " + idade + " anos, e sou uma desenvolvedora Full Stack, em formação! </p>"

// });

// return idade


var anoAtual = new Date();
var idade = anoAtual.getUTCFullYear() - 1989;
document.addEventListener("DOMContentLoaded", function() {
    // Espera o DOM ser totalmente carregado antes de executar o script

    // Seleciona um elemento pelo ID e adiciona texto
    document.getElementById("minhaIdade").innerText = "Sou Flávia Conceição Oliveira, em julho completo  " + idade + " anos, e sou uma desenvolvedora Full Stack, em formação!"
;
});





