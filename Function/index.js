// 1. Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) {
      return "Invalid input: n must be non-negative";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // 2. Function to check if a number is even or odd
  function isEvenOrOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
  }
  
  // 3. Function to reverse a given string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 4. Function to find the largest of three numbers
  function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
  }
  
  // 5. Function that accepts an array and returns the sum of its elements
  function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
  }
  
  // 6. Function to calculate the area and perimeter of a rectangle
  function rectangleProperties(length, width) {
    return {
      area: length * width,
      perimeter: 2 * (length + width)
    };
  }
  
  // 7. Function to determine if a given year is a leap year
  function isLeapYear(year) {
    // A year is a leap year if it's divisible by 4,
    // except for years divisible by 100 unless also divisible by 400.
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
  }
  
  // 8. Function to generate a multiplication table for a number
  function multiplicationTable(num) {
    let table = '';
    for (let i = 1; i <= 10; i++) {
      table += `${num} x ${i} = ${num * i}\n`;
    }
    return table;
  }
  
  // 9. Function to check if a string is a palindrome
  function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // 10. Function to find the greatest common divisor (GCD) of two numbers
  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // Example usage:
  console.log("Factorial of 5:", factorial(5));           // 120
  console.log("10 is", isEvenOrOdd(10));                   // Even
  console.log("Reverse of 'hello':", reverseString("hello")); // "olleh"
  console.log("Largest of 5, 10, 7:", largestOfThree(5, 10, 7)); // 10
  console.log("Sum of [1, 2, 3, 4]:", sumArray([1, 2, 3, 4]));  // 10
  console.log("Rectangle (length=5, width=3):", rectangleProperties(5, 3)); // {area: 15, perimeter: 16}
  console.log("2024 is a leap year:", isLeapYear(2024));   // true
  console.log("Multiplication table for 7:\n" + multiplicationTable(7));
  console.log("Is 'racecar' a palindrome?", isPalindrome("racecar")); // true
  console.log("GCD of 48 and 18:", gcd(48, 18));           // 6
  