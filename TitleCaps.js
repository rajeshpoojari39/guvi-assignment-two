var arr = ["raJesh", "poojAri", "mUMBai"];

for (let i = 0; i < arr.length; i++) {
  var sentence = arr[i].toLowerCase().split("");
  var titleCaps = sentence[0].toUpperCase() + sentence.slice(1).join("");
  console.log(titleCaps);
}
