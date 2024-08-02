const axios = require("axios");  // import axios library

const fetchData = async  () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/invalid');   //trying to fetch an invalid url 
        console.log(response.data)
    }   
    catch(error){
        console.log("Invalid URL while fetching data:",error.message)  // printing invalid url if the try block recieves an error
        }
}

fetchData(); //calling function