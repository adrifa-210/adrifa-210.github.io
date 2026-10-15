const _realConsole = {
  log: console.log,
  info: console.info,
  error: console.error,
  debug: console.debug,
  table: console.table
};

const stringifyArg = (val) => {
  if (typeof val === "string") return val;
  try {
    return JSON.stringify(val);
  } catch {
    return String(val);
  }
};

const appendOutput = (cls, content) => {
  const container = document.getElementById("consola");
  if (!container) return;

  const row = document.createElement("span");
  row.className = `log-entry ${cls}`;
  row.textContent = content;
  container.appendChild(row);
  container.scrollTop = container.scrollHeight;
};

const hookConsoleMethod = (method, styleClass) => {
  const baseFn = _realConsole[method];
  console[method] = (...args) => {
    baseFn.apply(console, args);
    const lineText = args.map(stringifyArg).join(" ");
    appendOutput(styleClass, lineText);
  };
};

hookConsoleMethod("log", "log-default");
hookConsoleMethod("info", "log-info");
hookConsoleMethod("error", "log-error");
hookConsoleMethod("debug", "log-debug");

console.table = (data) => {
  _realConsole.table(data);

  if (Array.isArray(data)) {
    appendOutput("log-table", "┌─ tabla (array) ─");
    data.forEach((item, idx) => {
      const rendered = typeof item === "object" && item !== null ? stringifyArg(item) : String(item);
      appendOutput("log-table", `│ [${idx}] ${rendered}`);
    });
    appendOutput("log-table", "└──────────────────");
  } else if (typeof data === "object" && data !== null) {
    appendOutput("log-table", "┌─ tabla (objeto) ─");
    Object.keys(data).forEach((key) => {
      const rendered = typeof data[key] === "object" && data[key] !== null ? stringifyArg(data[key]) : String(data[key]);
      appendOutput("log-table", `│ ${key}: ${rendered}`);
    });
    appendOutput("log-table", "└──────────────────");
  } else {
    appendOutput("log-table", `tabla: ${stringifyArg(data)}`);
  }
};

function limpiarConsola() {
  const logDiv = document.getElementById("consola");
  const resDiv = document.getElementById("resultado");
  if (logDiv) logDiv.innerHTML = "";
  if (resDiv) resDiv.innerHTML = "";
}

function mostrarResultado(text) {
  const resDiv = document.getElementById("resultado");
  if (resDiv) resDiv.textContent = text;
}

function agregarFilaTabla(rowContent) {
  const table = document.getElementById("tabla-resultado");
  if (!table) return;
  const tbody = table.querySelector("tbody");
  if (!tbody) return;
  const tr = document.createElement("tr");
  const values = Array.isArray(rowContent) ? rowContent : Object.values(rowContent);
  values.forEach((v) => {
    const td = document.createElement("td");
    td.textContent = typeof v === "object" && v !== null ? stringifyArg(v) : String(v);
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
}

function limpiarTablaResultado() {
  const table = document.getElementById("tabla-resultado");
  if (!table) return;
  const tbody = table.querySelector("tbody");
  if (tbody) tbody.innerHTML = "";
}
