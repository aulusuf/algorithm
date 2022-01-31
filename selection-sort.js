var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function (array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var selectionSort = function (array) {
  // Write this method
  for (let i = 0; i < array.length; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min != i) {
      // Swapping the elements
      //  let tmp = array[i];
      //  array[i] = array[min];
      //  array[min] = tmp;
      swap(array, i, min);
    }
  }

  return;
};
