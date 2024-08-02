//Question 1  

// variable declaration of all types

let str = "saksham";     // here variable str is declared as String
let num = 10 ;          //here variable num is declared as a Number
let bool = true;        // here variable bool is declared as boolean and true is returned
let object = {name: "Saksham " , age:18 , roll_no: 149};    //here variable obj is declared as object passing the values name, age , roll no 
let arr = [1,"shinde",3,5,7,9];     //here variable arr is declared as an array and values are store in it. it can store all datatypes


// logging the value of and typeof of each variable to console and displaying the output
console.log("str:",str," type of str:",typeof str); // output : str and typeof operator will return the variable type
console.log("num:",num," type of num:",typeof num); // output : num and typeof
console.log("bool:",bool," type of bool:",typeof bool); // output : bool and typeof
console.log("object:",object," type of object:",typeof object); // output : object and typeof
console.log("arr:",arr," type of arr:",typeof arr); // output : arr and typeof

    

//Question 2

// declaration of variables which will take input from user in prompt num1 and num2
let num1 = prompt("Enter number 1:");
let num2 = prompt("Enter number 2:");


// performing all arithmetic operations
let add = num1 + num2;  //addition
let sub = num1 - num2;  //subtraction
let mul = num1 * num2;  //multiplication
let div = num1 / num2;  //division 


// Displaying result of the arithmetic operations using console.log

console.log("Addition is:",add)
console.log("Subtraction is:",sub)
console.log("Multiplication is:",mul)
console.log("Division is:",div)


//Question 3


// Taking number from user in prompt 
let nums = prompt("Enter a number")

// using if else loop 

if (nums > 0) //condition to check the number is greater than 0
{
    console.log("Positive number")   //if true will return positive number 
}
else if (nums < 0 )   //if this condition is true it will return negative number
{
    console.log("Negative number")
}
else
{
    console.log("Zero")    //if both the condition are zero then the number is declared as zero
}


// Question 4

// using for loop to iterate numbers from 1 to 20 
for (let i = 1 ; i <= 20 ; i++)
    {
        if( i %2!= 0)   //if condition to check whether the number is odd
        {
            continue;  // if any odd numbers come in loop it will come out of the loop and perform next iteration
        }
        console.log("Even number:",i);   //printing even numbers
    }


// Question 5

// declaring Percentage as variable to take user input
let Percentage = prompt("Enter Percentage:")


// switch condition if expression is true
switch(true)
    {
        case (Percentage >= 90  && Percentage <= 100):  //condition if the percentage is less than 100 or greater than equal to 90 print Grade A 
            console.log("A grade");
            break;

        case (Percentage >= 80 && Percentage < 90):   //condition if the percentage is less than 90 or greater than equal to 80 print Grade B
            console.log("B grade")
            break;

        case (Percentage >= 70 && Percentage < 80):  //condition if the percentage is less than 80 or greater than equal to 70 print Grade C
            console.log("C grade")
            break;

        case (Percentage >= 60 && Percentage < 70):  //condition if the percentage is less than 70 or greater than equal to 60 print Grade D
            console.log("D grade")
            break;

        case (Percentage >= 0 && Percentage < 60):  //condition if the percentage is less than 60 or greater than equal to 0 print Grade F
            console.log("F grade")
            break;

        default: console.log("Invalid grade");    //if all the input is invalid not relevant it print invalid grade
            break;
            
    }
