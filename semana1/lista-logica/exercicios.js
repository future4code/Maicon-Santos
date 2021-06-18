// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura:"))
  const largura = Number(prompt("Digite a largura"))
  const area= altura * largura
  console.log (area)
  return area
}
// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Digite o ano atual:')
  const anoNascimento = prompt('Digite o ano em que nasceu:')
  const resultado = anoAtual-anoNascimento
  console.log (resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso /(altura * altura)
  console.log = (imc)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome:')
  const idade = prompt('Digite sua idade:')
  const email = prompt('Digite seu email:')
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const cor1 = prompt('Digite sua primeira cor favorita')
const cor2 = prompt('Digite sua segunda cor favorita')
const cor3 = prompt('Digite sua terceira cor favorita')
const coresFavoritas = [cor1, cor2 ,cor3]
 console.log (coresFavoritas)
}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const palavra = string
  const maiuscula = palavra.toUpperCase()
  return(maiuscula)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressos = custo/valorIngresso
  return ingressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const strings = (string1.length === string2.length)
  return (strings)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array [0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const 

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const troca= array[0]
  array[0] = array[array.length-1]
  array[array.length -1]=troca
  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const abacaxi = string1.toUpperCase()
  const aBacaXi2 = string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const condicao1=ano % 400 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}