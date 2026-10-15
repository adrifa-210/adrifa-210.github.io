function parseNumbersFromInput() {
  const inputEl = document.getElementById("campo-array");
  const parsed = inputEl.value
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .map((item) => Number(item));

  if (parsed.length === 0 || parsed.some((n) => Number.isNaN(n))) {
    console.error('Error: introduce números separados por comas. Ej: "5, 3, 9"');
    mostrarResultado('Error: valor incorrecto. Ejemplo: "5, 3, 9, 1, 100"');
    return [];
  }
  return parsed;
}

const sortNumbersAscending = (list) => list.sort((a, b) => a - b);
const sortNumbersDescending = (list) => list.sort((a, b) => b - a);

function runAscendingSort() {
  const numbers = parseNumbersFromInput();
  if (numbers.length === 0) return;

  const originalCopy = [...numbers];
  const stringSortCopy = [...numbers].sort();
  const numericSortCopy = sortNumbersAscending([...numbers]);

  console.log("==== Ordenar array ====");
  console.log("Original          :", originalCopy);
  console.log("sort() por defecto:", stringSortCopy, "(¡orden lexicográfico!)");
  console.log("sort() con a - b  :", numericSortCopy, "(orden numérico)");

  mostrarResultado(
    `Original          : [${originalCopy.join(", ")}]\n` +
    `sort() por defecto: [${stringSortCopy.join(", ")}]  <- ordena como texto\n` +
    `sort() con (a-b)  : [${numericSortCopy.join(", ")}]  <- orden numérico`
  );
}

function runDescendingSort() {
  const numbers = parseNumbersFromInput();
  if (numbers.length === 0) return;

  const descendingList = sortNumbersDescending([...numbers]);

  console.log("Orden descendente (b - a):", descendingList);

  mostrarResultado(
    `Original            : [${numbers.join(", ")}]\n` +
    `Mayor a menor (b-a) : [${descendingList.join(", ")}]`
  );
}

document.getElementById("btn-ordenar").addEventListener("click", runAscendingSort);
document.getElementById("btn-invertir-orden").addEventListener("click", runDescendingSort);
document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-array").value = "";
  limpiarConsola();
  mostrarResultado("Introduce números separados por comas.");
});
