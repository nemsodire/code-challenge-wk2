function Prime(numb) {
    if (numb <= 1) {
      return false;
    }
    if (numb === 2) {
      return true;
    }
    if (numb % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(numb); i += 2) {
      if (numb % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function filterPrimes(arr) {
    return arr.filter(Prime);
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const primeNumbers = filterPrimes(array);
  
  console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13]



  