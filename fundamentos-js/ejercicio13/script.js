const fraseInput = document.getElementById("fraseInput");
const btnContar = document.getElementById("btnContar");
const resultado = document.getElementById("resultado");

function contarPalabras(frase) {
    const textoLimpio = frase.trim();
    if (textoLimpio === "") return [];
    return textoLimpio.split(/\s+/);
}

function procesar() {
    const frase = fraseInput.value;
    const palabras = contarPalabras(frase);

    console.log("Frase:", frase);
    console.log("Array de palabras:", palabras);
    console.log("Total de palabras:", palabras.length);

    resultado.innerHTML = `
        <p><strong>Total de palabras:</strong> <strong style="font-size: 1.2rem; color: #2563eb;">${palabras.length}</strong></p>
        <h4 style="margin-top: 12px; margin-bottom: 6px;">Listado de palabras:</h4>
        <div class="grid-pills">
            ${palabras.map((p, idx) => `<span class="pill">${idx + 1}. ${p}</span>`).join("")}
        </div>
    `;
}

btnContar.addEventListener("click", procesar);
window.addEventListener("DOMContentLoaded", procesar);