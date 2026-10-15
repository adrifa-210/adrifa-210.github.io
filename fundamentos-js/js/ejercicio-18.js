function locateLongestWord(text) {
  const tokens = text.trim().split(" ").filter((w) => w !== "");
  if (tokens.length === 0) return "(frase vacía)";

  let champion = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    if (tokens[i].length > champion.length) {
      champion = tokens[i];
      console.debug(`Nueva palabra más larga en la posición ${i}: '${champion}'`);
    }
  }
  return champion;
}

function handleLongestWordSearch(e) {
  e.preventDefault();
  const inputEl = document.getElementById("campo-frase");
  const sentence = inputEl.value;

  if (sentence.trim() === "") {
    mostrarResultado("Error: escribe una frase primero.");
    return;
  }

  const tokenList = sentence.trim().split(" ").filter((w) => w !== "");
  const longest = locateLongestWord(sentence);

  console.log("==== Palabra más larga ====");
  console.log("Frase  :", sentence);
  console.log("Palabras:", tokenList);
  console.log("Más larga:", longest, "->", longest.length, "caracteres");

  mostrarResultado(
    `Frase: "${sentence}"\n` +
    `Palabras: [${tokenList.join(" | ")}]\n` +
    "--------------------------------\n" +
    `MÁS LARGA: "${longest}" (${longest.length} caracteres)`
  );
}

document.getElementById("form-frase").addEventListener("submit", handleLongestWordSearch);

document.getElementById("btn-ejemplo").addEventListener("click", () => {
  document.getElementById("campo-frase").value = "El desarrollo de aplicaciones multiplataforma es completo";
  handleLongestWordSearch(new Event("submit"));
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-frase").value = "";
  limpiarConsola();
  mostrarResultado('Escribe una frase y pulsa "Buscar la más larga".');
});
