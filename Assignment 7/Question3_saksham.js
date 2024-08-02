//creating a callback function
function task(callback) {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
        callback(); // Call the callback function after task completion
    }, 2000);
}

// 2. Example usage
function callbackFunction() {
    console.log("Callback executed");
}

task(callbackFunction);
