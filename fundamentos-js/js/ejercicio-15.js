function testPrime(val) {
  if (val < 2) return false;
  if (val === 2) return true;
  if (val % 2 === 0) return false;

  for (let div = 3; div * div <= val; div += 2) {
    if (val % div === 0) return false;
  }
  return true;
}

function collectPrimesUpTo(maxLimit) {
  const primeList = [];
  for (let current = 2; current <= maxLimit; current++) {
    if (testPrime(current)) {
      primeList.push(current);
    }
  }
  return primeList;
}

function handlePrimeSearch(e) {
  e.preventDefault();
  const inputEl = document.getElementById("campo-limite");
  let threshold = Number(inputEl.value);

  if (Number.isNaN(threshold) || threshold < 1) {
    console.error("Debes indicar un número entero mayor o igual que 1.");
    mostrarResultado("Error: introduce un número mayor o igual que 1.");
    return;
  }

  threshold = Math.trunc(threshold);
  const foundPrimes = collectPrimesUpTo(threshold);

  console.log(`==== Números primos de 1 a ${threshold} ====`);
  console.log("Total encontrados:", foundPrimes.length);
  console.table(foundPrimes);

  mostrarResultado(
    `Números primos entre 1 y ${threshold}:\n` +
    (foundPrimes.length > 0 ? foundPrimes.join(", ") : "(ninguno)") + "\n" +
    "--------------------------------\n" +
    `Total: ${foundPrimes.length} números primos`
  );
}

document.getElementById("form-primos").addEventListener("submit", handlePrimeSearch);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-limite").value = "";
  limpiarConsola();
  mostrarResultado('Introduce un número límite y pulsa "Buscar primos".');
});
