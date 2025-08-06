function calcularRenovable() {
  const consumo = parseFloat(document.getElementById('consumo').value);
  if (isNaN(consumo) || consumo <= 0) {
    document.getElementById('resultado').innerText = "Ingresa un valor válido.";
    return;
  }
  const porcentajeRenovable = 35;
  const renovable = consumo * (porcentajeRenovable / 100);
  document.getElementById('resultado').innerText =
    `Aproximadamente ${renovable.toFixed(2)} kWh de tu consumo podrían venir de fuentes renovables (${porcentajeRenovable}%).`;
}