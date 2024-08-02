//Question 1

// nested for loop 
for (let i = 1 ; i <= 10; i++)
    {
        for (let j = 1 ; j <=10 ; j++)
            {
                console.log(i + " x " + j + " = " + i*j);  //printing table of 5 
            }
    }


// Question 2

// declaring an array as arr 
let arr = [10,20,30,49,18]
let sum = 0   // initializing sum as with value 0 

for (let i = 0 ; i<arr.length ; i++)   //for loop till the length of the array
    {
            sum += arr[i];  //adds the value of a[i] to sum 
    } 
    console.log("Sum of array is:", sum)


//Question 3

function palindrome(str)
{
    const lowerString = str.toLowerCase();  // converting the string to lower case

    const reverseString = lowerString.split('').reverse().join(''); // reverse the string using split and join method to convert them back into strings

    return lowerString == reverseString; // if the condition is true it will return true else false
    
}

console.log(palindrome("DAD")) //calling function by passing parameter
console.log(palindrome("saksham"))
console.log(palindrome("level"))


// Question 4

//creating function as Fibonacci it takes arguement n 
function fibonacci (n){
    let sequence = [];  // creating empty array
    let a = 0, b = 1;  //first two variables with value 0 and 1 as two numbers of fibonacci series 
    
    for (let i = 0 ; i < n ; i++)   //loop to run for n number of times
        {
            sequence.push(a);   //adds current value of a to array
            let c = a + b  ;  //calculates next number and stores in c
            a = b ;  // updates value of a to b 
            b = c ;  //updates value of b to c 
           
        }
    return sequence;  //returns sequence
}

console.log(fibonacci(20));  // prints output for n numbers in form of array
console.log(fibonacci(10))


//Question 5

// Function scope with var
function functionScope() {
    if (true) {
      var ScopedVar = 'I am inside the function scoped block';
      console.log(ScopedVar); // Output: I am inside the if block
    }
    console.log(ScopedVar); // Output: I am inside the if block
  }
  
  functionScope(); //calling function 
    

  // Block scope with let and const
  function blockScope() {
    if (true) {
      let blockScopedLet = 'I am inside the let blockscope block ';
      const blockScopedConst = 'I am inside the const blockscope block' ;
      console.log(blockScopedLet); // Output: I am inside the if block
      console.log(blockScopedConst); // Output: I am inside the if block
    }
  }
  
  blockScope(); //calling function 