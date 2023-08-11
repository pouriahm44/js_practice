function sayHello(name, city, state) {
  return (
    "Hello, " + collector(name) + "! Welcome to " + city + ", " + state + "!"
  );
}
console.log(sayHello(["john", "ali"], "phoenix", "arizona"));

let names = ["mehran", "pouria", "amir hossein"];
function collector(array) {
  let text = "";
  for (let index = 0; index < array.length; index++) {
    if (text === "") {
      text = array[index];
    } else {
      text = text + " " + array[index];
    }
  }
  return text;
}
