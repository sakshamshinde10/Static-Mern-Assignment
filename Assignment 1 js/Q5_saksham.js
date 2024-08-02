
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