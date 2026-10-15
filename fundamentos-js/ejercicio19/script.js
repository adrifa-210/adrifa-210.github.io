const arrayInput = document.getElementById("arrayInput");
const btnPromedio = document.getElementById("btnPromedio");
const btnAleatorio = document.getElementById("btnAleatorio");
const resultado = document.getElementById("resultado");

function calcularPromedio(arr) {
    if (arr.length === 0) return 0;
    const suma = arr.reduce((acumulador, actual) => acumulador + actual, 0);
    return suma / arr.length;
}

function procesar() {
    const numeros = arrayInput.value.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));

    if (numeros.length === 0) {
        resultado.innerHTML = "<p style='color: #dc2626;'>Introduce números válidos.</p>";
        return;
    }

    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    const promedio = calcularPromedio(numeros);

    console.log("Array:", numeros);
    console.log("Suma con reduce:", suma);
    console.log("Promedio:", promedio);

    resultado.innerHTML = `
        <p><strong>Array de números:</strong> [${numeros.join(", ")}]</p>
        <p><strong>Cantidad de elementos:</strong> ${numeros.length}</p>
        <p><strong>Suma acumulada con reduce():</strong> ${suma.toFixed(2)}</p>
        <p><strong>Promedio (media aritmética):</strong> <strong style="font-size: 1.2rem; color: #2563eb;">${promedio.toFixed(2)}</strong></p>
    `;
}

function generarAleatorios() {
    const aleatorios = Array.from({ length: 6 }, () => Number((Math.random() * 6 + 4).toFixed(1)));
    arrayInput.value = aleatorios.join(", ");
    procesar();
}

btnPromedio.addEventListener("click", procesar);
btnAleatorio.addEventListener("click", generarAleatorios);
window.addEventListener("DOMContentLoaded", procesar);