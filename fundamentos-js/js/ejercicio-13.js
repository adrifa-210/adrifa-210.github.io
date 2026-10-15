function getWordCount(sentence) {
  const words = sentence.split(" ").filter((w) => w !== "");
  return words.length;
}

function handleSentenceCount(e) {
  e.preventDefault();
  const textareaEl = document.getElementById("campo-frase");
  const sentence = textareaEl.value;

  if (sentence.trim() === "") {
    console.warn("Aviso: no se ha escrito ninguna frase.");
    mostrarResultado("Error: escribe una frase para contar sus palabras.");
    return;
  }

  const tokenList = sentence.trim().split(" ").filter((w) => w !== "");
  const totalWords = getWordCount(sentence);

  console.log("==== Contar palabras ====");
  console.log("Frase:", sentence);
  console.log("split(' '):", tokenList);
  console.log("Número de palabras:", totalWords);

  mostrarResultado(
    `Frase: "${sentence}"\n` +
    `Palabras: [${tokenList.join(" | ")}]\n` +
    `--------------------------------\n` +
    `TOTAL DE PALABRAS: ${totalWords}`
  );
}

document.getElementById("form-frase").addEventListener("submit", handleSentenceCount);

document.getElementById("btn-ejemplo").addEventListener("click", () => {
  document.getElementById("campo-frase").value = "Aprender  JavaScript  paso a paso";
  handleSentenceCount(new Event("submit"));
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-frase").value = "";
  limpiarConsola();
  mostrarResultado('Escribe una frase y pulsa "Contar palabras".');
});
