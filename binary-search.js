function findNum(maxNum = 100) {
  // Binary search a number between 1 and maxNum.

  // Pick a random target integer between 1 and maxNum.
  const target = Math.ceil(Math.random() * maxNum);
  let min = 1;
  let max = maxNum;
  let guess;

  // while(true) loops forever until we hit a break or return.
  while (true) {
    guess = Math.floor((min + max) / 2); // Math.floor rounds down
    if (guess === target) {
      break;
    } else if (guess > target) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
  }
  return guess;
}

findNum();
