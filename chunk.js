const chunkArray = (arr, len) => {
  return arr.reduce((acc, cv, ci, array) => {
    if (ci % len === 0) {
      acc.push(array.slice(ci, ci + len));
    }
    return acc;
  }, []);
};

module.exports = chunkArray;
