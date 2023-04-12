function sorteio() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);
  
    var numerosSorteados = [];
  
    for (var i = 0; i < quantidade; i++) {
      var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      numerosSorteados.push(numeroSorteado);
    }
  
    var resultado = "Números sorteados: " + numerosSorteados.join(", ");
    document.getElementById("resultado").innerHTML = resultado;
  }
  