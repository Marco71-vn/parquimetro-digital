class Parquimetro {
  constructor() {
    this.valorMinimo = 1.0;
    this.valorPadrao = 1.75;
    this.valorPremium = 3.0;
  }

  calcularTempo(valorInserido) {
    if (valorInserido < this.valorMinimo) {
      return "Valor insuficiente!";
    } else if (valorInserido < this.valorPadrao) {
      let troco = valorInserido - this.valorMinimo;
      return `Tempo: 30 min. Troco: R$ ${troco.toFixed(2)}`;
    } else if (valorInserido < this.valorPremium) {
      let troco = valorInserido - this.valorPadrao;
      return `Tempo: 60min. Troco: R$ ${troco.toFixed(2)}`;
    } else {
      let troco = valorInserido - this.valorPremium;
      return `Tempo: 120min Troco: R$ ${troco.toFixed(2)}`;
    }
  }
}

const minhaMaquina = new Parquimetro();

document.getElementById("brnCalcular").addEventListener("click", () => {
  const input = document.getElementById("valor");
  const valorDigitado = parseFloat(input.value);

  if (isNaN(valorDigitado)) {
    document.getElementById("msgTempo").innerText =
      "Por favor, digite um valor.";
    document.getElementById("msgTroco").innerText = "Troco: --";
    return;
  }

  const resultado = minhaMaquina.calcularTempo(valorDigitado);

  document.getElementById("msgTempo").innerText = resultado;
  document.getElementById("msgTroco").innerText = "Obrigado!";
});
