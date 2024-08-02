function palindrome(str)
{
    const lowerString = str.toLowerCase();  // converting the string to lower case

    const reverseString = lowerString.split('').reverse().join(''); // reverse the string using split and join method to convert them back into strings

    return lowerString == reverseString; // if the condition is true it will return true else false
    
}

console.log(palindrome("DAD")) //calling function by passing parameter
console.log(palindrome("saksham"))
console.log(palindrome("level"))


