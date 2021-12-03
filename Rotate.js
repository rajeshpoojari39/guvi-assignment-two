var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var n = 2;

function rotate(arr, n) {
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr);
}

rotate(arr, n);
