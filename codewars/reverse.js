function reverse(string) {
  let x = "";
  if (string.length >= 5) {
    for (let index = string.length - 1; index >= 0; index--) {
      x = x + string[index];
    }
  }
  return x;
}
//console.log(reverse("Hello world!"));
function split(param) {
  var array = [];
  var string = "";
  for (let index = 0; index < param.length; index++) {
    if (param[index] !== " ") {
      string = string + param[index];
    } else {
      array.push(string);
      string = "";
    }
  }
  return array;
}

console.log(split("hello new world"));
