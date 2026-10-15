const cadenaInput = document.getElementById("cadenaInput");
const btnInvertir = document.getElementById("btnInvertir");
const resultado = document.getElementById("resultado");

function revertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

function procesar() {
    const original = cadenaInput.value;
    const invertida = revertirCadena(original);

    console.log(`Original: "${original}" | Invertida: "${invertida}"`);

    resultado.innerHTML = `
        <p><strong>Cadena original:</strong> "${original}"</p>
        <p><strong>Cadena invertida:</strong> <strong style="font-size: 1.1rem; color: #2563eb;">"${invertida}"</strong></p>
    `;
}

btnInvertir.addEventListener("click", procesar);
window.addEventListener("DOMContentLoaded", procesar);