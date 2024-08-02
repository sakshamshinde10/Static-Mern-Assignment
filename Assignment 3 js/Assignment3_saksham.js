//Question 1

function capatalised(arr)  //creating a function as capatalised and passing arr as parameter
{
    let capatalised = []   //creating empty array
    for (let i = 0 ; i < arr.length ; i++)
        {
            let str = arr[i];    //str as a variable which store value at particular index of array
            let capatalisedstr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();  // here the character at index 0 is converted into upperCase and then by using slice method the rest of the character are converted to lowerCase and both are concatenated
            capatalised.push(capatalisedstr); // adds the capatilized string to the array 
        }
        return capatalised;  //return function 
}


const array =  ["hello", "world", "saksham", "shinde"];     //declaring array with inputs
console.log(capatalised(array));    //calling function 




// Question 2

function secondLargest(arr) // defined a function 
{
    if (arr.length < 2 )  //check if arrayy length is more than 2 or not 
        {
            throw new Error("array should have atleast two elements");   // throws error if length is less than 2 
        }
    
        let first = arr [0];  //initialize first to first element of array
        let second  = arr[1]; //initialize second to second element of array

        if (second > first)  //checks if second is greater than first
            {
                [first , second]  = [ second , first];  //if true swaps the values
            }
        
        for (let i = 2 ; i < arr.length ; i++)   // iteration starts from third element
            {
                if (arr[i]  > first)  //checks if current value is greater than first
                    {
                        second = first;   //changes second to first
                        first = arr[i]; // changes first to arr[i]
                    }
                else if (arr[i] > second && arr[i] !== first)   //checks if currrent value is greater than first
                    {
                        second = arr[i];  //changes second to arr[i]
                    }
            }
            return second;  // returns second
}

//usage
const array1 = [3,1,2,10,42];   // declares array of nunbers
console.log("Second largest number in array:",secondLargest(array1)); // call function 




// Question 3

function getValueByKey( arr , key) //defines function with two parameters 
{
    let value  = [];  //initializes empty array
    for(let i  = 0 ; i < arr.length ; i++)  //loop which will iterate each element in the loop
        {
            value.push(arr[i][key]);  //access the value with key and adds it to value using push method
        }
    return value;  //returns value
}

//usage
const arr =  [
    { name: "saksham", age: 18 },
    { name: "yash", age: 16 },
    { name: "divesh", age: 23 },
    { name: "vedant", age: 18 }
];

const key = 'name';  //defines key variable and assigns string 'name'
const values = getValueByKey(arr , key);  //calls the function 
console.log(values);



//Question 4

function factorial (n) //defines function factorial 
{
    let result = 1;  //initializes result to 1 
     for (let i = 1; i <= n; i++)
        {
            result *= i;  // multiplies the cuurrent value by i and update result
        }
        return result;  //returns result
}

function factArray(arr)   //defines a function factArray
{
    let resultArray = new Array(arr.length)   // defines resultArray same length as arr
    for(let i = 0 ; i < arr.length ; i++) // loop through each element of array
        {
            resultArray[i] = factorial(arr[i]);  //for each element in arr calls the function factorial 
        }
        return resultArray; //return resultArray
}

const num = [1,2,3,4,5,6,7]; //declares array
console.log("Factorial of array:",factArray(num)); //calls array



//Question 5

function intersection(arr1 ,arr2)  //function definition with two parameters arr1 and arr2
{
    let result = []; // empty array
    for (let i = 0 ; i < arr1.length ; i++)  //iterates all element of arr1
        {
            if (arr2.includes(arr1[i]))  //checks if the current element is included in arr2  
                {
                    result.push(arr1[i]); // if element is found it adds to the result using push method
                }
        }
        return result ; //returns the result
}

const arr1 = [1,2,3,4,5]; // declaring two different arrays
const arr2 = [3,5,7,8,9];
console.log("Intersection of number in two array:",intersection(arr1 , arr2));  //calling functions



