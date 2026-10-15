const btnMostrar = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");

const persona = {
    nombre: "Laura",
    apellidos: "Martínez Sánchez",
    edad: 26,
    activo: true,
    salario: 24500.50,
    contacto: {
        email: "laura.martinez@ejemplo.es",
        telefono: "654987321",
        direccion: {
            calle: "Avenida de la Constitución 12",
            ciudad: "Sevilla",
            codigoPostal: "41001"
        }
    },
    aficiones: ["Fotografía", "Ciclismo", "Desarrollo web"],
    certificaciones: ["HTML5", "CSS3", "JavaScript ES6"],
    fechaAlta: new Date("2023-09-15").toLocaleDateString("es-ES"),
    saludar() {
        return `Hola, mi nombre es ${this.nombre} ${this.apellidos}.`;
    }
};

function mostrarPersona() {
    console.log("Objeto persona mostrado con console.log:");
    console.log(persona);

    console.log("Objeto persona mostrado con console.table:");
    console.table(persona);

    console.log("Datos de contacto mostrados con console.table:");
    console.table(persona.contacto);

    resultado.innerHTML = `
        <p><strong>Saludo del objeto:</strong> ${persona.saludar()}</p>
        <table class="tabla-datos">
            <thead>
                <tr>
                    <th>Propiedad</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>nombre</td><td>${persona.nombre}</td><td>${typeof persona.nombre}</td></tr>
                <tr><td>apellidos</td><td>${persona.apellidos}</td><td>${typeof persona.apellidos}</td></tr>
                <tr><td>edad</td><td>${persona.edad}</td><td>${typeof persona.edad}</td></tr>
                <tr><td>activo</td><td>${persona.activo}</td><td>${typeof persona.activo}</td></tr>
                <tr><td>salario</td><td>${persona.salario} €</td><td>${typeof persona.salario}</td></tr>
                <tr><td>contacto (objeto)</td><td>${JSON.stringify(persona.contacto)}</td><td>${typeof persona.contacto}</td></tr>
                <tr><td>aficiones (array)</td><td>[${persona.aficiones.join(", ")}]</td><td>${typeof persona.aficiones}</td></tr>
                <tr><td>certificaciones (array)</td><td>[${persona.certificaciones.join(", ")}]</td><td>${typeof persona.certificaciones}</td></tr>
                <tr><td>fechaAlta</td><td>${persona.fechaAlta}</td><td>${typeof persona.fechaAlta}</td></tr>
                <tr><td>saludar (función)</td><td>function()</td><td>${typeof persona.saludar}</td></tr>
            </tbody>
        </table>
        <p style="margin-top: 12px; font-size: 0.9rem; color: #475569;">Abre la consola de herramientas de desarrollo (F12) para ver la salida de <code>console.log</code> y <code>console.table</code>.</p>
    `;
}

btnMostrar.addEventListener("click", mostrarPersona);
window.addEventListener("DOMContentLoaded", mostrarPersona);