import "./style.css";

// Estado actual del turno
let turnoActual: number = 0;

// Elementos del DOM
const turnoElemento = document.getElementById('turno') as HTMLHeadingElement;
const btnAnterior = document.getElementById('anterior') as HTMLButtonElement;
const btnSiguiente = document.getElementById('siguiente') as HTMLButtonElement;
const btnReset = document.getElementById('reset') as HTMLButtonElement;
const inputTurno = document.getElementById('input-turno') as HTMLInputElement;
const btnCambiar = document.getElementById('cambiar') as HTMLButtonElement;

/**
 * Formatea el número de turno a 2 dígitos
 */
function formatearTurno(turno: number): string {
  return turno.toString().padStart(2, '0');
}

/**
 * Muestra el turno formateado en pantalla
 */
function actualizarDisplay(): void {
  turnoElemento.textContent = formatearTurno(turnoActual);
}

// Acciones de los botones
btnSiguiente.addEventListener('click', () => {
  turnoActual++;
  actualizarDisplay();
});

btnAnterior.addEventListener('click', () => {
  if (turnoActual > 0) {
    turnoActual--;
    actualizarDisplay();
  }
});

btnReset.addEventListener('click', () => {
  turnoActual = 0;
  actualizarDisplay();
});

btnCambiar.addEventListener('click', () => {
  const valor = parseInt(inputTurno.value);

  if (!isNaN(valor) && valor >= 0) {
    turnoActual = valor;
    actualizarDisplay();
  } else {
    alert('Introduce un número válido');
  }
});

// Mostrar turno inicial
actualizarDisplay();

