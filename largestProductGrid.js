/* Multiply horizontals first
   Multiply verticals second
   Multiply diagnols third

   iterate from 0 to n-4 where n is the
   size of the square matrix

   record the highest multiple
*/

let test = [[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[1,2,3,4,5],[5,4,3,2,1]];

function horizontalProducts(grid){
  let max = 0;
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid.length-3; j++){
      let temp = grid[i][j] * grid[i][j+1] * grid[i][j+2] * grid[i][j+3];
      temp > max ? max = temp: null;
    }
  }
  return max;
}

function verticalProducts(grid){
  let max = 0;
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid.length - 3; j++){
      let temp = grid[j][i] * grid[j+1][i] * grid[j+2][i] * grid[j+3][i];
      temp > max ? max = temp: null;
    }
  }
  return max;
}

function diagnoalProducts(grid){
  let max = 0;
  for(let i = 0; i < grid.length - 3; i++){
    for(let j = 1; j < grid.length; j++)
  }
}
// console.log(horizontalProducts(test));
// console.log(5*4*3*2);

// console.log(verticalProducts(test));
// console.log(3*3*3*2);

// console.log(diagnoalProducts(test));
