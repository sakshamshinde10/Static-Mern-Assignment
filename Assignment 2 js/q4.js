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

console.log(fibonacci(5));  // prints output for n numbers in form of array
console.log(fibonacci(10))