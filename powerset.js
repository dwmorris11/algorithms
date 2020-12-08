function powerset(array) {
  const sets = [
    []
  ];
  for (let i = 0; i < array.length; i++) {
    const length = sets.length;
    for (let j = 0; j < length; j++) {
      let current = sets[j];
      sets.push([...current, array[i]]);
    }
  }
  return sets;
}