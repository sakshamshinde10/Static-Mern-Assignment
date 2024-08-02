

// using for loop to iterate numbers from 1 to 20 
for (let i = 1 ; i <= 20 ; i++)
    {
        if( i %2!= 0)   //if condition to check whether the number is odd
        {
            continue;  // if any odd numbers come in loop it will come out of the loop and perform next iteration
        }
        console.log("Even number:",i);   //printing even numbers
    }