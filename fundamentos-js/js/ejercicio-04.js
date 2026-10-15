function promptAndCalculateSum() {
  const inputA = prompt("Introduce el PRIMER número:");
  if (inputA === null) {
    console.warn("Has cancelado la introducción del primer número.");
    mostrarResultado("Operación cancelada por el usuario.");
    return;
  }

  const inputB = prompt("Introduce el SEGUNDO número:");
  if (inputB === null) {
    console.warn("Has cancelado la introducción del segundo número.");
    mostrarResultado("Operación cancelada por el usuario.");
    return;
  }

  const parsedA = Number(inputA);
  const parsedB = Number(inputB);

  if (Number.isNaN(parsedA) || Number.isNaN(parsedB)) {
    console.error(`ERROR: uno de los valores no es un número. Valores recibidos: "${inputA}", "${inputB}"`);
    mostrarResultado(`Error: "${inputA}" o "${inputB}" no es un número válido.`);
    return;
  }

  const total = parsedA + parsedB;

  console.log("==== Suma con prompt() ====");
  console.log("Valor 1 (texto):", inputA, "-> convertido:", parsedA, "| tipo:", typeof parsedA);
  console.log("Valor 2 (texto):", inputB, "-> convertido:", parsedB, "| tipo:", typeof parsedB);
  console.log("Suma:", parsedA, "+", parsedB, "=", total);

  mostrarResultado(
    `Primer número:  ${inputA}\n` +
    `Segundo número: ${inputB}\n` +
    `--------------------------------\n` +
    `SUMA = ${total}`
  );
}

document.getElementById("btn-pedir").addEventListener("click", promptAndCalculateSum);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  limpiarConsola();
  mostrarResultado("Salida limpiada. Pulsa el botón para empezar.");
});
