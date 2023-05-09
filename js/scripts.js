const miTextarea = document.getElementById('miTextarea');
const miParrafo = document.getElementById('outptTextArea');
const miDiv = document.getElementById('miDiv');
const miAside = document.getElementById('aside');
const btnCopy = document.getElementById("copy");

miTextarea.addEventListener('input', function() {
    if (miTextarea.value === '') {
        miDiv.style.display = 'block';
        miParrafo.style.display = "none"
        btnCopy.style.display = "none"
    } 
    validarInput(miTextarea);

});


//DICCIONARIO
const diccionario = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};


function validarInput(entrada) {
    const regex = /[W]|[áéíóúÁÉÍÓÚñÑ¿¡.,«»“”‘’'"´`+*()\-–—/\\=|#@^\[\]{}%$§&~;:<>!?]|[A-Z]/g;
    const cleanedText = miTextarea.value.replace(regex, "");
    miTextarea.value = cleanedText;
}
function encriptar() {
    let textoEncriptado = '';
    
    for (const letra of miTextarea.value.toLowerCase()) {
        if (diccionario[letra]) {
            textoEncriptado += diccionario[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    habilitarDisplays(textoEncriptado)
}


function decrypt() {
    const text = miTextarea.value;
    let encrypted = text;
    for (const key in diccionario) {
        const regex = new RegExp(diccionario[key], "g");
        encrypted = encrypted.replace(regex, key);
    }
    habilitarDisplays(encrypted)
}
function copiarTexto(){
    navigator.clipboard.writeText(miParrafo.textContent);
    alert("Texto copiado al portapapeles");
}
function habilitarDisplays(texto){
    miDiv.style.display = 'none';
    miParrafo.style.display = "block";
    btnCopy.style.display = "block";
    miParrafo.innerHTML = texto;
}
btnCopy.addEventListener("click",copiarTexto)

