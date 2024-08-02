
const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API 1:', error);
  }
};

const fetchData1 = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API 2:', error);
  }
};

const fetchDataInParallel = async () => {
  try {
    const [result1, result2] = await Promise.all([fetchData(), fetchData1()]);
    console.log('API 1 Data:', result1);
    console.log('API 2 Data:', result2);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchDataInParallel();
