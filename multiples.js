function ismultiples(num) {
  let keep = 0;
  for (let index = 1; index < 10; index++) {
    if (index % num == 0) {
      keep = index + keep;
    }
  }
  return keep;
}
console.log(ismultiples(5) + ismultiples(3));
