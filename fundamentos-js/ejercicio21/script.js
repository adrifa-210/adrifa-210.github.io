const arrayInput = document.getElementById("arrayInput");
const valorCorteInput = document.getElementById("valorCorte");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnAleatorio = document.getElementById("btnAleatorio");
const resultado = document.getElementById("resultado");

function filtrarMayores(arr, valor) {
    return arr.filter(num => num > valor);
}

function procesar() {
    const numeros = arrayInput.value.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
    const valorCorte = Number(valorCorteInput.value);

    if (numeros.length === 0 || isNaN(valorCorte)) {
        resultado.innerHTML = "<p style='color: #dc2626;'>Introduce un array válido y un valor umbral numérico.</p>";
        return;
    }

    const mayores = filtrarMayores(numeros, valorCorte);

    console.log("Array original:", numeros);
    console.log(`Números mayores que ${valorCorte}:`, mayores);

    resultado.innerHTML = `
        <p><strong>Array original (${numeros.length} elementos):</strong> [${numeros.join(", ")}]</p>
        <p><strong>Valor umbral:</strong> ${valorCorte}</p>
        <p><strong>Números mayores que ${valorCorte} (${mayores.length} elementos):</strong> <strong style="color: #2563eb;">[${mayores.join(", ")}]</strong></p>
        <div class="grid-pills">
            ${mayores.length > 0 ? mayores.map(n => `<span class="pill pill-destacado">${n}</span>`).join("") : "<span>Ningún número supera el valor umbral</span>"}
        </div>
    `;
}

function generarAleatorios() {
    const aleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    arrayInput.value = aleatorios.join(", ");
    valorCorteInput.value = Math.floor(Math.random() * 60) + 20;
    procesar();
}

btnFiltrar.addEventListener("click", procesar);
btnAleatorio.addEventListener("click", generarAleatorios);
window.addEventListener("DOMContentLoaded", procesar);