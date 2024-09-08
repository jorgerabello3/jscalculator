function sum(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function times(x, y) {
  return x * y;
}

function div(x, y) {
  if (y === 0) {
    console.log('Erro: não se pode dividir por zero!');
    return null;
  }
  return x / y;
}

module.exports = {
  sum,
  sub,
  times,
  div,
};
