const arrayInput = document.getElementById("arrayInput");
const btnBuscar = document.getElementById("btnBuscar");
const btnAleatorio = document.getElementById("btnAleatorio");
const resultado = document.getElementById("resultado");

function encontrarMaximo(arr) {
    return Math.max(...arr);
}

function procesar() {
    const numeros = arrayInput.value.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));

    if (numeros.length === 0) {
        resultado.innerHTML = "<p style='color: #dc2626;'>Introduce al menos un número válido.</p>";
        return;
    }

    const maximo = encontrarMaximo(numeros);

    console.log("Array:", numeros);
    console.log("Número mayor:", maximo);

    resultado.innerHTML = `
        <p><strong>Array de entrada:</strong> [${numeros.join(", ")}]</p>
        <p><strong>Total de elementos:</strong> ${numeros.length}</p>
        <p><strong>Número más grande (Math.max(...arr)):</strong> <strong style="font-size: 1.3rem; color: #2563eb;">${maximo}</strong></p>
    `;
}

function generarAleatorios() {
    const aleatorios = Array.from({ length: 8 }, () => Math.floor(Math.random() * 200) + 1);
    arrayInput.value = aleatorios.join(", ");
    procesar();
}

btnBuscar.addEventListener("click", procesar);
btnAleatorio.addEventListener("click", generarAleatorios);
window.addEventListener("DOMContentLoaded", procesar);