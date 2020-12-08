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