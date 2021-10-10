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
  var unsortedList;

  list.forEach((number, index, array) => {
    var temp;
    var newIndex = Math.floor(Math.random() * array.length);

    temp = array[newIndex];
    array[newIndex] = number;
    array[index] = temp;
    unsortedList = array;

  });
  return unsortedList;
}

/** Takes a list, and sorts it using the bubble sort algorithm. Returns an array of
*   Animation frames showing the list at each ittereative pass through the unsorted list
*   @param {array} unsorted list of numbers to be sorted
**/

export function bubbleSort(list) {

  var sorted = false;
  var frames = [];

  while (!sorted) {
    sorted = true;

    for (var i = 0; i < list.length; i++) {
      if (list[i] > list[i + 1]) {
        sorted = false;
        var temp = list[i + 1];
        list[i + 1] = list[i];
        list[i] = temp;
      }
      frames.push([...list]);
    }
  }
  return frames;
}
