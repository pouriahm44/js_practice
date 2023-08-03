let letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",

  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function counter(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let index = 0; index < letter.length; index++) {
      if (string[i] === letter[index]) {
        count++;
      }
    }
  }
  return count;
}
console.log(counter("aheLLO"));
