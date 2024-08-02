
//Question 1

function capitalizeStrings(words) {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

// Example usage:
const words = ["apple", "banana", "cherry"];
console.log(capitalizeStrings(words)); // Output: ["Apple", "Banana", "Cherry"]


//Question 2

function secondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    let firstLargest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// Example usage:
const arr = [3, 1, 4, 2, 5];
console.log(secondLargest(arr)); // Output: 4

//Question 3

function getValuesByKey(objects, key) {
    return objects.map(obj => obj[key]);
}

// Example usage:
const objects = [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Jim", age: 20}];
const key = "name";
console.log(getValuesByKey(objects, key)); // Output: ["John", "Jane", "Jim"]


//Question 4

function factorialArray(numbers) {
    
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

   
    return numbers.map(num => factorial(num));
}

// Example usage:
const numbers = [1, 2, 3, 4];
console.log(factorialArray(numbers)); // Output: [1, 2, 6, 24]


//Question 5

function intersection(array1, array2) {
    const set = new Set(array1);
    return array2.filter(item => set.has(item));
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(intersection(array1, array2)); // Output: [3, 4]
