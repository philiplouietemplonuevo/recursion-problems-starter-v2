/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {
  if (array.length === 1) {
    return [array];
  }
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const remainingElements = [...array.slice(0, i), ...array.slice(i + 1)];
    const permutationsOfRest = permutations(remainingElements);

    for (const permutation of permutationsOfRest) {
      result.push([currentElement, ...permutation]);
    }
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
