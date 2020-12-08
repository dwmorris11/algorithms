function getPermutations(array) {
  let permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array, currentPerm, perm) {
  if (!array.length && currentPerm.length) {
    perm.push(currentPerm);
  } else {
    for (let i = 0; i < array.length; i++) {
      let newArray = array.slice(0, i).concat(array.slice(i + 1));
      let newPerm = [...currentPerm, array[i]];
      permutationsHelper(newArray, newPerm, perm);
    }
  }
}
// O(N!*N)

function getPermutations2(array) {
  let perm = [];
  permutationsHelper(0, array, perm);
  return perm;
}

function permutationsHelper2(i, array, perm) {
  if (i === array.length - 1) {
    perm.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(array, i, j);
      permutationsHelper2(i + 1, array, perm);
      swap(array, i, j);
    }
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}