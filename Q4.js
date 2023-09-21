// Módulo notas
module.exports = {
  media: function (notas) {
    if (notas.length === 0) {
      return 0;
    }
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  },

  menor: function (notas) {
    if (notas.length === 0) {
      return null;
    }
    return Math.min(...notas);
  },

  maior: function (notas) {
    if (notas.length === 0) {
      return null; 
    }
    return Math.max(...notas);
  },
};
