function Test_Collector() {
  let c1 = collector(8, 9);
  if (c1 != 17) {
    console.log("Failed: Expect = 17, Actual = " + c1);
  }
  console.log("Passed: Expected = 17, Actual = " + c1);

  let c2 = collector(2, 3);
  if (c2 != 38) {
    console.log("Failed: Expect = 38, Actual = " + c2);
  }
  console.log("Passed: Expected = 38, Actual = " + c2);
}

Test_Collector();

function ismultiples(num) {
  let keep = 0;
  for (let index = 1; index < 10; index++) {
    if (index % num == 0) {
      keep = index + keep;
    }
  }
  return keep;
}
function collector(num1, num2) {
  return ismultiples(num1) + ismultiples(num2);
}
