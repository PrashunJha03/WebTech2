// Assignment 1(CallBack)
// ------------------------------
// Write a function calculate(a, b, operation) that accepts another function as its third argument.

function calculate(a, b, operation)
{
    return operation(a,b)
}

function add(a,b)
{
    return "Adition : " + (a + b)
}

function sub(a,b)
{
    return "Subtraction : " + (a - b)
}

function mul(a,b)
{
    return "Multiplication : " + (a * b)
}


console.log(calculate(5,3,add))
console.log(calculate(5,3,sub))
console.log(calculate(5,3,mul))
