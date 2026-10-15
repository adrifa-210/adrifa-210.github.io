const arrayInput = document.getElementById("arrayInput");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnAleatorio = document.getElementById("btnAleatorio");
const resultado = document.getElementById("resultado");

function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

function procesar() {
    const numeros = arrayInput.value.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));

    if (numeros.length === 0) {
        resultado.innerHTML = "<p style='color: #dc2626;'>Introduce números válidos.</p>";
        return;
    }

    const pares = filtrarPares(numeros);

    console.log("Array original:", numeros);
    console.log("Pares filtrados:", pares);

    resultado.innerHTML = `
        <p><strong>Array original (${numeros.length} elementos):</strong> [${numeros.join(", ")}]</p>
        <p><strong>Total de pares encontrados:</strong> <strong style="color: #2563eb;">${pares.length}</strong></p>
        <h4 style="margin-top: 12px; margin-bottom: 6px;">Números pares:</h4>
        <div class="grid-pills">
            ${pares.length > 0 ? pares.map(p => `<span class="pill pill-destacado">${p}</span>`).join("") : "<span>No se encontraron números pares</span>"}
        </div>
    `;
}

function generarAleatorios() {
    const aleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    arrayInput.value = aleatorios.join(", ");
    procesar();
}

btnFiltrar.addEventListener("click", procesar);
btnAleatorio.addEventListener("click", generarAleatorios);
window.addEventListener("DOMContentLoaded", procesar);