const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado
}

function encriptar(stringEncriptada){
  let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i=0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada;
}


function btnDesencriptar() {
  const textoDesencriptado = desencriptar(inputTexto.value)
  mensagem.value = textoDesencriptado
}

function desencriptar(stringDesencriptado){
  let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i=1; i < matrizCodigo.length; i++){
    if(stringDesencriptado.includes(matrizCodigo[i][1])){
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptado;
}