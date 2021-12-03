var arr = [
  "deified",
  "civic",
  "radar",
  "level",
  "rajesh",
  "poojari",
  22,
  12121,
  234,
  656,
  223,
  657,
];

for (let i = 0; i < arr.length; i++) {
  if (palindrome(arr[i]) == true) {
    console.log(arr[i]);
  }
}

function palindrome(element) {
  const str = String(element);
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
