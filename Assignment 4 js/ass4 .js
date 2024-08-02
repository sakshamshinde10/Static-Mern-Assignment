//Question 1

function getKeysAndValues(obj) {
    return Object.entries(obj);
}

// Example usage
let person = { name: "John", age: 30 };
console.log(getKeysAndValues(person)); // Output: [["name", "John"], ["age", 30]]


//Question 2

function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(char) {
        return char.toUpperCase();
    });
}

// Example usage
console.log(toTitleCase("hello world")); // Output: Hello World


//Question 3

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// Example usage
console.log(isEmptyObject({})); // Output: true
console.log(isEmptyObject({ name: "John" })); // Output: false


//Question 4

function charCount(str) {
    let count = {};
    str.split('').forEach(char => {
        count[char] = (count[char] || 0) + 1;
    });
    return count;
}

// Example usage
console.log(charCount("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
