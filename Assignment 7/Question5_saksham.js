// Convert tasks to use Promises
function taskPromise(taskName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${taskName} completed`);
            resolve(); // Resolve the promise after task completion
        }, delay);
    });
}

//  Use .then() chaining to ensure sequential execution
taskPromise("Task 1", 1000)
    .then(() => taskPromise("Task 2", 2000))
    .then(() => taskPromise("Task 3", 3000))
    .then(() => {
        console.log("All tasks completed using Promises");
    })
    .catch((err) => {
        console.error("Error:", err); // Handle any errors
    });