const VOWELS_SET = "aeiou";

function tallyVowels(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i).toLowerCase();
    if (VOWELS_SET.includes(char)) {
      count++;
      console.debug(`Vocal encontrada en posición ${i}: '${char}'`);
    }
  }
  return count;
}

function onVowelsSubmit(e) {
  e.preventDefault();
  const inputEl = document.getElementById("campo-palabra");
  const word = inputEl.value;

  if (word.trim() === "") {
    mostrarResultado("Error: escribe una palabra primero.");
    return;
  }

  const vowelCount = tallyVowels(word);

  console.log("==== Conteo de vocales ====");
  console.log("Palabra:", word);
  console.log("Longitud:", word.length, "caracteres");
  console.log("Vocales encontradas:", vowelCount);

  mostrarResultado(
    `Palabra: ${word}\n` +
    `Longitud: ${word.length} caracteres\n` +
    `VOCALES: ${vowelCount}`
  );
}

document.getElementById("form-vocales").addEventListener("submit", onVowelsSubmit);

document.getElementById("btn-ejemplo").addEventListener("click", () => {
  const inputEl = document.getElementById("campo-palabra");
  inputEl.value = "Desarrollo";
  onVowelsSubmit(new Event("submit"));
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-palabra").value = "";
  limpiarConsola();
  mostrarResultado('Escribe una palabra y pulsa "Contar vocales".');
});
