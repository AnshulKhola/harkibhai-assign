/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const maxi = Math.max(...numbers);
    if(maxi === -Infinity){
        return undefined;
    }
    return maxi;
}

module.exports = findLargestElement;