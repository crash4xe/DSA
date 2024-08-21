function fibonacciSeries(n) {
  let n1 = 0;
  let n2 = 1;
  let next;

  for (let i = 1; i <= n; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }

  return "got it";
}

console.log(fibonacciSeries(10));
