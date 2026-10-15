const celsiusInput = document.getElementById("celsiusInput");
const btnConvertir = document.getElementById("btnConvertir");
const resultado = document.getElementById("resultado");

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function procesar() {
    const celsius = Number(celsiusInput.value);

    if (isNaN(celsius) || celsiusInput.value.trim() === "") {
        resultado.innerHTML = "<p style='color: #dc2626;'>Introduce un valor numérico válido.</p>";
        return;
    }

    const fahrenheit = celsiusAFahrenheit(celsius);

    console.log(`${celsius} °C = ${fahrenheit} °F`);

    resultado.innerHTML = `
        <p><strong>Temperatura introducida:</strong> ${celsius} °C</p>
        <p><strong>Fórmula:</strong> (${celsius} × 9/5) + 32</p>
        <p><strong>Temperatura en Fahrenheit:</strong> <strong style="font-size: 1.3rem; color: #2563eb;">${fahrenheit.toFixed(2)} °F</strong></p>
    `;
}

btnConvertir.addEventListener("click", procesar);
window.addEventListener("DOMContentLoaded", procesar);