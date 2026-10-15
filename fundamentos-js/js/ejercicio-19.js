function computeAverageReduce(arr) {
  if (arr.length === 0) return 0;
  const totalSum = arr.reduce((acc, val) => acc + val, 0);
  const avg = totalSum / arr.length;
  return Math.round(avg * 100) / 100;
}

function computeAverageLoop(arr) {
  if (arr.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

function handleAverageAction() {
  const inputEl = document.getElementById("campo-array");
  const parsedNums = inputEl.value
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .map((item) => Number(item));

  if (parsedNums.length === 0 || parsedNums.some((n) => Number.isNaN(n))) {
    console.error('Error: introduce números separados por comas. Ej: "7, 8.5, 9"');
    mostrarResultado('Error: valor incorrecto. Ejemplo: "7, 8.5, 9, 6.5, 10"');
    return;
  }

  const avgReduce = computeAverageReduce(parsedNums);
  const avgLoop = computeAverageLoop(parsedNums);
  const sumVal = parsedNums.reduce((a, v) => a + v, 0);

  console.log("==== Promedio con reduce() ====");
  console.log("Array      :", parsedNums);
  console.log("reduce()   :", sumVal);
  console.log("Longitud   :", parsedNums.length);
  console.log("Promedio   :", avgReduce);
  console.log("Con bucle  :", avgLoop);

  mostrarResultado(
    `Array   : [${parsedNums.join(", ")}]\n` +
    `Suma    : ${sumVal}\n` +
    `Valores : ${parsedNums.length}\n` +
    "--------------------------------\n" +
    `PROMEDIO: ${avgReduce}`
  );
}

function generateRandomScores() {
  const randomGrades = Array.from(
    { length: 5 },
    () => Math.round((Math.random() * 6 + 4) * 10) / 10
  );
  document.getElementById("campo-array").value = randomGrades.join(", ");
  handleAverageAction();
}

document.getElementById("btn-promediar").addEventListener("click", handleAverageAction);
document.getElementById("btn-azar").addEventListener("click", generateRandomScores);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-array").value = "";
  limpiarConsola();
  mostrarResultado("Introduce números separados por comas.");
});
