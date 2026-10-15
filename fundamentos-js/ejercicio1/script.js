const btnEjecutar = document.getElementById("btnEjecutar");
const resultado = document.getElementById("resultado");

function ejecutarEjercicio() {
    const texto = "Desarrollo Web en Entorno Cliente";
    const entero = 42;
    const decimal = 3.14159;
    const booleano = true;
    let indefinida;
    const nulo = null;
    const simbolo = Symbol("idUnico");
    const granEntero = 9007199254740991n;
    const lenguajes = ["JavaScript", "TypeScript", "HTML", "CSS"];
    const modulo = { nombre: "DWECL", curso: "DAW2", horas: 6 };

    console.log("=== console.log ===");
    console.log("String:", texto, "| Tipo:", typeof texto);
    console.log("Number (entero):", entero, "| Tipo:", typeof entero);
    console.log("Number (decimal):", decimal, "| Tipo:", typeof decimal);
    console.log("Boolean:", booleano, "| Tipo:", typeof booleano);
    console.log("Array:", lenguajes, "| Tipo:", typeof lenguajes);

    console.info("=== console.info ===");
    console.info("Objeto:", modulo, "| Tipo:", typeof modulo);
    console.info("BigInt:", granEntero, "| Tipo:", typeof granEntero);

    console.debug("=== console.debug ===");
    console.debug("Symbol:", simbolo, "| Tipo:", typeof simbolo);
    console.debug("Undefined:", indefinida, "| Tipo:", typeof indefinida);

    console.error("=== console.error ===");
    console.error("Null:", nulo, "| Tipo (typeof devuelve object):", typeof nulo);

    resultado.innerHTML = `
        <p>Se han mostrado los datos en la consola mediante <code>console.log</code>, <code>console.info</code>, <code>console.debug</code> y <code>console.error</code>.</p>
        <table class="tabla-datos">
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Valor</th>
                    <th>Tipo (typeof)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>texto</td><td>"${texto}"</td><td>${typeof texto}</td></tr>
                <tr><td>entero</td><td>${entero}</td><td>${typeof entero}</td></tr>
                <tr><td>decimal</td><td>${decimal}</td><td>${typeof decimal}</td></tr>
                <tr><td>booleano</td><td>${booleano}</td><td>${typeof booleano}</td></tr>
                <tr><td>indefinida</td><td>undefined</td><td>${typeof indefinida}</td></tr>
                <tr><td>nulo</td><td>null</td><td>${typeof nulo}</td></tr>
                <tr><td>simbolo</td><td>${simbolo.toString()}</td><td>${typeof simbolo}</td></tr>
                <tr><td>granEntero</td><td>${granEntero.toString()}n</td><td>${typeof granEntero}</td></tr>
                <tr><td>lenguajes</td><td>[${lenguajes.join(", ")}]</td><td>${typeof lenguajes} (Array)</td></tr>
                <tr><td>modulo</td><td>${JSON.stringify(modulo)}</td><td>${typeof modulo}</td></tr>
            </tbody>
        </table>
    `;
}

btnEjecutar.addEventListener("click", ejecutarEjercicio);
window.addEventListener("DOMContentLoaded", ejecutarEjercicio);