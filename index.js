function calcularTempoRestante(dataAlvo) {
    // Parse da data inserida para um objeto Date
    const dataAlvoObj = new Date(dataAlvo);
      
    // Data atual
    const dataAtual = new Date();

    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = dataAlvoObj - dataAtual;

    // Calcula os dias restantes
    const diasRestantes = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    // Calcula as horas restantes
    let horasRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Retorna dias e horas restantes
    return { dias: diasRestantes, horas: horasRestantes };
  }

  function exibirTempoRestante() {
    const dataAlvo = document.getElementById('dataAlvo').value;
    const tempoRestante = calcularTempoRestante(dataAlvo);
    document.getElementById('resultado').innerText = `Faltam ${tempoRestante.dias} dias e ${tempoRestante.horas} horas até a sua meta.`;
  }