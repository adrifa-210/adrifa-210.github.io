const checkEven = (val) => val % 2 === 0;

function evaluatePromptNumber() {
  const entered = prompt("Introduce un número entero:");
  if (entered === null) {
    mostrarResultado("Operación cancelada.");
    return;
  }

  const numericVal = Number(entered);
  if (Number.isNaN(numericVal)) {
    console.error(`ERROR: "${entered}" no es un número válido.`);
    mostrarResultado(`"${entered}" no es un número. Inténtalo de nuevo.`);
    return;
  }

  if (checkEven(numericVal)) {
    console.log(`${numericVal} es PAR (porque ${numericVal} % 2 = ${numericVal % 2})`);
    mostrarResultado(`${numericVal} ➜ ES PAR`);
  } else {
    console.log(`${numericVal} es IMPAR (porque ${numericVal} % 2 = ${numericVal % 2})`);
    mostrarResultado(`${numericVal} ➜ ES IMPAR`);
  }
}

document.getElementById("btn-pedir").addEventListener("click", evaluatePromptNumber);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  limpiarConsola();
  mostrarResultado("Salida limpiada. Pulsa el botón para empezar.");
});
