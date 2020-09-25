var merge = function(intervals) {
  // reducer function
  const mergeInterval = (acc, interval) => {
      !acc.length || acc[acc.length -1][1] < interval[0]
      ? acc.push(interval)
      : acc[acc.length - 1][1] =
          Math.max(acc[acc.length - 1][1], interval[1]);
      return acc;
  }
  // sort by lowest starting point
  return intervals.sort((a,b) => a[0] - b[0]).reduce(mergeInterval, []);
};

/*
array of tuples [low, high]
*/