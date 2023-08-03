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

/*function counter(string) {
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
console.log(counter("aheLLO"));*/

function letterFounder(string) {
  let a = false;
  for (let index = 0; index < letter.length; index++) {
    if (letter[index] === string) {
      a = true;
    }
  }
  return a;
}

function countLetter(string2) {
  let count = 0;
  for (let index = 0; index < string2.length; index++) {
    if (letterFounder(string2[index]) == true) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("salAm"));
