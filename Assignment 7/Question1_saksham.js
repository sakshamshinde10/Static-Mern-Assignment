const fs = require('fs');


//Create notes.txt using writeFile method
fs.writeFile('notes.txt' , 'This is the note.txt file',(err) => {
    if(err) throw err;
    console.log('Note.txt File created');
})

//Reads the content of file using readFile method utf8 used for encoding the files
fs.readFile('notes.txt', 'utf8', (err,data) => {
    if(err) throw err;
    console.log("notes.txt content",data);
})


// Adds aditional content to the .txt file using append method
fs.appendFile('notes.txt', '\nHello this append content', (err,data) => {
    if(err) throw err;
    console.log('append content added');
} )


//the notes.txt file is deleted using unlink method
fs.unlink('notes.txt', (err) => {
    if(err) throw err;
    console.log('notes.txt file deleted');
})
