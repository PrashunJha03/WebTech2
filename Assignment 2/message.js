// Assignment 2(Delayed message)
// ------------------------------------------
// Write a function showMessage(callback) that displays "Processing..." immediately
// and then displays "Completed!" after two seconds by using setTimeout().


function showMessage()
{
    console.log("Processing...")
    setTimeout(() => {
        console.log("Completed!")
    },2000)
}

showMessage()
