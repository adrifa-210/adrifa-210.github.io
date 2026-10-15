function formatUpperAndLower(str) {
  const upper = str.toUpperCase();
  const lower = str.toLowerCase();

  console.log("==== Mayúsculas y minúsculas ====");
  console.log("Original   :", str, "| longitud:", str.length);
  console.log("Mayúsculas :", upper);
  console.log("Minúsculas :", lower);

  return (
    `Original   : ${str}\n` +
    `Mayúsculas : ${upper}\n` +
    `Minúsculas : ${lower}\n` +
    "--------------------------------\n" +
    "toUpperCase() y toLowerCase() devuelven copias: el original no cambia."
  );
}

function swapCharacterCase(str) {
  return str
    .split("")
    .map((ch) => (ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()))
    .join("");
}

function handleCaseConversion(e) {
  e.preventDefault();
  const inputEl = document.getElementById("campo-texto");
  const rawText = inputEl.value;

  if (rawText.trim() === "") {
    mostrarResultado("Error: escribe una cadena de texto primero.");
    return;
  }

  mostrarResultado(formatUpperAndLower(rawText));
}

document.getElementById("form-texto").addEventListener("submit", handleCaseConversion);

document.getElementById("btn-invertir-mayus").addEventListener("click", () => {
  const inputEl = document.getElementById("campo-texto");
  inputEl.value = swapCharacterCase(inputEl.value);

  console.log("Cadena alternada:", inputEl.value);
  mostrarResultado(`Cadena alternada:\n${inputEl.value}`);
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-texto").value = "";
  limpiarConsola();
  mostrarResultado('Escribe una cadena de texto y pulsa "Convertir".');
});
