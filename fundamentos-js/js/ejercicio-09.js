function reverseStringSteps(text) {
  const characters = text.split("");
  characters.reverse();
  return characters.join("");
}

const reverseInline = (text) => text.split("").reverse().join("");

function handleReverseSubmit(e) {
  e.preventDefault();
  const inputEl = document.getElementById("campo-texto");
  const originalStr = inputEl.value;

  if (originalStr.trim() === "") {
    mostrarResultado("Error: escribe una cadena de texto primero.");
    return;
  }

  const reversedStr = reverseStringSteps(originalStr);

  console.log("==== Revertir cadena ====");
  console.log("Original :", originalStr);
  console.log("split(''):", originalStr.split(""));
  console.log("reverse():", originalStr.split("").reverse());
  console.log("join('') :", reversedStr);
  console.log("Versión en una línea:", reverseInline(originalStr));

  mostrarResultado(
    `Original:  ${originalStr}\n` +
    `Invertida: ${reversedStr}\n` +
    `--------------------------------\n` +
    `split("") + reverse() + join("") = "${reversedStr}"`
  );
}

document.getElementById("form-invertir").addEventListener("submit", handleReverseSubmit);

document.getElementById("btn-ejemplo").addEventListener("click", () => {
  document.getElementById("campo-texto").value = "JavaScript";
  handleReverseSubmit(new Event("submit"));
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-texto").value = "";
  limpiarConsola();
  mostrarResultado('Escribe una cadena y pulsa "Invertir cadena".');
});
