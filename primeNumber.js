var arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function isPrime(arr) {
  var primeNos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 2) {
      var prime = true;
      for (k = 2; k < arr[i]; k++) {
        if (arr[i] % k === 0) {
          prime = false;
        }
      }
      if (prime) {
        primeNos.push(arr[i]);
      }
    }
  }
  return primeNos;
}

console.log(isPrime(arr));

