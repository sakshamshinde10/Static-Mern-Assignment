//Question 1

function adder(x)  //define function as adder with parameter x
{
    return function(y)   //closure function that remembers value of x
    {
        return x + y ;   //returns sum of x and y
    }
}


const addten = adder(10); // calls function 
const  result =  addten(5); // returns result as fifteen 

console.log("Result of closure:", result)


//Question 2
 

function count()
{
    let count = 0;       //variable count with value 0
    return function()   //forms closure that remembers value of count   
    {

        return count++;  //increaments count after each function call 
    }
}

const counter1 = count(); //calls function with variable counter 
console.log("Function call count:",counter1()); //returns 0
console.log("Function call count:",counter1()); //returns 1
console.log("Function call count:",counter1()); //returns 2
console.log("Function call count:",counter1()); //returns 3 
    

// Question 3


function rectangle(l, b)   //defines function with parameter l and b
{
    this.length = l;    //assigns value of  l to the property of instance length 
    this.breadth = b;   //assigns value of b to the property of instance breadth
}

rectangle.prototype.area = function ()  //adds method area to prototype of rectangle 
{  
    return this.length * this.breadth;  // calculates and returns area of rectangle multiplying l and b
};

const rect = new rectangle(2,3);   // creates instance of object 
console.log("Area of Rectangle:",rect.area());  //calls function 



//Question 4


function circle(r)  
{ 
    this.radius = r;  
}

circle.prototype.areaCircle = function ()   
{
    return this.radius *this.radius * 3.14;
}
circle.prototype.periCircle = function()
{
    return this.radius  * 2 * 3.14;  
}

const cir = new circle(3); 
console.log("Area of circle:",cir.areaCircle());  
console.log("Perimeter of circle:",cir.periCircle());


//Question 5

function counter()   
{
    let count = 0;   
    
    return {
        increment: function() 
        { 
          count++;  
          return count;
        }, 

        decrement: function()
        {
            count--;
            return count;
        },
        getcount: function()
        {
            return count; 
        },
        resetCount : function()
        {
            count = 0;
            return 'Count reset'; 
        }
    }
}

//usage
const  c =  counter();
console.log(c.increment()); 
console.log(c.increment());  
console.log(c.increment());  
console.log(c.decrement());  
console.log(c.decrement());
console.log(c.getcount());
console.log(c.resetCount());
console.log(c.getcount());
