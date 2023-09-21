const notasModule = require('./Q4.js');

const notasDaTurma = [7.5, 8.0, 6.5, 9.0, 7.0];

const mediaTurma = notasModule.media(notasDaTurma);
const menorNota = notasModule.menor(notasDaTurma);
const maiorNota = notasModule.maior(notasDaTurma);

console.log(`Média da turma: ${mediaTurma}`);
console.log(`Menor nota: ${menorNota}`);
console.log(`Maior nota: ${maiorNota}`);
