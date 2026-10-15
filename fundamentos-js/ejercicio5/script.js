const btnVerificar = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

function verificarParImpar() {
    const entrada = prompt("Introduce un número entero para comprobar si es par o impar:");
    if (entrada === null) {
        resultado.innerHTML = "<p>Operación cancelada por el usuario.</p>";
        return;
    }

    const numero = Number(entrada);

    if (isNaN(numero) || entrada.trim() === "") {
        console.error("Entrada no válida:", entrada);
        resultado.innerHTML = "<p style='color: #dc2626;'>Error: Debes introducir un número válido.</p>";
        return;
    }

    const esPar = (numero % 2 === 0);
    const textoResultado = esPar ? "PAR" : "IMPAR";
    const claseBadge = esPar ? "badge-par" : "badge-impar";

    console.log(`El número ${numero} es ${textoResultado}.`);

    resultado.innerHTML = `
        <p><strong>Número introducido:</strong> ${numero}</p>
        <p><strong>Resultado:</strong> <span class="badge ${claseBadge}">El número es ${textoResultado}</span></p>
        <p style="font-size: 0.85rem; color: #64748b; margin-top: 8px;">Resto de la división entre 2: ${numero % 2}</p>
    `;
}

btnVerificar.addEventListener("click", verificarParImpar);