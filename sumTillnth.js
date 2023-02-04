const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumTillNth(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

rl.question('Enter a value for n: ', (answer) => {
  const n = parseInt(answer);
  console.log(`The sum of the first ${n} positive integers is: ${sumTillNth(n)}`);
  rl.close();
});
