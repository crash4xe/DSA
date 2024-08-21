function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

function factorial1(n) {
  let fact = 1;
  for (n; n > 0; n--) {
    fact *= n;
  }
  return fact;
}

console.log(factorial1(5));
