const isNumberEven = (n) => n % 2 === 0;

function handleFormSubmit(evt) {
  evt.preventDefault();
  const inputEl = document.getElementById("campo-numero");
  const rawText = inputEl.value;

  if (rawText.trim() === "") {
    console.warn("Aviso: el campo está vacío.");
    mostrarResultado("Error: escribe un número en el campo.");
    return;
  }

  const num = Number(rawText);
  if (Number.isNaN(num)) {
    console.error(`ERROR: "${rawText}" no es un número.`);
    mostrarResultado(`"${rawText}" no es un número válido.`);
    return;
  }

  if (isNumberEven(num)) {
    console.log("Número leído del input:", num, "-> PAR");
    mostrarResultado(`${num} ➜ ES PAR\n(leído del campo input con input.value)`);
  } else {
    console.log("Número leído del input:", num, "-> IMPAR");
    mostrarResultado(`${num} ➜ ES IMPAR\n(leído del campo input con input.value)`);
  }

  inputEl.value = "";
}

document.getElementById("form-par-impar").addEventListener("submit", handleFormSubmit);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-numero").value = "";
  limpiarConsola();
  mostrarResultado("Salida limpiada.");
});
