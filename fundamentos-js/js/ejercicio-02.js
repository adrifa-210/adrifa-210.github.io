const TOTAL_ITEMS = 100;
let randomDataset = [];

function createRandomArray() {
  randomDataset = Array.from({ length: TOTAL_ITEMS }, () => Math.floor(Math.random() * 100));
  console.log(`Array generado con ${randomDataset.length} elementos.`);
  mostrarResultado(
    `Array generado: 100 números aleatorios entre 0 y 99.\n` +
    `Primeros 10 valores: ${randomDataset.slice(0, 10).join(", ")}`
  );
}

function printDatasetTable() {
  if (randomDataset.length === 0) {
    console.error("Primero pulsa 'Generar 100 números'.");
    mostrarResultado("Error: primero genera el array.");
    return;
  }
  console.table(randomDataset);
  mostrarResultado(
    `console.table() ejecutado con 100 filas (ver consola F12).\n` +
    `Mínimo: ${Math.min(...randomDataset)} | Máximo: ${Math.max(...randomDataset)}`
  );
}

function populateHTMLTable(subset) {
  limpiarTablaResultado();
  const tableBody = document.querySelector("#tabla-resultado tbody");
  if (!tableBody) return;

  subset.forEach((item) => {
    const row = document.createElement("tr");
    const posCell = document.createElement("td");
    const valCell = document.createElement("td");

    posCell.textContent = randomDataset.indexOf(item);
    valCell.textContent = item;

    row.append(posCell, valCell);
    tableBody.appendChild(row);
  });
}

function filterValuesInRange() {
  const minInput = document.getElementById("valor-min");
  const maxInput = document.getElementById("valor-max");

  let lower = Number(minInput.value);
  let upper = Number(maxInput.value);

  if (Number.isNaN(lower) || Number.isNaN(upper)) {
    console.error("Debes indicar un mínimo y un máximo numéricos.");
    mostrarResultado("Error: introduce dos números válidos en los campos.");
    return;
  }

  if (lower > upper) {
    [lower, upper] = [upper, lower];
    console.info("Aviso: se han intercambiado mínimo y máximo.");
  }

  if (randomDataset.length === 0) {
    mostrarResultado("Error: primero genera el array con el botón correspondiente.");
    return;
  }

  const matches = randomDataset.filter((num) => num >= lower && num <= upper);

  console.log(`Valores dentro del rango [${lower}, ${upper}]:`);
  console.table(matches);

  mostrarResultado(
    `Filtrado de valores entre ${lower} y ${upper}:\n` +
    `Coincidencias: ${matches.length} de ${randomDataset.length}\n` +
    `Valores: ${matches.length ? matches.join(", ") : "(ninguno)"}`
  );

  populateHTMLTable(matches);
}

document.getElementById("btn-generar").addEventListener("click", createRandomArray);
document.getElementById("btn-tabla").addEventListener("click", printDatasetTable);
document.getElementById("btn-filtrar").addEventListener("click", filterValuesInRange);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  limpiarConsola();
  limpiarTablaResultado();
  mostrarResultado("Salida limpiada. Pulsa 'Generar 100 números'.");
});

createRandomArray();
printDatasetTable();
