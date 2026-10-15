const fraseInput = document.getElementById("fraseInput");
const btnBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

function encontrarPalabraMasLarga(frase) {
    const palabras = frase.trim().split(/\s+/);
    let masLarga = "";

    for (let i = 0; i < palabras.length; i++) {
        const limpia = palabras[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        if (limpia.length > masLarga.length) {
            masLarga = limpia;
        }
    }

    return masLarga;
}

function procesar() {
    const frase = fraseInput.value;
    const masLarga = encontrarPalabraMasLarga(frase);

    console.log("Frase:", frase);
    console.log(`Palabra más larga: "${masLarga}" (${masLarga.length} letras)`);

    resultado.innerHTML = `
        <p><strong>Frase introducida:</strong> "${frase}"</p>
        <p><strong>Palabra más larga:</strong> <strong style="font-size: 1.2rem; color: #2563eb;">"${masLarga}"</strong></p>
        <p><strong>Número de caracteres:</strong> ${masLarga.length}</p>
    `;
}

btnBuscar.addEventListener("click", procesar);
window.addEventListener("DOMContentLoaded", procesar);