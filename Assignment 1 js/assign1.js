// Question 1 
let str = "Hello, World!";
let num = 42;
let bool = true;
let obj = { name: "John", age: 30 };
let arr = [1, 2, 3, 4, 5];


console.log(`String: ${str} (${typeof str})`);
console.log(`Number: ${num} (${typeof num})`);
console.log(`Boolean: ${bool} (${typeof bool})`);
console.log(`Object: ${JSON.stringify(obj)} (${typeof obj})`);
console.log(`Array: ${JSON.stringify(arr)} (${typeof arr})`);


// Question 2


const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));


const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;


console.log(`Results:`);
console.log(`  Addition: ${num1} + ${num2} = ${sum}`);
console.log(`  Subtraction: ${num1} - ${num2} = ${difference}`);
console.log(`  Multiplication: ${num1} * ${num2} = ${product}`);
console.log(`  Division: ${num1} / ${num2} = ${quotient}`);


if (num2 === 0) {
  console.log("Error: Cannot divide by zero!");
}


// Question 3

const number = parseInt(prompt("Enter a number: "));


if (number > 0) {
    console.log("The number is positive");
}


else if (number == 0) {
    console.log("The number is zero");
}

else {
    console.log("The number is negative");
}

// Question 4


for (let i = 1; i <= 20; i++) {
    if (i % 2!== 0) {
      continue; 
    }
    console.log(i); 
  }


// Question 5


const numericGrade = parseInt(prompt("Enter a numeric grade (0-100): "));


if (numericGrade >= 90 && numericGrade <= 100) {
  console.log("Your letter grade is: A");
} else if (numericGrade >= 80 && numericGrade <= 89) {
  console.log("Your letter grade is: B");
} else if (numericGrade >= 70 && numericGrade <= 79) {
  console.log("Your letter grade is: C");
} else if (numericGrade >= 60 && numericGrade <= 69) {
  console.log("Your letter grade is: D");
} else if (numericGrade >= 0 && numericGrade <= 59) {
  console.log("Your letter grade is: F");
} else {
  console.log("Invalid grade. Please enter a number between 0 and 100.");
}

