<<<<<<< HEAD
// Variable practice
// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console

let firstName = "Tanle"
let lastName = "Bongbime"
let fullName = firstName + " " + lastName
console.log(fullName) 

// Concatenate to strings in a function
// Create a function that logs out "Hi there, Tanle!" when called
let greeting = "Hi there"

function greeTing(){
	console.log(greeting + ", "+ firstName +"!")
}
greeTing()

// Incrementing and Decrementing 
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

let myPoints = 3

// Increment
function add3Points(){
	myPoints+=3
	console.log(myPoints)
}
// Decrement
function remove1Point(){
	myPoints-=1
	console.log(myPoints)
}

add3Points()
remove1Point()

// Strings and numbers 
// // Try to predict what each of the lines will log out

console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

//Rendering an error message
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorParagraph = document.getElementById("error")


//Error function
function purchase() {
	errorParagraph.textContent = "Something went wrong, please try again"
}

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

/*
//Version 1 code function

let numb1 = 5
let numb2 = 2


document.getElementById("numb1-el").textContent = numb1
document.getElementById("numb2-el").textContent = numb2
let sumEl = document.getElementById("sum-el")

// Add function
function add(){
	let result = numb1 + numb2
	sumEl.textContent = "⭐ Result: " + result 
}
//Subtract function
function substract(){
	let result = numb1 - numb2
	sumEl.textContent = "⭐ Result: " + result
}
//multiply function
function multiply(){
	let result = numb1 * numb2
	sumEl.textContent = "⭐ Result: " + result
}
// Divide function
function divide(){
	let result = numb1 / numb2
	sumEl.textContent = "⭐ Result: " + result
}
// Reset function
function reset(){
	let result = 0
	sumEl.textContent = "⭐ Result: " + result
}
// Delate function
function delate(){
	let result-=1
	sumEl.textContent =  "⭐ Result: " + result


}
function percent(){

}

*/

// Version 2

// Operation

document.getElementById("nine").textContent = 9
document.getElementById("eight").textContent = 8
document.getElementById("seven").textContent = 7
document.getElementById("six").textContent = 6
document.getElementById("five").textContent = 5
document.getElementById("four ").textContent = 4
document.getElementById("three").textContent = 3
document.getElementById("two").textContent = 2
document.getElementById("one").textContent = 1
document.getElementById("zero").textContent = 0
=======
// Variable practice
// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console

let firstName = "Tanle"
let lastName = "Bongbime"
let fullName = firstName + " " + lastName
console.log(fullName) 

// Concatenate to strings in a function
// Create a function that logs out "Hi there, Tanle!" when called
let greeting = "Hi there"

function greeTing(){
	console.log(greeting + ", "+ firstName +"!")
}
greeTing()

// Incrementing and Decrementing 
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

let myPoints = 3

// Increment
function add3Points(){
	myPoints+=3
	console.log(myPoints)
}
// Decrement
function remove1Point(){
	myPoints-=1
	console.log(myPoints)
}

add3Points()
remove1Point()

// Strings and numbers 
// // Try to predict what each of the lines will log out

console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

//Rendering an error message
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorParagraph = document.getElementById("error")


//Error function
function purchase() {
	errorParagraph.textContent = "Something went wrong, please try again"
}

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let numb1 = 5
let numb2 = 2


document.getElementById("numb1-el").textContent = numb1
document.getElementById("numb2-el").textContent = numb2
let sumEl = document.getElementById("sum-el")

// Add function
function add(){
	let result = numb1 + numb2
	sumEl.textContent = "⭐ Result: " + result 
}
//Subtract function
function substract(){
	let result = numb1 - numb2
	sumEl.textContent = "⭐ Result: " + result
}
//multiply function
function multiply(){
	let result = numb1 * numb2
	sumEl.textContent = "⭐ Result: " + result
}
// Divide function
function divide(){
	let result = numb1 / numb2
	sumEl.textContent = "⭐ Result: " + result
}

>>>>>>> de28b6800a978ba1720e1c5b8c4964fda01fc501
