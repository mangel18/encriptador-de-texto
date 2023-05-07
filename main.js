const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnEncriptar = document.querySelector(".bn-encriptar");
const btnDesencriptar = document.querySelector(".bn-desencriptar");
const btnCopiar = document.querySelector(".bn-copiar");

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

function copiarMensaje() {
  mensaje.select();
  document.execCommand("copy");
}

btnEncriptar.addEventListener("click", function () {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
});

btnDesencriptar.addEventListener("click", function () {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
});

btnCopiar.addEventListener("click", function () {
  copiarMensaje();
});
