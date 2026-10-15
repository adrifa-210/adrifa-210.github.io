const palabraInput = document.getElementById("palabraInput");
const btnVerificar = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

function esPalindromo(palabra) {
    const original = palabra.toLowerCase().trim();
    const invertida = original.split("").reverse().join("");
    return {
        esValido: original.length > 0 && original === invertida,
        original,
        invertida
    };
}

function procesar() {
    const texto = palabraInput.value;
    const { esValido, original, invertida } = esPalindromo(texto);

    console.log(`Original: "${original}" | Invertida: "${invertida}" | Palíndromo: ${esValido}`);

    const badge = esValido
        ? '<span class="badge badge-par">Es un palíndromo</span>'
        : '<span class="badge badge-impar">No es un palíndromo</span>';

    resultado.innerHTML = `
        <p><strong>Palabra original:</strong> "${texto}"</p>
        <p><strong>Palabra invertida:</strong> "${invertida}"</p>
        <p style="margin-top: 8px;"><strong>Resultado:</strong> ${badge}</p>
    `;
}

btnVerificar.addEventListener("click", procesar);
window.addEventListener("DOMContentLoaded", procesar);