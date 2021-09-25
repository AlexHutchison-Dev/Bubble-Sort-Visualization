// Helper functions for the creation and management of lists

/** Returns a list of values from 1 to range
*   @param {int} range - the length and maximum value in the list
*/
export function generateList(range) {
  var list = [];

  for (var i = 0; i < range; i++) {
    list[i] = i + 1;
  }

  return list;
}
/** Takes an array and mixes its contents by genreating a new random index for
*   each number.
*   @param {array} list - list of numbers to be unsorted
*/
export function unsortList(list) {
  list.forEach((number, index, array) => {
    var temp;
    var newIndex = Math.floor(Math.random() * array.length);

    temp = array[newIndex];
    array[newIndex] = number;
    array[index] = temp;
  });
}
