const numeroInput = document.getElementById("numeroInput");
const btnComprobar = document.getElementById("btnComprobar");
const resultado = document.getElementById("resultado");

function comprobarNumero() {
    const valor = numeroInput.value.trim();

    if (valor === "") {
        resultado.innerHTML = "<p style='color: #dc2626;'>Escribe un número en el campo de texto.</p>";
        return;
    }

    const numero = Number(valor);

    if (isNaN(numero)) {
        resultado.innerHTML = "<p style='color: #dc2626;'>El valor introducido no es válido.</p>";
        return;
    }

    const esPar = (numero % 2 === 0);
    const textoResultado = esPar ? "PAR" : "IMPAR";
    const claseBadge = esPar ? "badge-par" : "badge-impar";

    console.log(`Número desde input: ${numero} -> ${textoResultado}`);

    resultado.innerHTML = `
        <p><strong>Número capturado del input:</strong> ${numero}</p>
        <p><strong>Resultado:</strong> <span class="badge ${claseBadge}">El número es ${textoResultado}</span></p>
        <p style="font-size: 0.85rem; color: #64748b; margin-top: 8px;">Cálculo: ${numero} % 2 = ${numero % 2}</p>
    `;
}

btnComprobar.addEventListener("click", comprobarNumero);
numeroInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        comprobarNumero();
    }
});