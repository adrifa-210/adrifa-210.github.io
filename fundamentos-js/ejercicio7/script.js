const palabraInput = document.getElementById("palabraInput");
const btnContar = document.getElementById("btnContar");
const resultado = document.getElementById("resultado");

function contarVocales(palabra) {
    const vocales = "aeiouáéíóúüAEIOUÁÉÍÓÚÜ";
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }
    return contador;
}

function procesar() {
    const texto = palabraInput.value;
    const totalVocales = contarVocales(texto);

    console.log(`Texto: "${texto}" | Total vocales: ${totalVocales}`);

    resultado.innerHTML = `
        <p><strong>Texto evaluado:</strong> "${texto}"</p>
        <p><strong>Total de vocales encontradas:</strong> <strong style="font-size: 1.2rem; color: #2563eb;">${totalVocales}</strong></p>
    `;
}

btnContar.addEventListener("click", procesar);
window.addEventListener("DOMContentLoaded", procesar);