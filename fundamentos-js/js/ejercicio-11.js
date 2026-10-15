const GENERATION_TOTAL = 100;
const RANGE_START = 1;
const RANGE_END = 20;
let generatedNumbers = [];

function createNumberSet() {
  generatedNumbers = Array.from(
    { length: GENERATION_TOTAL },
    () => Math.floor(Math.random() * RANGE_END) + RANGE_START
  );
  console.log(`Generados ${generatedNumbers.length} números entre ${RANGE_START} y ${RANGE_END}.`);
}

function calculateFrequencies() {
  const counts = {};
  for (let n = RANGE_START; n <= RANGE_END; n++) {
    counts[n] = 0;
  }
  generatedNumbers.forEach((val) => {
    counts[val] = (counts[val] || 0) + 1;
  });
  return counts;
}

function countUniqueAppearances(freqs) {
  return Object.values(freqs).filter((count) => count > 0).length;
}

function renderFrequencyTable(freqs) {
  limpiarTablaResultado();
  const tableBody = document.querySelector("#tabla-resultado tbody");
  if (!tableBody) return;

  for (let n = RANGE_START; n <= RANGE_END; n++) {
    const row = document.createElement("tr");

    const numCell = document.createElement("td");
    numCell.textContent = n;

    const countCell = document.createElement("td");
    countCell.textContent = freqs[n];

    const statusCell = document.createElement("td");
    statusCell.textContent = freqs[n] >= 1 ? "Sí" : "No";

    row.append(numCell, countCell, statusCell);
    tableBody.appendChild(row);
  }
}

function executeAnalysis() {
  createNumberSet();
  const freqMap = calculateFrequencies();
  const distinctCount = countUniqueAppearances(freqMap);

  console.log("Tirada de 100 números:", generatedNumbers);
  console.table(freqMap);
  console.log(`Números que han aparecido al menos una vez: ${distinctCount} de ${RANGE_END - RANGE_START + 1}`);

  mostrarResultado(
    "Números distintos que han aparecido al menos una vez:\n" +
    `${distinctCount} de ${RANGE_END - RANGE_START + 1}\n` +
    "--------------------------------\n" +
    `Ejemplo de tirada (10 primeros): ${generatedNumbers.slice(0, 10).join(", ")}`
  );

  renderFrequencyTable(freqMap);
}

document.getElementById("btn-generar").addEventListener("click", executeAnalysis);
document.getElementById("btn-tabla").addEventListener("click", () => {
  if (generatedNumbers.length === 0) {
    console.error("Primero genera los números.");
    return;
  }
  console.table(generatedNumbers);
  mostrarResultado("console.table() ejecutado con los 100 números (mira F12).");
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
  limpiarConsola();
  limpiarTablaResultado();
  mostrarResultado('Pulsa "Generar 100 números" para comenzar.');
});

executeAnalysis();
