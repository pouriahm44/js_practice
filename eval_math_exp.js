const calc = function (expression) {
  let arr = stringToArray(expression);
  arr = replaceStringWithNumber(arr);
  arr = multiAndDiv(arr);
  result = plusAndMin(arr);
  return result;
};
function stringToArray(expression) {
  let arr = [];
  let number = "";
  for (let i = 0; i < expression.length; i++) {
    let iNumber = parseInt(expression[i]);
    if (!isNaN(iNumber)) {
      number = number + expression[i];
    } else {
      if (number.length > 0) {
        arr[arr.length] = number;
        number = "";
      }
      arr[arr.length] = expression[i];
    }
  }
  if (number.length > 0) {
    arr[arr.length] = number;
    number = "";
  }
  return arr;
}
function multiAndDiv(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== "*" &&
      arr[i] !== "/" &&
      arr[i - 1] !== "*" &&
      arr[i - 1] !== "/" &&
      arr[i + 1] !== "*" &&
      arr[i + 1] !== "/" &&
      arr[i - 1] !== "*" &&
      arr[i - 1] !== "/"
    ) {
      newArr[newArr.length] = arr[i];
    }
    if (arr[i] === "*") {
      newArr[newArr.length] = arr[i - 1] * arr[i + 1];
    }
    if (arr[i] === "/") {
      newArr[newArr.length] = arr[i - 1] / arr[i + 1];
    }
  }
  return newArr;
}
function replaceStringWithNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      if (hasDot(arr[i])) {
        arr[i] = parseFloat(arr[i]);
      } else {
        arr[i] = parseInt(arr[i]);
      }
    }
  }
  return arr;
}
function hasDot(value) {
  for (let index = 0; index < value.length; index++) {
    if (value[index] === ".") {
      return true;
    }
  }
  return false;
}
function plusAndMin(arr) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      if (arr[i] === "+") {
        result = result + arr[i + 1];
      }
      if (arr[i] === "-") {
        result = result - arr[i + 1];
      }
      i++;
    } else {
      result = arr[i];
    }
  }
  return result;
}
console.log(calc("15+1596/1236"));
