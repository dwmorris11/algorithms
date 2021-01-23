function sym(...args) {
  function reducer(acc, cv) {
    const currentSet = new Set(cv);
    acc = new Set(acc);
    for (let elem of currentSet) {
      if (acc.has(elem)) {
        acc.delete(elem);
      } else {
        acc.add(elem);
      }
    }
    return acc;
  }
  let result = args.reduce(reducer);
  return Array.from(result);
}

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);