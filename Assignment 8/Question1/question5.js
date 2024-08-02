const fetchPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts;
}

const fetchComments = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    return comments;
}

const fetchData = async () => {
    try{
    const posts = await fetchPost();
    console.log("Posts:", posts)
    const comments = await fetchComments();
    console.log("Comments:", comments)
    }
    catch (error){
        console.log("Error while fetching data",error);
    }
}
fetchData();