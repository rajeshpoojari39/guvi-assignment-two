var arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i < arr.length; i++) {
  if (isPrime(arr[i]) == true) {
    console.log(arr[i]);
  }
}

function isPrime(number) {
  for (let j = 2; j <= number; j++) {
    if (number % j == 0) {
      return false;
    } else {
      return true;
    }
  }
}
