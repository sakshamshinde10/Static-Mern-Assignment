const axios = require ("axios");


//creating function to print api sequentially one after the other
const fetchData = async()  => {
    const Postresponse = await axios.get("https://jsonplaceholder.typicode.com/posts");  // fetching an api 
    console.log(Postresponse.data);
    
    const Userresponse = await axios.get("https://jsonplaceholder.typicode.com/users"); 
    console.log(Userresponse.data);
}

 
fetchData();  // calling function
