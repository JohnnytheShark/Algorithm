//Challenge Fibonnaci Sequence that returns the sum of all even numbers under a given number
function fiboEvenSum(n) {
  let numbers = [];
  let startNumber = 0;
  let nextNumber = 1;
  for (let i = 0; i <= n; i++){
    let newNumber = startNumber + nextNumber
    if (newNumber % 2 === 0 && newNumber <= n){
      numbers.push(newNumber);
    }
    nextNumber = startNumber
    startNumber = newNumber
  }
  let summation = numbers.reduce((a,b)=>a+b);
  return summation;
}
