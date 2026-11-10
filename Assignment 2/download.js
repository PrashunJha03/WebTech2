// Assignment 4
// -----------------------------------------------------------
// Delayed Callback Function
// Goal: Write a function named downloadFile that takes two parameters: a filename (string) and a callback function.
// Inside downloadFile:
// Print "Downloading " + filename + "..." immediately.
// Use setTimeout to wait for 2 seconds.
// After the 2 seconds are up, execute the callback function and pass it a success message like "Download complete!".


function downloadFile(filename, callback)
{
    console.log("Downloading " + filename + "...")

    setTimeout(function() {
        callback("Download Complete!")
    }, 2000)
}

downloadFile("Assignment.txt", function(message) {
    console.log(message)
} )
