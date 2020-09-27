var ladderLength = function(beginWord, endWord, wordList) {
  let first = new Node(beginWord);
  let next = wordComparison(beginWord,wordList);

}
const Graph = function() {
  this._numEdges = 0;
  this._adjacencyLists = {};
}

var AdjacencyList = function() {
  this.head = null;
  this.tail = null;
};

AdjacencyList.prototype.add = function(value) {
  var vertex = new Vertex(value);

  if (!this.head && !this.tail) {
    this.head = vertex;
  } else {
    this.tail.next = vertex;
  }

  this.tail = vertex;
};

AdjacencyList.prototype.remove = function() {
  var detached = null;

  if (this.head === this.tail) {
    return null;
  } else {
    detached = this.head;
    this.head = this.head.next;
    detached.next = null;
    return detached;
  }
};

var Vertex = function(value) {
  this.value = value;
  this.next = null;
};

const wordComparison = function(beginWord,wordList) {
 let obj = {};
 for(const word of wordList){
     obj[word] = minimumXformation(beginWord,word);
 }
 return minimumStrings(obj);
}

const minimumStrings = function(obj) {
 let objArray = Object.entries(obj);
 objArray.sort((a,b)=>a[0]-b[0]);
 let result = [];
 for(let i = 1; i < objArray.length; i++) {
     if(1 === objArray[i][1]){
         result.push(objArray[i][0]);
     }else {
         break;
     }
 }
 return result;
}

const minimumXformation = function(str1, str2) {
 let matrix = createMatrix(str1, str2);
   for(let i = 1; i < str2.length + 1; i++) {
 for(let j = 1; j < str1.length + 1; j++) {
   if(str2[i-1] === str1[j-1]){
     matrix[i][j] = matrix[i-1][j-1];
   }
   else {
     matrix[i][j] = 1 +
                 Math.min(matrix[i-1][j-1],
                          matrix[i-1][j],
                          matrix[i][j-1]);
   }
 }
}
return matrix[str2.length][str1.length];
}


const createMatrix = function(str1,str2) {
 let matrix = [];
 for(let i = 0; i < str2.length + 1; i++) {
     const row = [];
     for(let j = 0; j < str1.length + 1; j++) {
         row.push(j);
     }
     row[0] = i;
     matrix.push(row);
 }
 return matrix;
}

const graph = new Node('abc');
graph.addConnection('bbc');
graph.addConnection('abb');
graph.connections[0].addConnection('abb');
console.dir(graph);
console.dir(graph.connections[0].connections);