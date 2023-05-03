// The Challenge Find the largest prime Factor of a given Number

//Function to check if it is a prime number
function isPrimeNumber(number){
  for (let i = 2, s = Math.sqrt(number); i <= s; i++){
    if (number % i === 0) return false;
  }
  return number > 1;
}

// Function to find the largest Prime Factor
function largestPrimeFactor(number) {
  let primeNumbers = [];

  for (let i = 0; i <= number; i++){
    if(isPrimeNumber(i) === true){
      primeNumbers.push(i)
    }
  }
  
  return primeNumbers.filter(a=>number%a === 0).reduce((a,b)=>Math.max(a,b));
}
