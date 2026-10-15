const btnSumar = document.getElementById("btnSumar");
const resultado = document.getElementById("resultado");

function solicitarNumerosYSumar() {
    const entrada1 = prompt("Introduce el primer número:");
    if (entrada1 === null) {
        resultado.innerHTML = "<p>Operación cancelada en el primer número.</p>";
        return;
    }

    const entrada2 = prompt("Introduce el segundo número:");
    if (entrada2 === null) {
        resultado.innerHTML = "<p>Operación cancelada en el segundo número.</p>";
        return;
    }

    const numero1 = Number(entrada1);
    const numero2 = Number(entrada2);

    if (isNaN(numero1) || isNaN(numero2) || entrada1.trim() === "" || entrada2.trim() === "") {
        console.error("Entrada no numérica:", entrada1, entrada2);
        resultado.innerHTML = "<p style='color: #dc2626;'>Error: Uno o ambos valores no son números válidos.</p>";
        return;
    }

    const suma = numero1 + numero2;

    console.log("Primer número:", numero1);
    console.log("Segundo número:", numero2);
    console.log("Suma calculada:", suma);

    resultado.innerHTML = `
        <p><strong>Primer número:</strong> ${numero1}</p>
        <p><strong>Segundo número:</strong> ${numero2}</p>
        <p><strong>Operación:</strong> ${numero1} + ${numero2} = <strong style="font-size: 1.2rem; color: #2563eb;">${suma}</strong></p>
    `;
}

btnSumar.addEventListener("click", solicitarNumerosYSumar);