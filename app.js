let numeroLimite = 100;
let listaNumeroSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.0});

}
function mostrarTexto(){

    exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secret');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');

}

mostrarTexto();


function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        
        let mensagemTentativa = `Parabéns, voce acerto o numero secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativa);
        
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(chute > numeroSecreto){

        exibirTextoNaTela('p', 'O numero secreto é menor');
    }else{

        exibirTextoNaTela('p', 'O numero secreto é maior');
        tentativas++;
        
    }
    limparTexto();
        

}


function gerarNumeroAleatorio(){

    
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeDeElementosNaLista = (listaNumeroSorteados.length);

    if(quantidadeDeElementosNaLista == numeroLimite){

        listaNumeroSorteados = [];
        
    }

    if(listaNumeroSorteados.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();

    }else{

        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
        
    }
    
}

function limparTexto(){

    chute = document.querySelector('input');
    chute.value = '';    

}

function reiniciarJogo(){

    numeroSecreto= gerarNumeroAleatorio();
    limparTexto();
    tentativas = 1;
    mostrarTexto();
    document.getElementById('reiniciar').setAttribute('disabled', true);


}
