const pickEvenNumbers = (list) => list.filter((n) => n % 2 === 0);

function pickEvenLoop(list) {
  const evens = [];
  for (const n of list) {
    if (n % 2 === 0) {
      evens.push(n);
    }
  }
  return evens;
}

function filterEvensFromInput() {
  const inputEl = document.getElementById("campo-array");
  const parsedNums = inputEl.value
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .map((item) => Number(item));

  if (parsedNums.length === 0 || parsedNums.some((n) => Number.isNaN(n))) {
    console.error('Error: introduce números separados por comas. Ej: "1, 2, 3"');
    mostrarResultado('Error: valor incorrecto. Ejemplo: "1, 2, 3, 4, 5"');
    return;
  }

  const evensMethod = pickEvenNumbers(parsedNums);
  const evensLoop = pickEvenLoop(parsedNums);

  console.log("==== Filtrar números pares ====");
  console.log("Array original:", parsedNums);
  console.log("Pares (filter):", evensMethod);
  console.log("Pares (bucle) :", evensLoop);

  mostrarResultado(
    `Original: [${parsedNums.join(", ")}]\n` +
    `PARES   : [${evensMethod.join(", ")}]\n` +
    `--------------------------------\n` +
    `filter() ha creado un array nuevo con ${evensMethod.length} de ${parsedNums.length} elementos.`
  );
}

function generateRandomArrayData() {
  const randomList = Array.from({ length: 12 }, () => Math.floor(Math.random() * 50) + 1);
  document.getElementById("campo-array").value = randomList.join(", ");
  filterEvensFromInput();
}

document.getElementById("btn-filtrar").addEventListener("click", filterEvensFromInput);
document.getElementById("btn-azar").addEventListener("click", generateRandomArrayData);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-array").value = "";
  limpiarConsola();
  mostrarResultado("Introduce números separados por comas.");
});
