// Nested asynchronous tasks with callbacks
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    callback(); // Call the callback function after task1 completion
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    callback(); // Call the callback function after task2 completion
  }, 2000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    callback(); // Call the callback function after task3 completion
  }, 3000);
}

// Nest callbacks to ensure sequential execution
task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks completed");
    });
  });
});
