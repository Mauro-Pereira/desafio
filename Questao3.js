//const fs = require('fs');

// carrega um json da máquina
//const data = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

const data = {
    "faturamentoMensal": [
      { "dia": 1, "valor": 200.5 },
      { "dia": 2, "valor": 150.0 },
      { "dia": 3, "valor": 0.0 },
      { "dia": 4, "valor": 300.0 },
      { "dia": 5, "valor": 250.0 },
      { "dia": 6, "valor": 0.0 },
      { "dia": 7, "valor": 0.0 },
      { "dia": 8, "valor": 100.0 },
      { "dia": 9, "valor": 500.0 },
      { "dia": 10, "valor": 600.0 },
      { "dia": 11, "valor": 0.0 },
      { "dia": 12, "valor": 0.0 },
      { "dia": 13, "valor": 400.0 },
      { "dia": 14, "valor": 0.0 },
      { "dia": 15, "valor": 300.0 },
      { "dia": 16, "valor": 200.0 },
      { "dia": 17, "valor": 0.0 },
      { "dia": 18, "valor": 350.0 },
      { "dia": 19, "valor": 0.0 },
      { "dia": 20, "valor": 450.0 },
      { "dia": 21, "valor": 0.0 },
      { "dia": 22, "valor": 700.0 },
      { "dia": 23, "valor": 600.0 },
      { "dia": 24, "valor": 0.0 },
      { "dia": 25, "valor": 200.0 },
      { "dia": 26, "valor": 0.0 },
      { "dia": 27, "valor": 0.0 },
      { "dia": 28, "valor": 100.0 },
      { "dia": 29, "valor": 400.0 },
      { "dia": 30, "valor": 0.0 }
    ]
  }
  

let minFaturamento = Number.MAX_VALUE;
let maxFaturamento = Number.MIN_VALUE;
let totalFaturamento = 0;
let diasComFaturamento = 0;


data.faturamentoMensal.forEach(dia => {
    if (dia.valor > 0) {
        if (dia.valor < minFaturamento) minFaturamento = dia.valor;
        if (dia.valor > maxFaturamento) maxFaturamento = dia.valor;
        totalFaturamento += dia.valor;
        diasComFaturamento++;
    }
});


const mediaFaturamento = totalFaturamento / diasComFaturamento;


let diasAcimaDaMedia = 0;
data.faturamentoMensal.forEach(dia => {
    if (dia.valor > mediaFaturamento) {
        diasAcimaDaMedia++;
    }
});

console.log(`Menor valor de faturamento: ${minFaturamento}`);
console.log(`Maior valor de faturamento: ${maxFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
