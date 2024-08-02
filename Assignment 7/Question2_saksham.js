const fs = require("fs");

// Synchronous file operation
console.time("Sync Operation"); // start timer for sync operation
fs.writeFileSync("largefile.txt", "large amount of data\n");
const syncData = fs.readFileSync("largefile.txt", "utf8"); // Synchronously read from file
console.timeEnd("Sync Operation"); // End timer for sync operation
console.log("Synchronous file content:");
console.log(syncData); // Log the content of the file

// Asynchronous file operations
console.time("Async Operation:"); // Start timer for async operation
fs.writeFile("largefile.txt", "Large amount of Data\n", (err) => {
  if (err) throw err;
  fs.readFile("largefile.txt", "utf8", (err, asyncData) => {
    if (err) throw err; 
    console.timeEnd("Async Operation:"); // End timer for async operation
    console.log("Asynchronous file content:");
    console.log(asyncData); // Log the content of the file
  });
});
