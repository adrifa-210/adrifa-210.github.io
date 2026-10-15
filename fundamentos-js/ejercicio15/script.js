const limiteInput = document.getElementById("limiteInput");
const btnBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function obtenerPrimosEnRango(maximo) {
    const primos = [];
    for (let i = 1; i <= maximo; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

function procesar() {
    const limite = Number(limiteInput.value);

    if (isNaN(limite) || limite < 1) {
        resultado.innerHTML = "<p style='color: #dc2626;'>Introduce un número entero mayor o igual a 1.</p>";
        return;
    }

    const primos = obtenerPrimosEnRango(limite);

    console.log(`Primos entre 1 y ${limite}:`, primos);

    resultado.innerHTML = `
        <p><strong>Rango evaluado:</strong> 1 hasta ${limite}</p>
        <p><strong>Total de números primos encontrados:</strong> <strong style="color: #2563eb;">${primos.length}</strong></p>
        <h4 style="margin-top: 12px; margin-bottom: 6px;">Listado de números primos:</h4>
        <div class="grid-pills">
            ${primos.map(p => `<span class="pill pill-destacado">${p}</span>`).join("")}
        </div>
    `;
}

btnBuscar.addEventListener("click", procesar);
window.addEventListener("DOMContentLoaded", procesar);