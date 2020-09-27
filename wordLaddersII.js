var findLadders = function(beginWord, endWord, wordList) {
  let outputTree = new Node(beginWord);
  function stack(begin, list, tree) {
      let result = wordComparison(begin, list);
      for(let word of result) {
          let newList = list.slice()
          newList.splice(list.indexOf(word[0]),1);
          tree.addChild(word[0], newList);
      }
      for(let child of tree.children) {
        if(child.list.length !== 0){
          stack(child.name, child.list, child);
        }
      }
  }
 stack(beginWord, wordList.slice(), outputTree);
 function print(tree){
   console.dir(tree);
   if(tree.children.length > 0){
     for(let child of tree.children){
       print(child);
     }
   }
 }
 print(outputTree);

};

class Node {
 constructor(name,list, next = null, parent) {
   this.name = name;
   this.parent = parent;
   next ? this.id = next : this.id = 1;
   this.list = list;
   this.children = [];
 }

 addChild(name,list) {
   let childCount = this.children.length + 1;
   this.children.push(new Node(name,list, this.id + childCount, this.id));
   return this;
 }

 traverse(word, beginWord, array = [], temp = []) {
    if(this.name === beginWord){
      let temp = [];
      temp.push(this.name);
    }
    if(this.children.length === 0 && this.name === word){
      array.push(temp);
      return;
    }
    for(let child of this.children){
      temp.push(child.name);
      child.traverse(word, array, temp);
    }
    return array;
 }
}
/* The shortest transformation will be shortest path */
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
   let result = [objArray[0]];
   for(let i = 1; i < objArray.length; i++) {
       if(result[0][1] === objArray[i][1]){
           result.push(objArray[i]);
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

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];

findLadders(beginWord,endWord,wordList);