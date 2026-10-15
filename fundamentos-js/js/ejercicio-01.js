var academicYear = 2026;
let studentName = "Marcos";
const COURSE_CODE = "DWEC";
let userSurname = "Navarro";
let userAge = 21;
let examGrade = 9.25;
let isEnrolled = true;
let avatarImage = null;
let contactAddress;
let scoreList = [6.5, 8, 9.5, 7];
let studentProfile = {
  name: "Marcos",
  age: 21,
  active: true
};

function createGreeting() {
  return `Saludos, ${studentName}`;
}

const printTypeInfo = (val, tag) => {
  console.log(`${tag} =>`, val, "| tipo:", typeof val);
};

const renderScoreList = () => {
  scoreList.forEach((score, idx) => {
    console.log(`notas[${idx}] =`, score, "| tipo:", typeof score);
  });
};

function runConsoleLog() {
  console.log("==== console.log(): variables y tipos ====");
  printTypeInfo(academicYear, "anio (var)");
  printTypeInfo(studentName, "nombre (let)");
  printTypeInfo(COURSE_CODE, "MODULO (const)");
  printTypeInfo(userSurname, "apellido");
  printTypeInfo(userAge, "edad");
  printTypeInfo(examGrade, "nota");
  printTypeInfo(isEnrolled, "aprobado");
  printTypeInfo(avatarImage, "alumnoSinFoto");
  printTypeInfo(contactAddress, "direccion");
  printTypeInfo(scoreList, "notas (array)");
  printTypeInfo(studentProfile, "alumno (objeto)");
  printTypeInfo(createGreeting, "saludar (función)");

  renderScoreList();

  mostrarResultado(
    "console.log -> 12 variables mostradas con typeof.\n" +
    "Tipos vistos: string, number, boolean, object (null, array y objeto) y function."
  );
}

function runConsoleInfo() {
  console.info("==== console.info(): llamando a la función saludar() ====");
  const greetingText = createGreeting();
  console.info("saludar() devuelve:", greetingText, "| tipo:", typeof greetingText);
  mostrarResultado(`console.info -> saludar() devolvió: ${greetingText}`);
}

function runConsoleError() {
  console.error("==== console.error(): ejemplo de dato incorrecto ====");
  const rawString = "ocho";
  const parsedNum = parseInt(rawString, 10);

  if (Number.isNaN(parsedNum)) {
    console.error(`ERROR: "${rawString}" no se puede convertir a número → NaN`);
  }

  mostrarResultado("console.error -> 'ocho' convertida con parseInt() da NaN (error controlado).");
}

function runConsoleDebug() {
  console.debug("==== console.debug(): trazas de depuración ====");
  console.debug("Edad antes de incrementar:", userAge);
  console.debug("Tipo de 'alumnoSinFoto':", typeof avatarImage, "→ ¡ojo, es object!");

  userAge += 1;

  console.debug("Edad después de incrementar:", userAge);
  mostrarResultado(`console.debug -> edad incrementada: 21 -> ${userAge} (mira la consola F12)`);
}

document.getElementById("btn-log").addEventListener("click", runConsoleLog);
document.getElementById("btn-info").addEventListener("click", runConsoleInfo);
document.getElementById("btn-error").addEventListener("click", runConsoleError);
document.getElementById("btn-debug").addEventListener("click", runConsoleDebug);
document.getElementById("btn-limpiar").addEventListener("click", limpiarConsola);

runConsoleLog();
runConsoleInfo();
runConsoleError();
runConsoleDebug();
