function reverseWord(str) {
  return str.split("").reverse().join("");
}

function checkPalindrome(str) {
  const sanitized = str.toLowerCase().replace(/[^a-záéíóúñ]/g, "");
  return sanitized === reverseWord(sanitized);
}

function handlePalindromeCheck(e) {
  e.preventDefault();
  const inputEl = document.getElementById("campo-palabra");
  const enteredWord = inputEl.value;

  if (enteredWord.trim() === "") {
    mostrarResultado("Error: escribe una palabra primero.");
    return;
  }

  const cleanText = enteredWord.toLowerCase().replace(/[^a-záéíóúñ]/g, "");
  const invertedText = reverseWord(cleanText);
  const isPal = checkPalindrome(enteredWord);

  console.log("==== Palíndromo ====");
  console.log("Original :", enteredWord);
  console.log("Procesada:", cleanText);
  console.log("Invertida:", invertedText);
  console.log("¿Es palíndromo?", isPal);

  mostrarResultado(
    `Palabra: ${enteredWord}\n` +
    `Procesada: ${cleanText}\n` +
    `Invertida: ${invertedText}\n` +
    "--------------------------------\n" +
    (isPal ? "SI es un palíndromo" : "NO es un palíndromo")
  );
}

const SAMPLE_TERMS = ["reconocer", "radar", "somos", "ordenador", "rotor", "sol", "anilina", "codigo"];

document.getElementById("form-palindromo").addEventListener("submit", handlePalindromeCheck);

document.getElementById("btn-azar").addEventListener("click", () => {
  const chosenWord = SAMPLE_TERMS[Math.floor(Math.random() * SAMPLE_TERMS.length)];
  document.getElementById("campo-palabra").value = chosenWord;
  handlePalindromeCheck(new Event("submit"));
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-palabra").value = "";
  limpiarConsola();
  mostrarResultado('Escribe una palabra y pulsa "Comprobar".');
});
