const axios = require("axios");   //importing axios library


//arrow function fetchData to fetch data from api 
const fetchData = async () => {         
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); //variable response to store the get response data from api 
        console.log(response.data) // printing the data 
}

fetchData();  //callling function 