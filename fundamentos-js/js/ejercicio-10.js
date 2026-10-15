const getMaxViaSpread = (arr) => Math.max(...arr);

function getMaxViaLoop(arr) {
  let highest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  return highest;
}

function evaluateArrayInput() {
  const inputEl = document.getElementById("campo-array");
  const rawList = inputEl.value
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .map((item) => Number(item));

  if (rawList.length === 0 || rawList.some((n) => Number.isNaN(n))) {
    console.error("Error: introduce números separados por comas. Ej: 4, 19, 7");
    mostrarResultado('Error: valor incorrecto. Ejemplo válido: "4, 19, 7, 100, 2"');
    return;
  }

  const maxSpread = getMaxViaSpread(rawList);
  const maxLoop = getMaxViaLoop(rawList);

  console.log("==== Número más grande ====");
  console.log("Array original:", rawList);
  console.log("Math.max(...array):", maxSpread);
  console.log("Versión con bucle :", maxLoop);

  mostrarResultado(
    `Array: [${rawList.join(", ")}]\n` +
    `Máximo (Math.max + ...): ${maxSpread}\n` +
    `Máximo (bucle for)      : ${maxLoop}`
  );
}

function createRandomArraySample() {
  const sample = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
  document.getElementById("campo-array").value = sample.join(", ");
  evaluateArrayInput();
}

document.getElementById("btn-calcula").addEventListener("click", evaluateArrayInput);
document.getElementById("btn-azar").addEventListener("click", createRandomArraySample);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-array").value = "";
  limpiarConsola();
  mostrarResultado("Introduce números separados por comas.");
});
