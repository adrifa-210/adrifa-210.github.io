const cadenaInput = document.getElementById("cadenaInput");
const btnConvertir = document.getElementById("btnConvertir");
const resultado = document.getElementById("resultado");

function convertirMayusculasMinusculas(cadena) {
    return {
        mayusculas: cadena.toUpperCase(),
        minusculas: cadena.toLowerCase()
    };
}

function procesar() {
    const texto = cadenaInput.value;
    const { mayusculas, minusculas } = convertirMayusculasMinusculas(texto);

    console.log(`Original: "${texto}"`);
    console.log(`Mayúsculas: "${mayusculas}"`);
    console.log(`Minúsculas: "${minusculas}"`);

    resultado.innerHTML = `
        <p><strong>Texto original:</strong> "${texto}"</p>
        <p><strong>En MAYÚSCULAS:</strong> <strong style="color: #2563eb;">"${mayusculas}"</strong></p>
        <p><strong>En minúsculas:</strong> <strong style="color: #059669;">"${minusculas}"</strong></p>
    `;
}

btnConvertir.addEventListener("click", procesar);
window.addEventListener("DOMContentLoaded", procesar);