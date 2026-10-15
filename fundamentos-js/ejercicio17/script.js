const arrayInput = document.getElementById("arrayInput");
const btnOrdenar = document.getElementById("btnOrdenar");
const btnAleatorio = document.getElementById("btnAleatorio");
const resultado = document.getElementById("resultado");

function ordenarNumeros(arr) {
    return [...arr].sort((a, b) => a - b);
}

function procesar() {
    const numeros = arrayInput.value.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));

    if (numeros.length === 0) {
        resultado.innerHTML = "<p style='color: #dc2626;'>Introduce números válidos.</p>";
        return;
    }

    const ordenados = ordenarNumeros(numeros);

    console.log("Array original:", numeros);
    console.log("Array ordenado:", ordenados);

    resultado.innerHTML = `
        <p><strong>Array original:</strong> [${numeros.join(", ")}]</p>
        <p><strong>Array ordenado (a - b):</strong> <strong style="color: #2563eb;">[${ordenados.join(", ")}]</strong></p>
        <div class="grid-pills">
            ${ordenados.map(n => `<span class="pill pill-destacado">${n}</span>`).join("")}
        </div>
    `;
}

function generarAleatorios() {
    const aleatorios = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100) + 1);
    arrayInput.value = aleatorios.join(", ");
    procesar();
}

btnOrdenar.addEventListener("click", procesar);
btnAleatorio.addEventListener("click", generarAleatorios);
window.addEventListener("DOMContentLoaded", procesar);