const texto = document.querySelector(".s1-cuadroTexto");
const mensaje = document.querySelector(".s2-cuadroMensaje");

const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

/*Botón Encriptar*/
function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value)
    mensaje.value = textoEncriptado
    texto.value = "";
    ocultarContenido();
}

function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

/*Botón Desencriptar*/
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(texto.value)
    mensaje.value = textoDesencriptado
    texto.value = "";
    ocultarContenido();
}

function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

/*Ocultar contenido de la seccion2*/
function ocultarContenido(){
    document.getElementById("muneco").style.display = "none"
    document.getElementById("estado").style.display = "none"
    document.getElementById("instruccion").style.display = "none"
}

/*Botón Copiar*/
function btnCopiar (){
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
    mensaje.value = "";
    texto.value = textoCopiado
    document.getElementById("muneco").style.display = "block"
    document.getElementById("estado").style.display = "block"
    document.getElementById("instruccion").style.display = "block"
}


