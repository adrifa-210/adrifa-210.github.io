function getRandomInRange(minVal, maxVal) {
  return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

function produceRandomOutput(quantity) {
  const minInput = document.getElementById("campo-min");
  const maxInput = document.getElementById("campo-max");

  const min = Number(minInput.value);
  const max = Number(maxInput.value);

  if (Number.isNaN(min) || Number.isNaN(max)) {
    console.error("Debes indicar un mínimo y un máximo numéricos.");
    mostrarResultado("Error: introduce dos números válidos.");
    return;
  }

  if (min > max) {
    console.error("El mínimo no puede ser mayor que el máximo.");
    mostrarResultado(`Error: el mínimo (${min}) es mayor que el máximo (${max}).`);
    return;
  }

  if (quantity === 1) {
    const singleVal = getRandomInRange(min, max);
    console.log(`azar(${min}, ${max}) =`, singleVal);
    mostrarResultado(`azar(${min}, ${max}) = ${singleVal}`);
    return;
  }

  const generatedBatch = Array.from({ length: quantity }, () => getRandomInRange(min, max));

  console.log(`20 valores de azar(${min}, ${max}):`, generatedBatch);
  console.table(generatedBatch);

  mostrarResultado(
    `Generados ${quantity} valores con azar(${min}, ${max}):\n` +
    generatedBatch.join(", ")
  );
}

document.getElementById("btn-azar").addEventListener("click", () => produceRandomOutput(1));
document.getElementById("btn-veinte").addEventListener("click", () => produceRandomOutput(20));
document.getElementById("btn-limpiar").addEventListener("click", () => {
  limpiarConsola();
  mostrarResultado("Pulsa un botón para generar valores aleatorios.");
});
