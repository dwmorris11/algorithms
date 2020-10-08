var numIslands = function(grid) {
  const height = grid.length;
  const width = grid[0].length;
  const row = Array(width).fill(0);
  const col = Array(height).fill(0);
  let visited = [];
  for(let i = 0; i < height; i++) {
      visited.push(row);
  }

  let count = 0;

  for(let j = 0; j < height; j++) {
      for(let k = 0; k < width; k++) {
          if(!visited[j][k]) {
              count += findIsland(j,k);
          }
      }
  }

  function findIsland(row,col, queue = []) {
      const LAND = grid[row][col];
      const VISITED = visited[row][col];
      if(LAND && !VISITED){
          queue.push([row,col]);
          visited[row][col] = 1;
          if(row + 1 < width) findIsland(row + 1, col, queue);
          if(row - 1 >= 0) findIsland(row - 1, col, queue);
          if(col + 1 < height) findIsland(row, col + 1, queue);
          if(col - 1 >= 0) findIsland(row, col - 1, queue);
      }

      return queue.length === 0 ? 0 : 1;
  }

  return count;

};

const grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];

console.log(numIslands(grid));