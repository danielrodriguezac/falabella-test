// Limpie un poco los console.log y codigo no necesario :)

const matrix = [
  [2,5,7],
  [3,4,5],
  [4,1,3]
];

const resultArray = []
for (let i = 0 ; i < matrix.length - 1 ; i++) {
  const iterationResult = matrix[i][i] + matrix[i][i + 1] + matrix[i +1][i] + matrix[i + 1][i + 1]
  resultArray.push(iterationResult)
}
for (let i = 0 ; i < matrix.length - 1 ; i++) {
  matrix[i].reverse()
}
for (let i = 0 ; i < matrix.length - 1 ; i++) {
  const iterationResult = matrix[i][i] + matrix[i][i + 1] + matrix[i +1][i] + matrix[i + 1][i + 1]
  resultArray.push(iterationResult)
}

console.log(resultArray.sort((a, b)=> b - a)[0])
