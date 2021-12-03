var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];

function median(array1, array2) {
  var combineArr = [...array1, ...array2];
  var half = combineArr.length / 2;
  var median = (combineArr[half] + combineArr[half - 1]) / 2;
  console.log(median);
}

median(arr1, arr2);
