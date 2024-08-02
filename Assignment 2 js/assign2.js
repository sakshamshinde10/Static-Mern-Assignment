// question 1


for (let i = 1; i <= 10; i++) {
    let row = ""; 
  
    
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + i*j); 
    }
  
    console.log(row); 
  }


// question 2

let arr = [1,2,3,4,5]
let sum = 0   

for (let i = 0 ; i<arr.length ; i++)   
    {
            sum += arr[i];  
    } 
    console.log("Sum of array is:", sum)


// Question 3

function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  console.log(isPalindrome("Level")); 
  console.log(isPalindrome("hello world")); 


// Question 4

function fibonacci (n){
    let sequence = [];  
    let a = 0, b = 1;
    
    for (let i = 0 ; i < n ; i++) 
        {
            sequence.push(a);   
            let c = a + b  ;  
            a = b ;  
            b = c;
           
        }
    return sequence;  
}

console.log(fibonacci(20));  

//Question 5
function functionScope() {
    if (true) {
      var ScopedVar = 'I am inside the function scoped block';
      console.log(ScopedVar); 
    }
    console.log(ScopedVar); 
  }
  
  functionScope(); 
    

  
  function blockScope() {
    if (true) {
      let blockScopedLet = 'I am inside the let blockscope block ';
      const blockScopedConst = 'I am inside the const blockscope block' ;
      console.log(blockScopedLet); 
      console.log(blockScopedConst); 
    }
  }
  
  blockScope(); 