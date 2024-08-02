// Function scope with var
function functionScope() {
    if (true) {
      var functionScopedVar = 'I am inside the function scoped block';
      console.log(functionScopedVar); // Output: I am inside the if block
    }
    console.log(functionScopedVar); // Output: I am inside the if block
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