
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (matrix == undefined || matrix.length == 0) ? [] : matrix.map((a, i) => ((i + 1) % 2 == 0) ? a.reverse() : a).reduce((a, b) => a.concat(b));
}
