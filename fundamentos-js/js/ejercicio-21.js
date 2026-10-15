const pickGreaterThan = (list, threshold) => list.filter((n) => n > threshold);

function pickGreaterThanLoop(list, threshold) {
  const result = [];
  for (const n of list) {
    if (n > threshold) {
      result.push(n);
    }
  }
  return result;
}

function handleFilterForm(e) {
  e.preventDefault();
  const arrayInput = document.getElementById("campo-array");
  const valueInput = document.getElementById("campo-valor");

  const numbers = arrayInput.value
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .map((item) => Number(item));

  const threshold = Number(valueInput.value);

  if (numbers.length === 0 || numbers.some((n) => Number.isNaN(n)) || Number.isNaN(threshold)) {
    console.error("Error: revisa el array y el valor de comparación.");
    mostrarResultado('Error: usa números separados por comas y un valor numérico. Ej: "3, 8, 1, 20" y 5');
    return;
  }

  const matchesMethod = pickGreaterThan(numbers, threshold);
  const matchesLoop = pickGreaterThanLoop(numbers, threshold);

  console.log(`==== Filtrar mayores que ${threshold} ====`);
  console.log("Array original:", numbers);
  console.log("Valor de referencia:", threshold);
  console.log("Mayores (filter):", matchesMethod);
  console.log("Mayores (bucle) :", matchesLoop);

  mostrarResultado(
    `Original : [${numbers.join(", ")}]\n` +
    `Mayores que ${threshold}\n` +
    "--------------------------------\n" +
    `RESULTADO: [${matchesMethod.join(", ")}]\n` +
    `filter() ha seleccionado ${matchesMethod.length} de ${numbers.length} números.`
  );
}

document.getElementById("form-filtro").addEventListener("submit", handleFilterForm);

document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-array").value = "";
  document.getElementById("campo-valor").value = "";
  limpiarConsola();
  mostrarResultado("Introduce un array y un valor de referencia.");
});
