let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSec = gerarNumeroAlea();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

exibirInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
        if(chute == numeroSec){
            exibirTexto('h1', 'Acertou!');
                let palavraTry = tentativas > 1 ? 'tentativas' : 'tentativa';
                let msgTry = `Você descobriu o número secreto com ${tentativas} ${palavraTry}!`;
            exibirTexto('p', msgTry);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if(chute > numeroSec){
            exibirTexto('p', 'O número é menor');
        } else {
            exibirTexto('p', 'O número é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAlea(){
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if (quantidadeDeElementos == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAlea();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados);
        return numeroSorteado;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function retryGame(){
    numeroSec = gerarNumeroAlea();
    limparCampo();
    tentativas = 1;
    exibirInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}