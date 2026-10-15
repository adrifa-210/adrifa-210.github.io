const toFahrenheit = (degC) => (degC * 9) / 5 + 32;

function handleTempConversion(e) {
  e.preventDefault();
  const inputEl = document.getElementById("campo-celsius");
  const celsiusVal = Number(inputEl.value);

  if (Number.isNaN(celsiusVal)) {
    console.error("Debes indicar una temperatura válida en grados Celsius.");
    mostrarResultado("Error: introduce un número de grados Celsius.");
    return;
  }

  const fahrenheitVal = toFahrenheit(celsiusVal);
  const formattedResult = fahrenheitVal.toFixed(2);

  console.log("==== Celsius -> Fahrenheit ====");
  console.log("Celsius:", celsiusVal);
  console.log(`Fórmula: (${celsiusVal} * 9/5) + 32`);
  console.log("Resultado:", fahrenheitVal, "°F");

  mostrarResultado(
    `Celsius   : ${celsiusVal} °C\n` +
    `Fórmula  : (${celsiusVal} * 9/5) + 32\n` +
    "--------------------------------\n" +
    `FAHRENHEIT: ${formattedResult} °F`
  );
}

document.getElementById("form-temperatura").addEventListener("submit", handleTempConversion);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-celsius").value = "";
  limpiarConsola();
  mostrarResultado("Introduce grados Celsius y pulsa el botón.");
});
