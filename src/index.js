
// You should implement your task here.

module.exports = 
function towelSort (matrix) {
  if (matrix === undefined || matrix.length==0){
    return [];
  }
//  debugger;
  let result = [];
  // let direction = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2){
        result.push(matrix[i][matrix[i].length-j-1]);
      } else {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
}

// console.log(towelSort([
//   [1, 2],
//   [3, 4],
// ]));
// shood return [ 1, 2, 4, 3 ]

// console.log(towelSort([
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ]));
// shood return [ 1, 2, 3, 6, 5, 4, 7, 8, 9 ]
