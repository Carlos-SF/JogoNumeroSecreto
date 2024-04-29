let listaDeNumeroSorteado = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let  tentativas  = 1


function exibirTextonaTela(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    
}
function exibirMensagemIniciaL(){
exibirTextonaTela('h1', ' Jogo de acerto e erro')
exibirTextonaTela('p', 'Escolha um número entre 1 e 10 ')
}
exibirMensagemIniciaL()

function verificarChute(){
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto){
        exibirTextonaTela('h1','Acertou !')
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativas'
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}`
        exibirTextonaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto){
            exibirTextonaTela('p', 'O número secreto é menor')
        }else{
            exibirTextonaTela('p','O número secreto é maior')
        }
        tentativas ++
        limparCampo()
    }
}
 
function gerarNumeroAleatorio(){
  let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1)
  let quantidadeDeElementos = listaDeNumeroSorteado.length

  if(quantidadeDeElementos == numeroLimite ){
    listaDeNumeroSorteado = []
  }
  
  if(listaDeNumeroSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio()
  }else{
    listaDeNumeroSorteado.push(numeroEscolhido)
    console.log(listaDeNumeroSorteado);
    return numeroEscolhido
  }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1 
    exibirMensagemIniciaL()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}