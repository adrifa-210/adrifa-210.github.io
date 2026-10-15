const minRangoInput = document.getElementById("minRango");
const maxRangoInput = document.getElementById("maxRango");
const btnGenerar = document.getElementById("btnGenerar");
const btnFiltrar = document.getElementById("btnFiltrar");
const resultado = document.getElementById("resultado");

let numeros = [];

function generarArray() {
    numeros = [];
    for (let i = 0; i < 100; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log("Array de 100 números al azar:");
    console.table(numeros);
    aplicarFiltro();
}

function aplicarFiltro() {
    const min = Number(minRangoInput.value);
    const max = Number(maxRangoInput.value);

    if (min > max) {
        resultado.innerHTML = "<p style='color: #dc2626;'>El valor mínimo no puede ser mayor que el máximo.</p>";
        return;
    }

    const filtrados = numeros.filter(num => num >= min && num <= max);

    console.log(`Valores filtrados en el rango [${min}, ${max}]:`);
    console.table(filtrados);

    resultado.innerHTML = `
        <p><strong>Total de números generados:</strong> ${numeros.length}</p>
        <p><strong>Rango seleccionado:</strong> [${min}, ${max}]</p>
        <p><strong>Cantidad de números que cumplen el filtro:</strong> <strong style="color: #2563eb;">${filtrados.length}</strong></p>
        <h4 style="margin-top: 12px; margin-bottom: 6px;">Números filtrados en el rango:</h4>
        <div class="grid-pills">
            ${filtrados.length > 0 ? filtrados.map(n => `<span class="pill pill-destacado">${n}</span>`).join("") : "<span>Ningún número en este rango</span>"}
        </div>
        <h4 style="margin-top: 16px; margin-bottom: 6px;">Array completo original (100 elementos):</h4>
        <div class="grid-pills">
            ${numeros.map(n => `<span class="pill">${n}</span>`).join("")}
        </div>
    `;
}

btnGenerar.addEventListener("click", generarArray);
btnFiltrar.addEventListener("click", aplicarFiltro);
window.addEventListener("DOMContentLoaded", generarArray);