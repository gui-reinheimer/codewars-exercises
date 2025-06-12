function squareSum(numbers){
  let total = 0
  numbers.forEach(item => {
    total += item * item
  });
      return total;
}