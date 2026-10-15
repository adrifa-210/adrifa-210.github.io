const userRecord = {
  nombre: "David",
  apellidos: "Ruiz Santana",
  edad: 23,
  notaMedia: 8.4,
  aprobado: true,
  foto: null,
  telefonoMovil: undefined,
  notas: [8, 9, 7.5, 6, 10],
  direccion: {
    calle: "Gran Vía 45",
    ciudad: "Granada",
    cp: 18001
  },
  presentarse() {
    return `Soy ${this.nombre} ${this.apellidos}, tengo ${this.edad} años.`;
  }
};

function logUserProfile() {
  console.log("==== console.log(objeto persona) ====");
  console.log("Objeto completo:", userRecord);

  for (const key in userRecord) {
    const val = userRecord[key];
    console.log(key, "=>", val, "| tipo:", typeof val);
  }

  console.log("Array 'notas':", userRecord.notas, "| tipo:", typeof userRecord.notas, "| isArray:", Array.isArray(userRecord.notas));
  console.log("Objeto 'direccion':", userRecord.direccion, "| tipo:", typeof userRecord.direccion);
  console.log("Dirección completa:", userRecord.direccion.calle, "-", userRecord.direccion.ciudad, "-", userRecord.direccion.cp);
  console.info("Método presentarse():", userRecord.presentarse());

  mostrarResultado(
    "console.log -> objeto persona mostrado completo y propiedad a propiedad.\n" +
    "Tipos usados: string, number, boolean, null, undefined, array (notas) y objeto (direccion)."
  );
}

function tableUserProfile() {
  console.table(userRecord);
  console.table(userRecord.notas);

  const summaryRows = Object.entries(userRecord).map(([propKey, propVal]) => ({
    propiedad: propKey,
    tipo: typeof propVal,
    valor: typeof propVal === "object" && propVal !== null ? JSON.stringify(propVal) : String(propVal)
  }));

  console.table(summaryRows);

  mostrarResultado(
    "console.table -> 3 tablas generadas (objeto, array notas y resumen de propiedades).\n" +
    "Mira la consola del navegador (F12) para verlas dibujadas."
  );
}

function mountUserData() {
  const nameHeader = document.getElementById("nombre-persona");
  if (nameHeader) {
    nameHeader.textContent = `${userRecord.nombre} ${userRecord.apellidos} (${userRecord.edad} años)`;
  }

  const mailLink = document.getElementById("enlace-correo");
  if (mailLink) {
    mailLink.href = `mailto:ejemplo@correo.com?subject=Contacto%20con%20${encodeURIComponent(userRecord.nombre)}`;
  }
}

document.getElementById("btn-log").addEventListener("click", logUserProfile);
document.getElementById("btn-table").addEventListener("click", tableUserProfile);
document.getElementById("btn-limpiar").addEventListener("click", limpiarConsola);

mountUserData();
logUserProfile();
