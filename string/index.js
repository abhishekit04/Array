// 1. Count the number of vowels in a given string
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// 2. Check if a string is a palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 3. Extract the first word of a sentence
function firstWord(sentence) {
    return sentence.split(' ')[0];
}

// 4. Replace all spaces in a string with hyphens (-)
function replaceSpaces(str) {
    return str.replace(/\s+/g, '-');
}

// 5. Split a string into an array of words
function splitIntoWords(str) {
    return str.trim().split(/\s+/);
}

// 6. Convert the first letter of each word in a string to uppercase
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// 7. Reverse the characters in a string manually
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 8. Count the number of occurrences of a specific character in a string
function countCharOccurrences(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}

// 9. Remove all non-alphanumeric characters from a string
function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

// 10. Check if a string starts and ends with the same character
function startsAndEndsSame(str) {
    if (str.length === 0) return false;
    return str[0] === str[str.length - 1];
}

// Example usage:
console.log(countVowels("hello world"));
console.log(isPalindrome("madam"));
console.log(firstWord("Hello world, how are you?"));
console.log(replaceSpaces("Hello world"));
console.log(splitIntoWords("Hello world, how are you?"));
console.log(capitalizeWords("hello world"));
console.log(reverseString("JavaScript"));
console.log(countCharOccurrences("hello world", 'o'));
console.log(removeNonAlphanumeric("Hello, World! 123"));
console.log(startsAndEndsSame("radar"));
