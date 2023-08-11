var vowels = ["a", "e", "i", "o", "u"];
function getCount(string) {
  let counter = 0;
  for (let index = 0; index < vowels.length; index++) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === vowels[index]) {
        counter++;
      }
    }
  }
  return counter;
}
console.log(getCount("abracadabra"));
