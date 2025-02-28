// 1. Reverse an array manually
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// 2. Find the second-largest number in an array
function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    return second;
}

// 3. Merge two arrays without duplicates
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// 4. Find the frequency of each element in an array
function frequencyCount(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}

// 5. Implement a manual version of the includes method
function manualIncludes(arr, target) {
    for (let item of arr) {
        if (item === target) return true;
    }
    return false;
}

// 6. Shift elements in an array to the left by one position
function shiftLeft(arr) {
    if (arr.length === 0) return arr;
    let first = arr.shift();
    arr.push(first);
    return arr;
}

// 7. Rotate an array to the right by k steps
function rotateRight(arr, k) {
    let n = arr.length;
    k = k % n;
    return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

// 8. Remove all duplicate elements in an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 9. Create a 2D array representing a multiplication table for numbers 1 to 10
function multiplicationTable() {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        let row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

// 10. Find the intersection of two arrays
function arrayIntersection(arr1, arr2) {
    let set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(secondLargest([10, 5, 8, 20, 15]));
console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
console.log(frequencyCount([1, 2, 2, 3, 3, 3]));
console.log(manualIncludes([1, 2, 3, 4], 3));
console.log(shiftLeft([1, 2, 3, 4]));
console.log(rotateRight([1, 2, 3, 4, 5], 2));
console.log(removeDuplicates([1, 1, 2, 2, 3, 4]));
console.log(multiplicationTable());
console.log(arrayIntersection([1, 2, 3], [2, 3, 4]));
