
//Question 1 


function getValueByKey(obj) //defines function with obj as parameters 
{
    let result  = [];  //initializes empty array as result 
    let keys = Object.keys(obj);  //gets an array of objects

    for(let i  = 0 ; i < keys.length ; i++)  //loop which will iterate each element in the keys
        {   
            let key = keys[i];  //current key from keys assings to key
            result[i] = [key, obj[key]]; //creates an array where key is the property name and obj[key] is value
        }
    return result;  //returns result
}

//usage
let value = {name : "Saksham", age:18}
console.log("Values got with key:",getValueByKey(value));  //prints the result of the function


//Question 2

function toTitleCase(str) //defines function with parameter str
{
    let words = str.split(' ');  // split method is used to convert str into array 


    for(let i = 0 ; i < words.length ; i++)  // for loop to iterate all elements in words
        {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();  // takes the first character and converts to uppercase and then comverts rest of them to lower case nd concates
        }
return words.join(' ');  // use to join the array back in string 
}

console.log("Converted title case:",toTitleCase("saksham sHinde")); //calls function 


//Question 3
    function emptyObject(obj)  //defines function with one parameter
    {
        return Object.keys(obj).length === 0 ;   //checks the length of object keys are present or not if its null it will return true
    }

console.log("Empty object or not:",emptyObject({name:"Saksham" , age:18})) //returns false
console.log("Empty object or not:",emptyObject({})) //returns true 


//Question 4

function CountString(str)  //function definition with parameter str
{
    let count = {};  //empty object to store character count

    for (let char of str)  //  for of loop to iterate each char of str
    {
        count[char] = (count[char] || 0) + 1;  //uses char as key in count object if count exists adds and increment count for char
    }
    return count; //returns count as object
}

console.log("String count:",CountString("saksham"));