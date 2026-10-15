const btnGenerar = document.getElementById("btnGenerar");
const resultado = document.getElementById("resultado");

function generarYContar() {
    const numeros = [];
    const frecuencias = {};

    for (let i = 1; i <= 20; i++) {
        frecuencias[i] = 0;
    }

    for (let i = 0; i < 100; i++) {
        const num = Math.floor(Math.random() * 20) + 1;
        numeros.push(num);
        frecuencias[num]++;
    }

    const aparecieron = Object.keys(frecuencias).filter(n => frecuencias[n] >= 1);

    console.log("100 números generados:", numeros);
    console.table(frecuencias);
    console.log("Cantidad de números que aparecieron al menos una vez:", aparecieron.length);

    let filas = "";
    for (let i = 1; i <= 20; i++) {
        const cant = frecuencias[i];
        filas += `
            <tr>
                <td><strong>${i}</strong></td>
                <td>${cant}</td>
                <td>${cant >= 1 ? '<span class="badge badge-par">Sí (al menos una vez)</span>' : '<span class="badge badge-impar">No apareció</span>'}</td>
            </tr>
        `;
    }

    resultado.innerHTML = `
        <p><strong>Números generados:</strong> 100 enteros aleatorios entre 1 y 20.</p>
        <p><strong>Total de números del 1 al 20 que han aparecido al menos una vez:</strong> <strong style="font-size: 1.2rem; color: #2563eb;">${aparecieron.length} de 20</strong></p>
        <table class="tabla-datos">
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Veces que apareció</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                ${filas}
            </tbody>
        </table>
        <h4 style="margin-top: 16px; margin-bottom: 6px;">Muestra de los 100 números generados:</h4>
        <div class="grid-pills">
            ${numeros.map(n => `<span class="pill">${n}</span>`).join("")}
        </div>
    `;
}

btnGenerar.addEventListener("click", generarYContar);
window.addEventListener("DOMContentLoaded", generarYContar);