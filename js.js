const fechaObjetivo = new Date("September 22, 2025 19:00:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>🎉 ¡Es tu cumple! 🎂</h2>";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias.toString().padStart(2, '0');
  document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');
}

setInterval(actualizarContador, 1000);
actualizarContador();
