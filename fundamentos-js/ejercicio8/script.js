const minInput = document.getElementById("minIntervalo");
const maxInput = document.getElementById("maxIntervalo");
const btnGenerar = document.getElementById("btnGenerar");
const resultado = document.getElementById("resultado");

function azar(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

function generar() {
    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    if (isNaN(min) || isNaN(max)) {
        resultado.innerHTML = "<p style='color: #dc2626;'>Introduce valores numéricos válidos.</p>";
        return;
    }

    if (min > max) {
        resultado.innerHTML = "<p style='color: #dc2626;'>El valor mínimo debe ser menor o igual al máximo.</p>";
        return;
    }

    const aleatorio = azar(min, max);

    console.log(`azar(${min}, ${max}) -> ${aleatorio}`);

    resultado.innerHTML = `
        <p><strong>Intervalo:</strong> [${min}, ${max}]</p>
        <p><strong>Llamada:</strong> <code>azar(${min}, ${max})</code></p>
        <p><strong>Resultado obtenido:</strong> <strong style="font-size: 1.3rem; color: #2563eb;">${aleatorio}</strong></p>
    `;
}

btnGenerar.addEventListener("click", generar);
window.addEventListener("DOMContentLoaded", generar);