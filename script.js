const textarea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

function validarTexto() {
    let textoEscrito = document.querySelector(".textarea");
    let validador = textoEscrito.match(/^[a-z]*$/);
    if (!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar() {
    if (!validarTexto()) {
        const textoEncriptado = encriptar(textarea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textarea.value = "";
        copia.style.display = "block";
    }

}

function encriptar(stringEncriptada) {
    let arrayLetras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < arrayLetras.length; i++) {
        if (stringEncriptada.includes(arrayLetras[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(arrayLetras[i][0], arrayLetras[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textarea.value);
    mensaje.value = textoDesencriptado;
    textarea.value = "";
}

function desencriptar(stringDesencriptada) {
    let arrayLetras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < arrayLetras.length; i++) {
        if (stringDesencriptada.includes(arrayLetras[i][1])) {
            stringDesencriptada = stringDesencriptada.remove(arrayLetras[i][1], arrayLetras[i][0]);
        }
    } return stringDesencriptada;
}

function btnCopiar() {
    mensaje.select();
    mensaje.setSelectionRange(0,99999);
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto Copiado");
}