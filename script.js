
let homeCity = "Chicago" //This is a string stored in the variable homeCity
// This is a camel case : star with a lowercase letter and capitalize the additional words.

//This is a console.log
console.log("1, 2, 3")

let name1 = "Lucie"
console.log(name1)

// Variables are called variables because the values they store can change. Use the sign = to change the value in status from "Watching tv" to "Relaxing at the beach"
let status = "Watching tv"
status = "Relaxing at the beach"
console.log(status)

//We can add string values together with a + sign. It will add the value together.
bouquet = "Flowers" + "Vessel"

/* === equality operator, !== inequality operator, <= less than or equal to operator, >= greater than or equal to operator.
We can compare using === in conditions, number, strings and booleans. */

//A variable assignment is storing a value inside a variable

let min = 5
let max = 10
let result = min <= max
console.log(result)
//Output: true. 

console.log(10 >= 10)
//Output: true.

let batteryLevel = 10
let low = batteryLevel <= 20
console.log("Low battery: " + low)
//Output: Lowbattery: true.

let points = 12
let levelTwo = points <= 10
console.log("Level 2: " + levelTwo)
//Output: Level 2: true.

//Check if solved is less than or equal to minimum:
let solved = 20
let minimum = 10
let lostStreak = solved <= minimum

/* What type is the result of joining a string with a number = a string.
What is the result of joining a string and a boolean = a string. */

//Conditionnal statements
if (true) {
	console.log("Hello")
}

let greet = true;
if (greet) {
	console.log("Hello")
}

let answer = "Picasso"
if (answer === "Picasso") {
	console.log(answer + " is correct")
}

let score = 51
let pass = score > 50
if (pass) {
	console.log(pass)
}
//Output: true.

//We can avoid rewriting the same comparaison multiple times by saving its result in a variable and reuse the variable. 

let inboxFull = true
let showAlert = inboxFull === true

if (showAlert) {
	console.log("Your inbox is full.")
	console.log("You can't receive any more emails.")
}
/* Output: Your inbox is full.
You can't receive any more emails.*/

let hour = 9

if (hour < 12) {
	console.log("Good morning")
} else {
	console.log("Good night")
}
//Output: Goodmorning

let hoour = 14

if (hour < 12) {
	console.log("Good morning")
} else if (hour < 17) {
	console.log("Good afternoon")
}

let age = 16

if (age <= 12) {
	console.log("Where are your parents?")
} else if (age <= 16) {
	console.log("You're too young to ride this car")
} else if (age <= 100) {
	console.log("It's ok for you to ride.")
}
//Output: You're too young to ride this car

//Self-assigning variables
let wallet = 3
wallet = wallet

/* Because we can self-assign variables, we can increase or decrease variables set to numbers. 
Self assigning variables let us track data that changes over time. A user might add 2 dollars to a wallet then remove 1: 
*/
wallet = wallet + 2
wallet = wallet - 2
console.log(wallet)

//Variables set to strings work the same way.
let name = "Account name: "
name = name + "Elton"
name = name + " John"
console.log(name)

//Assigning with operators
let like = 5
like = like + 1
console.log(like)

//Same as :
let likes = 5
likes += 1
console.log(likes)

/* Decreasing by 3 : "-=3"
Increment Operator is placed after a variable's name. Same with decrement operator : "kudo--"*/
let kudo = 5
kudo++
console.log(kudo)

/*Repeating Code with While Loops
while (true) {
	console.log("and again")
}
*/

let keepPlaying = true
while (keepPlaying === true) {
	console.log("Now Playing: Ryan Paris")
	keepPlaying = false
}
//Output : une fois  'Now Playing: Ryan Paris'

//Skip the loop by updating the autoPilotOn variable :

let autoPilotOn = false
while (autoPilotOn === true) {
	console.log("Autopilot on: Vroooom!")
	autoPilotOn = false
}

//Controlling the while loop

let counter = 1
while (counter < 4) {
	console.log(counter)
	counter++
}

//Since the whole coded block runs, the order you write code affects what the console displays
// let counter1 = 0
// while (counter1 < 5) {
// 	console.log("*********------------")
// 	counter1++
// }

let counter2 = 0
while (counter2 < 4) {
	console.log("------------------------")
	counter2++
}

//For loops make this program easier :

for (let i = 0; i < 4; i++) {
	console.log("*********---------------")
}

for (let i = 0; i < 4; i++) {
	console.log("------------------------")
}

//The code of a for loop is easier to read because the information for the times the loop repeats is inside the parentheses. i is the counter here.

for (let i = 1; i < 5; i++) {
	console.log("Round" + i)
}

for (let index = 1; index < 5; index++) {
	console.log(index)
}

//Looping Downward

//This for loop counts upward from 1 to 5. Let's learn how to change it to loop downward from 5 to 1:
for (let i = 1; i < 6; i++) {
	console.log(i)
}
// Output 1 2 3 4 5 

for (let i = 5; i > 0; i--) {
// If i++ infinite loop
	console.log(i)
}

// To INCLUDE 0 when counting down, we use <= instead of >.

for (let i = 5; i >= 0; i--) {
	console.log(i)
}
//Output 5 4 3 2 1 0 

//What happens when we use i > 0 in the condition instead of i < 0 ? 

for (let i = 5; i > 0; i--) {
	console.log(i)
}
//Output: The loop continues while i is greater than 0 so : 5 4 3 2 1 

//Include 1 when counting down : 
for (let i = 5; i >= 1; i--) {
	console.log(i)
}

//Grouping values with Arrays : bigger apps group similar values, like the names of friends in a social network.
let friend1 = "Tom"
let friend2 = "Mia"
let friend3 = "Lee"

//Rather than creating a variable for each friend's name we can group all of the values into an array using [ ].
let friends = ["Tom", "Mia", "Lee"]
console.log(friends)

//To create an empty array, we code let friends = [];

/*Changing Values in Arrays with a weather app where an array can store and update values. We can imagine an array like a chest of drawers. A drawer can store any variable or value, be it a string a boolean or a number.*/

let temperatures = [17, 20, 26, 24]

//Every element in a array has a numbered position called an index. That means the second element in temperatures is at index 1. 

console.log(temperatures[ 1 ])
//Output: 20;

//To change the temperature value at the second index, access it through temperatures[2], then use "=" to assign it a new value like 25.

temperatures[2] = 25
console.log(temperatures)
//Output: [ 17,20,25, 24 ]

//Pushing and Popping Arrays

//To add a value like "groceries" to an array, we can code the array name toDo folloowed by a period "." then the instruction PUSH ("groceries"). The new value goes to the end of the aray.
let toDoList = ["call mom", "dishes"]
toDoList.push("groceries")
console.log(toDoList)
//Output : ['call mom', 'dishes', 'groceries']

//To remove the last element of the array, we coded the array name toDo, a period "." then the instruction POP variable.pop("elementofarray"). We can save the value removed by storing it in a variable
let toDo = ["call mom", "dishes"]
let chores = toDo.pop()
console.log(chores)
//Output : dishes

let activeUsers = ["Sue", "Mike"]
activeUsers.push("Jane")
console.log(activeUsers)
//Output: [ 'Sue', 'Mike', 'Jane' ]

let themes = ["classic", "dark mode"]
let current = themes.pop()
console.log(current)
//Output : dark mode

//Deciding with Arrays, count elements in array etc...

let reminders = ["dishes", "windows", "vaccum"]
console.log(reminders.length)
//Output : 3

let length = reminders.length
console.log(length)
//Output : 3

//We can use the length of an array to create condditionnal statements that depend on its number of elements.

let tasks = ["dishes", "windows", "vaccum"]

if (tasks.length > 0) {
	console.log("There is a lot of work here :(")
}

//We can also use the length of an array to create for loops that go through all of its elements. For that we repeat a loop as many times as there are elements in the array.

let coworkers = ["Ana", "Eve", "Sam"]

for (let i = 0; i < 3; i++) {
	console.log(i)
}
//Output : 0 1 2 

//Repeat the for loop 3 times by specifying that "i" needs to be less than 3 :
let animals = ["Cat", "Dog"]

for (let i = 0; i < 3; i++) {
	console.log(i)
}
//Output : 0 1 

//Instead of specifying that "i" needs to be less than 3, we can also use the length of the array.
let food = ["Milk", "Bread", "Cauliflower"]

for (let i = 0; i < food.length; i++) {
	console.log(i)
}
//Same output : 0 1 2 

//The couter variable "i", stores the value 0 1 2 as the loop repeats. But 0 1 2 are also the indices of the elements in food, animals or coworkers.

//Everytime the loop repeats, "i" stores an index of an element in the food, animals or coworkers array. We can use this index to access the element.
let water = ["Evian", "Vittel", "Cristalline"]
for (let i = 0; i < friends.length; i++) {
	console.log(friends[i])
}
//Output : Evian Vittel Cristalline

//Take the loop for a spin: use the counter variable "i", as the index to display all the elements in cars:
let cars = ["Toyota", "Lexus", "Opel"];
for (let i = 0; i < cars.length; i++) {
	console.log(cars[i])
}

//Reusing Code with Functions

//Fonctions are used to group related code and perform the task in one place.
//We name a function by using camel case.

function greetUser() {
	console.log("Good morning")
	console.log("Welcome back")
}
// To run the code we need to call the function.
greetUser()

//Creating parameters

// Sometimes functions need specific information to help them perform their tasks. Like a function that adds a player's name to a team.

function greetRon() {
	let nickname = "Ron"
	console.log("Hello, " + name)
} 
greetRon()

//We can pass a specific information without repeating code:
function choose(choice) {
	console.log("I choose : " + choice)
}
choose("Pikachu")
choose("Charizard")

//To pass a value to a function, we first add a variable called a parameter inside the parentheses of the function. A parameter acts as a special variable that stores a value.
function displayHalf(number) {
	let half = number / 2
	console.log(half)
}
displayHalf(10)
//Output: 5

//Returning Values
//This will returns a value to the code that called it to help perform its task.

function timesTen(number) {
	let operation = number * 10
	return operation
}
//Output : timesTen(4) = 40

function greaterThanTen(number) {
	let isGreater = number > 10
	return isGreater
}
//Output : greaterThanTen(4) = false

/* We can use the return value of a function like any value by calling the function. Here, we call userAge(22) to use its value. 
We can store the return value in a variable too. Here we store the return value in "ageResult" and display it in the console. */

function userAge(number) {
	let age = "User age: " + number
	return age
}
let ageResult = userAge(12)
console.log(ageResult)

/* If we don't include a return statement inside the function, the function returns the value "undefined" instead.
A function can return a signe value at a time.
We use the return value by calling the function and use it like any other value.
We store the return value by calling the function and store it in a variable. */

function giveMeTen() {
	return 10
}
console.log(giveMeTen())

function addGreating(user) {
	let greeting = "Greetings " + user
	return greeting
}
let salutation = addGreating("Lucie");
console.log(salutation)
//Output = "Greetings Lucie"

function lessThanFive(number) {
	let lessThan = number < 5
	return lessThan
}
let calculus = lessThanFive(10);
console.log(calculus)
//Output = false

//Using Multiple Parameters

//Functions need multiple parameters to work with two or more pieces of data, like a first and last name.

function display(firstName, lastName) {
	console.log(firstName + " " + lastName)
}
display("John", " Elton")

//Values get passed to a function in the same order parameters do. 

function displayWinners(first, second) {
	console.log("1st: " + first)
	console.log("2nd: " + second)
}
displayWinners("Amy", "Jake");
//Output: 1st: Amy 2nd: Jake

function displayAnimals(first, second, third) {
	console.log(first + " " + second + " " + third)
}
displayAnimals("duck", "goose", "elephant")
//Output: duck goose elephant

//When we pass values to a function with multiple parameters, the values and the parameters have to be in the same order. 

function createID(name, year) {
	return name + year + "@gmail.com"
}
let email = createID("dupuis", "1994")
console.log(email)

//Understanding functions
/* Functions names should be descriptive and let us know the main thing the function does.
Functions are actions, so their names should contain at least on verb. When using multiple words, the verb is a prefix, like "sumTotal". */

function sumTotal(price, tax) {
	console.log(price + tax)
}
sumTotal(1000, 240)

//Functions that mainly return a valut without changing it in any way start with verbs like "get"

function getName(fullName) {
	return fullName[0]
}
let fullName = ["Don", "Juan"]
let appelation = getName(fullName)
console.log(appelation)
//output : Don

//As a special case, functions that return boolean values often star with "is"

function isFreezing(temperature) {
	return temperature < 0
}
let freezing = isFreezing(-3)
console.log(freezing)
//output : true

//Function names should be consistent. If one function is called "calculateDifference", a similar function should have the same verb prefix.

function calculateSum(a, b) {
	return a + b
}

function calculateDifference(a, b) {
	return a - b
}

let sum = calculateSum(20, 10);
let difference = calculateDifference(10, 5)

console.log(sum)
console.log(difference)

//While we don't have to remember the code of every function un a program, we ddo have to pass the right input to get the right output:

let author = "John Steinback"
let title = "Tortilla Flat"
let date = "1991"

function displayAuthor() {
	return author
}
function displayTitle() {
	return title
}

function displayDate() {
	return date
}
console.log(title)
displayTitle(title)
displayDate(date)

//A function input can be a different type than the output 
function isSameWord(word) {
	console.log(word === "bombastic")
}
isSameWord("bombastic")
//Output : true

//An output is what a function displays in the console or what it returns. 

//*Functions with arrays as parameters.*

//Displaying the entier array
function displayNames(names) {
	console.log(names)
}
let students = ["Laurel", "Yanni"]
displayNames(students)
//Output : [ 'Laurel', 'Yanni' ]

//We could display the length of the array.
function displayNumberOfNames(names) {
	console.log(names.length)
}
let pupils = ["Laura", "Caroline"]
displayNumberOfNames(pupils)
//Output: 2

//Now, we use a single element of the array.
function displayFirstName(names) {
	console.log(names[0])
}
let customer = ["Lili", "Cameron"]
displayFirstName(customer)
//Output: Lili

//We can pass an array to a function because we want to return a part of it:
function getFirstName(names) {
	return names[0]
}
let villagers = ["Maria", "John"]
let firstMember = getFirstName(villagers)
console.log(firstMember)
//Output: Maria

//We can use multiple elements from an array to return a certain kind of output we need for the next step in our code.

function getListOfNames(names) {
	return names[0] + ", " + names[1]
}
let vacationers = ["Vera", "Martha"]
let list = getListOfNames(vacationers)
console.log(list)

function displayGroupInfo(array) {
	console.log(group.length)
	console.log(group[1])
}
let group = ["Lorenzo", "Tama"]
displayGroupInfo(group)
console.log(group)

function getFullName(group) {
	return group[1] + " " + group[0]
}
let scientist = ["Vera", "Rubin"]
let association = getFullName(scientist)
console.log(scientist)

//**Objects**

let favoriteFood = "Lasagna"
let petName = "Garfield"

//Instead of using two separate variables to describe our cat, we can group these into one variable, known as an object.

let animal = {
	name: "Salto",
	meal: "Dry fish"
};

/* We create objects similarly to variables, with the keyword var, let or const followed by a name and a equal sign inside curly braces. Don't forget to pu ";" at the end for execution.
The information inside an object is known as the object's properties. The properties go insied the object's curly braces.
Creating properties by starting with a name, followed by a colon and a value.
Numbers, strings, booleans, arrays, other objects are the types of information that can be grouped into the object's properties*/


//Object with more properties 

let person = {
	name: "Carla Misty", 
	nickname: "Queen",
	occupation: "PR"
};
console.log(person.nickname)
//Output: Queen

//After accessing a property value, we can update it using an equal sign:
person.nickname = "Candy";
console.log(person)
//Output : Object { name: "Carla Misty", nickname: "Candy", occupation: "PR" }

//Using object method with functions that are closely related to our objects

let dog = {
	action: "Go get it"
};

function bark() {
	console.log("Woof");
}

//But it's possible to do it inside of it. 

let cat = {
	action: "Hunt the mouse",
	meow: function() {

	}
};

/* We create object methods like properties, starting with a name and a colon, followed by the keyword function.
Foor calling these methods, we have to take the object name and then after a period, parentheses then ";".
Methods are somilar to regular functions. Meaning we can include parameters and return statements as well. */

let tiger = {
	name: "Balto",
	scream: function(word) {
		return "Grrrr, " + word;
	}
};
console.log(tiger.scream("dinner is served."))

let phone = {
	brand: "Xiaomi",
	number: "555-555-555",
	ring: function() {
		console.log("Ding ding ding!")
	},
	call: function(number) {
		console.log("Calling " + number)
	},
};

phone.ring()
phone.call()

//*How to use methods to access and update our object's properties.*

//The keyword "THIS" refers to the object that contains the method. In this case "cereal"
let cereal = {
	name: "Crunch",
	display: function() {
		console.log(this.name)
	}
};
cereal.display()
//Output when just this: Object { name: "Crunch", display: display() }
//Output when this.name: Crunch

//Similarly, we can use "this" followed by a period to update the object's properties from inside its methods.

let laundry = {
	name: "Skip",
	changeLaundry: function() {
		this.name = "Ariel"
		console.log(this.name)
	}
};

laundry.changeLaundry()
//Output: Ariel

//The "this" keyword can only be used to access an object's properties INSIDE the object's method. That's why outside we type "laundry" instead of this.

//The keyword "this" refers to the object that contains the method. In this case: "meal".
let meal = {
	ingredients: "fish",
	display: function() {
		console.log(this)
	}
};
meal.display()
//Output: Object { ingredients: "fish", display: display() }

//For updating the object's properties from inside its methods, we can use "this" followed by a comma and the properties that we want to update. 

let sport = {
	type: "bike",
	changeSportDisplay: function() {
		this.name = "walk"
		console.log(this.name)
	}
}
sport.changeSportDisplay()
//Output: walk

//Again : "this" keyword can only be used to access an object's properties INSIDE the object's method. 

//**Reusable Programs, building functions that change their output based on input.**

//*Nesting conditionals statements inside functions*

function displayMessage(message) {
	console.log(message)
}
displayMessage("Approved")

//We can add other code blocks inside a function. When we do that, the extra pair of braces let us know which instructions belong where.

function isRentingAge(age) {
	if (age >= 21) {
		console.log("Approved")
	}
}
isRentingAge(26)
//Output: Approved

//Wrapping if statements inside functions helps us organize and reuse our code. Now we can use the same if statement with a function call like so : isRentingAge(26); 

//Instructions outside of nested code blocks still get executed, even if the code inside the conditionnal statement gets skipped

function isBuyable(game) {
	if (game >= 70) {
		console.log("Approved")
	}
	console.log("Check complete")
}
isBuyable(71)
//Output: Check complete
//Not "Approved" because it's skipped.

function isLying(boolean) {
	console.log("Welcome to the lie Detector 3000")
	if (boolean === false) {
		console.log("He's lying")
	}
}
isLying(false)
//Output: Welcome to the lie Detector 3000. He's lying.

function getTaxedSalary(salary) {
	if (salary > 2100) {
		salary = salary - 500
	}
return salary
}

let income = getTaxedSalary(2100)
console.log(income)
//Output: 2100

//*Using conditions and functions*

/* When creating functions, we have to think about when and why we need conditional statements inside of them.
For example anytime you enter a password, a function with a conditionnal statement decides what message to show you.*/

function applySeniorDiscount(age) {
	if (age >= 65) {
		console.log(age + " year old has 50% off")
	}
}
applySeniorDiscount(18)
applySeniorDiscount(67)

//Output: 67 year old has 50% off

//Another way conditionnals get used inside functions is when they need to compare two values.
function isNumberGreater(a, b) {
	if (a > b) {
		console.log(a + " is greater than " + b)
	} 
}
isNumberGreater (13, 10)

//If we want to provide output for the wrong input, we add an "else" statement to the function. We add a conditional statement inside when the function's behavior changes based on its parameters.

function checkPassword(word) {
	if (word === "123456") {
		console.log("Login complete")
	} else {
		console.log("Retry please")
	}
}
checkPassword("12345")
//Output: Retry please

//We fifgure out how many values we need to pass to a function by checking how many parameters the conditional statement needs.

function whichNumberGreater(a, b) {
	if (a > b) {
		console.log(a + " is greater")
	} else {
		console.log(a + " isn't greater")
	}
}
whichNumberGreater(10, 20)
//Output: 10 isn't greater
//Because we're talking about the a value which is represented by the number 10. So we display his condition not the 20 one.

//*Stopping functions with return statements to exit functions at any time, even in the middle of the code*

/*Anything after a return statement doesn't execute. Here, the display statement after the return statement doesn't work.
If we have multiple return statements, whichever one gets run first exits the function.*/

function multiplyByTen(number) {
	//return number * 10;
	console.log("This won't get executed")
	return "This line doesn't get executed either"
}

let multiplication = multiplyByTen(40)
console.log(multiplication)

/*If we use conditional statements, we can use return to stop a function at different parts of the code based on the input.
Return statements at the end of the function and outside of any conditional statement are run only if no conditions have been met like "No Discount" */
function getDiscount(age) {
	if (age >= 65) {
		return "50% OFF"
	}
return "No Discount"
}

let discount = getDiscount(67)
console.log(discount)
//Output: 50% OFF

function canDrive(age) {
	if (age > 16) {
		return "You can drive"
	} else if (age === 16) {
		return "You can pass your licence"
	}
return "You cannot drive yet"
}

let drivepossible = canDrive("17")
console.log(drivepossible)
//Output: You can drive

//*Calling loops in functions and influence their outputs.*

function displayNumbers() {
	for (let i = 1; i <= 3; i++) {
		console.log("Let's go in " + i)
	}
}
displayNumbers()

//We can use parameters to get different resuluts from the same loop. 

function displayExercices(number, message) {
	for (let i = 1; i < 10; i++) {
		console.log( i + message )
	}
}
displayExercices(5, " Jumping Jack")
displayExercices(5, " Push-Up")
displayExercices(5, " Squat")

function displayNumbersAndMessage(message) {
	for (let i = 0; i < 10; i++) {
		console.log(i + message)
	}
}
displayNumbersAndMessage(" snow flakes")

//We can also use parameters to change opertaions like multiplication. This one function is enough to create different multiplication tables.

function displayMultipliedNumbers(multiplier) {
	for (let i = 0; i <= 10; i++) {
		console.log(i * multiplier)
	}
}
displayMultipliedNumbers(10)

//When we use a parameter in the function, depending on the value passed to it, the function displays a different message.

function displayPageNumbers(page) {
	for (let i = 1; i <= 20; i++) {
		console.log(page + i)
	}
}
displayPageNumbers("Page ")

//We can pass values as parameters to control how many times a loop gets executed. Display "Beetlejuice" three times by passing a number : 

function summonBeetlejuice (title, times) {
	for (let i = 0; i < times; i++) {
		console.log("I've seen " + "Beetlejuice " + times + " times it was great")
	}
}
summonBeetlejuice("Beetlejuice", 3)

//To controle where a loop starts, we use a parameter to set the counter variable's value. This code displays the days left in a month.

function displayDaysLeft(day) {
	for (let i = day; i < 31; i++) {
		console.log(i)
	}
}
displayDaysLeft(26)

//We can use parameters to set both the start and end values. This code only displays numbers in between the values we passed to the function. 

function displayInterval(start, end) {
	for (let i = start; i < end; i++) {
		console.log(i)
	}
}
displayInterval(26, 51)

function drawStars(times) {
	for (let i = 0; i < times; i++) {
		console.log("*")
	}
}
drawStars(5);

function displaySign(sign, times) {
	for (let i = 0; i < times; i++) {
		console.log(sign)
	}
}
displaySign("#", 3)

function displayCountdown(start) {
	for (let i = start; i > 0; i--) {
		console.log(i)
	}
console.log("Launch!")
}
displayCountdown(6)

//*Loooping over arrays*

//How to use functions to go over arrays and manipulate their values whenever we want, like when we click a button.

let grades = [91, 66, 77, 84, 66]
let searchnumber = 66

function searchGrade(gradeds, search) {
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] === searchnumber) {
			console.log("This is the correct grade")
			break
		}
	}
}
searchGrade(grades, searchnumber)
//Output: This is the correct grade.

//Functions are useful when we want to execute reusable code. To access array elements using the searchGrade function, let's pass the grades array when calling the function.

let localisation = [48.89684744988406, 2.2918054818719025]

function searchLocalisation(localisation) {
	console.log(grades)
}
searchLocalisation(grades)
//Output: [ 48.89684744988406, 2.2918054818719025 ]

//If we want to access elements stored in multiple arrays using the same function, we pass the arrays as arguments when calling that function. Let's code the seconde array latitude, when calling searchPosition()

let latitude = [48.89684744988406, 48.89684744988407]
let longitude = [2.2918054818719025, 2.2918054818719026]

function searchPosition(latitude, longitude) {
	console.log(latitude)
	console.log(longitude)
}
searchPosition(latitude, longitude)
//Output : [ 48.89684744988406, 48.89684744988407 ] [ 2.2918054818719025, 2.2918054818719026 ]

//once we've passed an array to a function, we can iterate over the array elements. Create a for loop to iterate through all grades elements.

let plants = [1, 2, 44, 67]

function searchPlants(plants) {
	let len = plants.length
	for (let i = 0; i < len; i++) {}
}
searchPlants(plants)

//To retrieve each array element inside a for loop, we use the syntax array[i], where "i" is the current iteration, and array is the array name. Let's write the code to retrieve individual pens elements. 

let pens = [1, 6, 7, 29]

function searchPens(pens) {
	for (let i = 0; i < pens.length; i++) {
		console.log(pens[i])
	}
}
searchPens(pens)

//By using a function, an array, and another parameter, we can do a lot. For example, let's search for the element 44 in the lights array by passing lights and then search to the searchLight function.

let lights = [12, 13, 14, 15]
let searches = 44

function searchLight (lights, searches) {
	for (let i = 0; i < lights.length; i++) {
		if (lights[i] === searches) {
			console.log("This is the correct light")
			break
		}
	}
}
searchLight(lights, searches);

//We access array elements for whithin a function, by passing the array to the function.

let prices = [99, 129, 159]
let discounts = 0.5

function applyDiscount(prices, discounts) {
	for (let i = 0; i < prices.length; i++) {
		console.log(prices[i] * discounts)
	}
}
applyDiscount(prices, discounts)
console.log(applyDiscount(prices, discounts))

//**Arow functions**

function getCar() {
	return "Toyota"
}
console.log(getCar())

//Same output as: 

let auto = () => "Toyota"
console.log(auto())

//Arrow functions are type of anonymour function, meaning that they don't have a function name. If we want to call these functions, we need to store them insided a variable and call the variable with parentheses at the end

let game = () => {
	return "Mario"
}
console.log(game())

//With arrow functions, we don't need the function keyword or the function name. That means the first thing we start off is the parentheses but you don't have to add ";" at the end. 

function getCandy() {
	return "Haribo"
}

let candy = () => {
	return "Twix"
}

//Like with normal functions, we can add parametes insided the parentheses and then use the parameters insided the function.

function getFood(caddie) {
	return "trolley" + caddie
}

let shopping = (caddie) => {
	return "trolley" + caddie
}

console.log(shopping(" pasta"))

// Right after the parentheses and before the opening curly brace is where we add the arrow operator =>. We use this operator right before the code block or expression we want the functioon to execute.

//Just like with traditionnal functions, we use curly braces {} to contain an arrow function's code block.

//If an arrow function only has one statement, we can leave out both the curly braces and the return keywordd to get some very short code:

const coffee = () =>  "Orafio"

//Where ddo we add the arrow operator => : after the parentheses and before the opening curly brace

//What do curly braces {} do in an arrow function : they contain the code block 

//If we want to shorten the code remove the curly braces and the return keyword. 

//We call the arrow function with parentheses because it's necessary to say that we want the executed form.

const getVehiclesCount = () => 400
console.log(getVehiclesCount())

//*Arrow function with parameters

const getPrice = (discount) => 500 - (discount * 500)
console.log(getPrice(0.25))
//Output: 375

//Same as:

// let startingpoint = 500
// let sales = 0.25;

// function applySale(startingpoint, sales) {
// 		console.log(startingpoint - (sales * startingpoint))
// }
// console.log(applySale())

//Parameters in arrow functions are similar to parameters in normal functions. Code an arrow function that uses total as a parameter.
const getPrices = total => {
	const discount = 0.25
	return total - (discount * total)
}
console.log(getPrices(500))
//Output : 375

// In arrow functions, we don't have to add the parentheses if we have only one parameter, so "(total)" is the same as "total".

//Parameter values are set to undefined by default. If a function call doesn't pass a value the function will use undefined as the value.
//Call the getPrices() function below to see it display Nan, which means it's an undefined value.

const getTaxes = total => {
	const tax = 0.25
	return total + (tax * total)
}
console.log(getTaxes())
//Output: NaN

//To avoid undefined values, we specify the default value inside the parentheses. Set the default parameter value inside the parenthesis to total=200.

const getSales = (total = 500) => {
	const discount = 0.25
	return total - (discount * total)
}
console.log(getSales())
//Output : 375

//To use multiple parameters, we add the nex parameter in the parenthesis and seperate it from the rest by adding a comma ","

const getSalary = (total = 1200, discount = 5) => total - (discount / 100 * total)
console.log(getSalary())

//Arrow functions let us have more compact and concise code. How we write them depends on the parameters we use and the code block size. These functions will be essential later on when we'll use them in more complex code like React.

const getSizes = total => {
	const repair = 0.6
	return total - (repair * total)
}
console.log(getSizes(100))
//Output: 40

const getRatio = (nom, denom = 2) => {
	return nom / denom
}
console.log(getRatio(30, 2))
//Output: 15

const getSquare = (number = 0) => number * number
console.log(getSquare(5))
//Ouput: 25

const getArea = (length, width = 3) => length * width
console.log(getArea(5))
//Output: 15

//** Template literals**

//With template literals it's easier to addd variables and expressions inside of strings. Take a look below at how template literals achieve the same result as the longer method above it. 

let fruit = "peach"
console.log("I'm a " + fruit + "!")
console.log(`I'm a ${fruit}!`)

let cake = `Chocolate`
console.log(cake)

//To easily combine variables with string literals, we use the ${name} syntax where name is a variable 

let category = `pie`;
let pie =`${fruit} ${category}`
console.log(pie)
//Output: peach pie

//We can also perform operations inside a string literal by adding expressions inside the braces of ${}

let quantity = 20
let give = 10

let cost = `Total cost: ${quantity * give}`
console.log(cost)

//When calling a function, we leave out the parenthesis () if we're passing a string literal as an argument to the function. Let's pass the string literal Jane while calling the bike function

const bike = model => {
	return `I'm a ${model}`
}
console.log(bike`Giant`)

//**Classes**

//As we code complex programs, we'll need to create many similar but distinct objects. For example, all the books in the library. But creating a new object for thousands of books would take a lot of time and could lead to errors.

let book100 = {
	author: "Shakespear",
	title: "Da Vinci Code"
}
console.log(book100)

/*
To make this process less error-prone and more efficient, we can use data structures called classes as templates.

* Once we create a template with the properties we'll want for all similar objects, we'll want for all similar objects, we can use it to create new objects faster.

* To create new objects, classes uppercase and classes need a special method called the constructor(). This method sets the property values for a new object.

* We need a way of specifying the unique values a new object will have. We do that by sending parameters to the constructor method. 

* Before creating a new object property, we need a special keyword: "THIS". We add the this keyword to refer to the object being created.
*/

class Book {
	constructor(author, title) {
		this.author = author
		this.title = title
	}
}

/* 
To create a new object property, we need to use the keyword this followed by a period and the property name. 

* To finish creating the new object property we'll assign the author parameter as a value to this.author. Same for title. 

* Time to use our class. We start the same way we'd create a variable but then add the "new" keyord followed by Book().

* Here we'll assign new Book() to the book1 variable. 
*/

let book1 = new Book("Leo Tolstoy", "War and Peace")
console.log(book1)

let book2 = new Book("Dr. Seuss", "Oh, the Places You'll Go!")
console.log(book2)

//*Classes with method

/*
So far, the objects we've created from classes can't perform any actions. By adding methods to classes, we'll be able to create interactive objects using the classes as templates.

*Adding a method in a class is like creating a regular function, except there's no need for the function keyword. This VirtualPet class can't do much yet. Let's give it the ability to eat with a method. 
*/

class VirtualPet {
	constructor(name) {
		this.name = name
	}
	eat(food) {
		if (food === "treats") { 
		console.log("delicious")
	} else {
		console.log("oh no :(")
	}
}
}

let pet = new VirtualPet("Camille")
pet.eat("treats")

/* To use the eat() method, we'll need the name of the object, a period, the name of the method, and parentheses like so : pet.eat()

* Parameters allow class methods to be more interactive by reacting to things we give them. Addd a parameter called food to the eat method.

* With a conditionnal statement the objects we create will be able to react to the type of food we pass to eat() Finish adding the statement that checks if food is a particular value. 

* Each new object of the VirtualPet class we create will be able to use the eat() method. Call eat() again but this time pass it "treats"
*/

//*Creating instances* 

//Everytime we create an object from a class, we're creating what's called an instance of that class. 

class Username {
	constructor(name) {
		this.name = name
		this.isOnline = true
	}
}
let user1 = new Username("Arya")
let user2 = new Username("Callyope")

//Each instance is independent. That means when we create a new instance, it doesn't affect any other instances.

user1.isOnline = false
console.log(user1)

// False again but Callyope is true set from the User class 

//Changing an instance also doesn't affect any other instances. Set user1.isOnline to false to see how changing a property from user1 doesn't affect the properties of user2.

//When referring to an instance of a class, we are talking about a specific object createdd from a class template.

//if we changed the properties of an instance, only this instance would change. It wouldn't change anything to the class it was created from.

class Food {
	constructor(name, calories) {
		this.name = name
		this.calories = calories
	}
}
let banana = new Food("banana", 105)
let rice = new Food("rice", 50)
banana.calories = banana.calories / 2
console.log(banana)
console.log(rice)

//Because instances are independant they let us keep track of complicated data like a huge number of user on a website. We are gonna be keep track of 4 users and whether they're online.

//Changing a class affects all instances of that class, add a status property so that all users have a short status description form now on.

class ActiveUsers {
	constructor(pseudo) {
		this.pseudo = pseudo
		this.isActive = true
		this.status = "Using this website"
	}
	sayHi() {
		console.log("Hi, I'm " + this.pseudo)
	}
}

let active1 = new ActiveUsers("Don")
let active2 = new ActiveUsers("Mary")
let active3 = new ActiveUsers("Shaun")
let active4 = new ActiveUsers("Barry")

active1.isActive = false
active3.isActive = false

//When changing a class, we can change both its properties and its methods. Call the newly added sayHi() method that belongs to the User class to see how all instances of User can use it.

active1.sayHi()
active2.sayHi()

console.log(active1)
console.log(active2)
console.log(active3)
console.log(active4)

//The constructor is what creates an instance, but it doesn't always need to have properties inside of it. It works even when empty.

//Set the constructor() method as empty for this class. This means there's nothing in between the braces.

class Tiger {
	constructor() {

	}
	growl() {
		console.log("Grrrroar")
	}
}
let animal1 = new Tiger()
animal1.growl()

//We don't even have to add a constructor. It's so essential that a default constructor kicks in when it's not there. In this case the animal1 instance is created with an empty constructor added behind the scenes when we run the code when we don't add it.

/* 
To recap : If we change the properties of a class, all instances created from that class, will have the same properties as the updated class

*We can add and update methods the same way we update class properties.

*Class contructor can also be empty, because it's using the default constructor
*/

class Sport {
	constructor(name) {
		this.name = name
		this.scoreValue = 0
		this.periods = 4
		this.score = 0 //Necessary unless NaN
	}
	scored() {
		this.score += this.scoreValue
		console.log(this.score)
	}
}
let sport1 = new Sport("Foot")
let sport2 = new Sport("Soccer")

sport1.scoreValue = 6
sport2.scoreValue = 1

sport1.scored()
sport2.scored()

console.log(sport1)
console.log(sport2)

//* Extending classes

/*
Imagine we're making a zoo game. The animals in the zoo have a lot in commmon, but they're also different in many ways. That's where inheritance comes into play.

*We can create an Animal class to bundle the main features of the animals.

*Then using inheritance, we can extend it with additional functionality for the different kinds of animals

*To inherit features from a class, we need to use the extends keyword in the class definition

*By coding extends, we'll make the Dog class inherit from the Animal class
*/
class Animal {
	constructor(name) {
		this.name = name
	}
}
//Since Dog inherits from Animal, it's a "subclass" of the Animal class. The Animal class is its superclass.

class Dog extends Animal {
}

//Inheritance gives a class all the properties of the class it's extendding, or inheriting from. See it for yourself: create an object from the Ddog class and display it:

let doggy = new Dog("Pug")
console.log(doggy)

//When we say class A inherited from class B, we mean class A can access all of the class B's properties and methods.

class Employee {
	constructor(company) {
		this.company = company
	}
}

class Dishwasher extends Employee {
}
let emp1 = new Dishwasher("Miele")
console.log(emp1)

/*
If a subclass doesn't have a constructor() mehtod, the superclass's constructor becomes the default constructor.
The name property of eastpak gets created through the Bag class's constructor. 
Also, a subclass inherits its superclass's methods. Try calling the sell() method through the Bag instance:
*/

class Bag {
	constructor(name) {
		this.name = name
	}
	sell() {
		console.log(this.name + " is selling at 99$")
	}
}

class Eastpak extends Bag {
}

let eastpak = new Bag("pink eastpak")
console.log(eastpak.name)
eastpak.sell()

//We can create as many subclasses of Vertebrates as we want. They'll all have access to the properties of the Vertebrates class. Make the Bird class inherit from the Vertebrates class and call speed() on the Bird object: 

class Vertebrates {
	constructor(name) {
		this.name = name
	}
	speed() {
		console.log(this.name + " is my speed")
	}
}

class Bird extends Vertebrates {
}

class Mammals extends Vertebrates {
}

let hummingbird = new Bird("20 secs per meter")
let humanoid = new Mammals("1.4 metres per second")

hummingbird.speed()
humanoid.speed()

//Inheritance becomes useful when subclasses have additional functionnality, like their own methods. Horses can neigh, but donkey has their own way to do it: let's add a neigh() method to the Horse class and call it:

class Horse {
	constructor(name) {
		this.name = name
	}
}

class Donkey extends Horse {
	neigh() {
		console.log("Hîhan")
	}
}
let donkey = new Donkey("Carot")
console.log("My donkey " + donkey.name + " says:")
donkey.neigh()

//Inheritance works one way only. Not all instances of Horse are a kind of Donkey, so they can't access specific Horse functionnality.
let arabian = new Horse("Appaloosas")

//For exemple arabian can't use neigh(). arabian.neigh() = error

/*
To recap:
* Subclasses can have methods on their own, not only methods that their superclass has.

* Subclasses specific methods can't be accessed by other subclasses.
*/

//* Overriding methods

/*
Say we're developing a role-playing game with humas and wizards. Wizards are special humans who can attack with magic spells. That's where method overriding comes in handy.

*We can create a Human class and have Wizard class extend it.

*Then using method overridding, we can change the Wizard class's attacking behavior

*Overriding a method replaces the code of the methodd in the superclass with that of the subclass.

*Call receiveDamage() method from the Wizard class to see what happends to the health property.

*If we need the behavior from the superclass's method, we can call it with the "SUPER" keyword. Type in the correct keyword to call the attack() method from the Human class.
*/

class Human {
	constructor(weapon) {
		this.weapon = weapon
		this.health = 100

	}
	receiveDamage() {
		this.health = this.health - 10
	}
	attack() {
		console.log("Swing " + this.weapon)
	}
}

class Wizard extends Human {
	receiveDamage() {
		this.health = this.health - 5
	}
	attack() {
		super.attack()
		console.log("Zimzalabim!")
	}
}

let human = new Human("ax")
human.receiveDamage()
human.attack()
console.log(human.health)
//Output: 90

let wizard = new Wizard("staff")
wizard.receiveDamage()
wizard.attack()
console.log(wizard.health)
//Output: 95

/*
To ovveride a method, we give it the same name andd parameters as the method in the superclass. We can override receiveDamage() from the superclass by coding the same method in the subclass.

*Overriding means that we can have the same method in the subclass but customize its behavior for what's needed in the subclass.

*When we call receiveDamage() method on human and wizard we'll see their simular behavior but different result (90, 95)

*To customize the method in the subclass, we want a method that ovveride a method from a superclass. 

*The subclass method needs to have the name and parameters in common with the superclass method when overriding it.

*A subclass can't still use the original superclass'method once it overrides it. When calling that method by its name without super, the sunbclass will use the overriding method.

*/

class ToothBrush {
	brush() {
		console.log("Cleaning slowly")
	}
}

class ElectricBrush extends ToothBrush {
	brush() {
		super.brush() //The electric brush can both clean slowly and buzz.
		console.log("Bzzz")
	}
}
let brush1 = new ElectricBrush() 
brush1.brush()
//output: Bzzzz
let brush2 = new ToothBrush()
brush2.brush()
//Output: Cleaning slowly

//* Coding Subclass Properties

//Imagine we're expanidng the role-playing fame with a character: the warrior. Warriors wear armor and use a war cry when they attack. Since subclasses can have their own properties, we can easily add these extra features to a character.

class Battle {
	constructor(weapon) {
		this.weapon = weapon
		this.life = 100
	}
	takeDamage() {
		this.life = this.life - 10
	}
	heavySword() {
		console.log("Swings " + this.weapon)
	}
}

class Samurai extends Battle {
	constructor(weapon, warCry) {
		super(weapon)
		this.warCry = warCry
	}
	takeDamage() {
		this.life = this.life - 5
	}
	heavySword() {
		super.heavySword()
		console.log(this.warCry)
	}
}

let battle = new Battle("axe")
battle.heavySword()
let samurai = new Samurai("katana", "Banzaï")
samurai.heavySword()

let satoshi = new Samurai("katana", "Kashi")
let katakura = new Samurai("spear", "monsol")

satoshi.heavySword()
katakura.heavySword()

//Recap: For having an extra properties to a subclass, it's important to do it after calling the super method and his parameter between parentheses if he has one or multiple.

//A superclass can't use the properties of a subclass.

//**Object-oriented Programming, a style of coding used by developers to model real-life objects

//*Encapsulating objects

//Before anything, a simple functionnal programm, FP paradigm:

function getDistance(mph, h) {
	return mph * h
}
let mph = 60
let h = 2
let distance = getDistance(mph, h)
console.log(distance)

//Then, object oriented programming, OOP paradigm. In this style, we group data and functionality as properties and methods inside objects. Add a property called hungry and a method called eat to our virtual cat object:

let miaou = {
	hungry: true,
	eat: function() {
		miaou.hungry = false
	}
}
miaou.eat()
console.log(miaou.hungry)

//OOP is useful for modeling real-life objects, which have properties and functions that we treat as one package, like a car for example. Let's model an automobile by creating an object with a mileage property and a drive() method. One style is not a replacement for the other, and we often need to use both FP & OOP when programming, depending on what we need to do.

let automobile = {
	mileage: 4000,
	drive: function(miles) {
		automobile.mileage += miles
	}
}
automobile.drive(300)
console.log(automobile.mileage)
//Output: 4300

function addMoney(value, amount) { 
	return value + amount
}

let value = 0
value = addMoney(value, 100)
value = addMoney(value, 50)
value = addMoney(value, 22)

console.log(value)
//Output 172

//Let's start by creating a value property that can be easily updated and setting it to 0

let myPiggy = {
	value: 0,
	addMoney: function(amount) {
		myPiggy.value = myPiggy.value + amount
	}
}
myPiggy.addMoney(100)
console.log(myPiggy.value)
//Output: 100

/*
In OOP, we group together related data and functions in the same object. We call this encapsulation, and it's a key principle of OOP.

*For having a code encapsulated, we need to have variables and functions grouped together in one object. 

*We have to identify which methods and properties belong together and which should be addedd to other objects in our code.

*Though encapsulation methods can access properties that belong to the same object. Here the drive(miles) method has to access to the mileage property.

*To recap: Encapsulation is grouping related data and functions in the same object.
*/

let voiture = {
	mileage: 10332,
	drive: function(miles) {
		car.mileage += miles
	}
}
console.log()

/*To encapsulate the code, we'll turn the variables into properties and the function into a method.

FP : 
function getArea(b, h) {
	return b * h
}
let base = 3
let height = 4
*/

let rectangle = {
	base: 3,
	height: 4,
	getArea: function() {
		return rectangle.base * rectangle.height
	}
}

//Now that rectangle is an object, we can keep track of its properties and update them whenever we want and update the base property for example: 

rectangle.base = 10
let area = rectangle.getArea()
console.log(area)

// *Applying inheritance in OOP
/*
Let's take a look at another key concept: inheritance, previously covered when learning about JavaScript classes.

*When we create objects one by one we run into the problem of having duplicate code. We use inheritance to make our code efficient. 

*Through inheritance, objects receive methods from other objects and classes. Inheritance lets us create oobjects that have different properties and behaviors without coding each one from scratch.

*One way to apply inheritance is by creating objects from other objects. Code Object.create() for addding a template object in parentheses.
*/

let person1 = {
	greet: function() {
		console.log("Hi")
	}
}

let person2 = {
	greet: function() {
		console.log("Hi")
	}
}
//Here, they are 2 methods. 

//One way to apply inheritance is by creating objects from other objects. Code "Object.create()" and add the template object in parentheses.

let template1 = {
	greet: function() {
		console.log("Hi!")
	}
}
let person3 = Object.create(template1)

//The person object has now inherited the template object's methods and can use them as its own. Try calling greet() as a methodd of person 

person3.greet()
//Output: Hi!

//Objects don't actually own inherited methods but borrow them. To prove this, display the new "person" object to see it's empty.
console.log(person3)
//Output: <prototype>: Object { greet: greet() }

//If we need more methods for an object, we can set them directly.

let car = {
	startEngine: function() {
		console.log("Starting engine")
	}
}

let hybrid = Object.create(car)

hybrid.charge = function() {
	console.log("Using fuel to charge battery")
}

hybrid.startEngine()
hybrid.charge()

//When using Object.create() property values aren't inherited either. Display the player1 object to see it doesn't have a name value set.

let player = {
	name: "Player",
	greet: function() {
		console.log("Ready to play")
	}
}

let player1 = Object.create(player)
player1.name = "Jill" //Just like with methods, we can set properties directly. Set the name to Jill for the player2 object, "Player" is first here. 

console.log(player1)
//Output: <prototype>: Object { name: "Player", greet: greet() }



//** 
//We took a look at an interesting way of applying inheritance in JavaScript with Object.create(). Although useful, this is not the most common approach. We'll take a look at how inheritance works with classes.

let car1 = {
	displayMiles: function() {
		console.log("0 miles driven")
	}
}

let porshe = Object.create(car1)
let bmw = Object.create(car1)
let jaguar = Object.create(car1)

porshe.displayMiles()
bmw.displayMiles()
jaguar.displayMiles()

/*
To recap:

*Object to object inheritance can be described as objects that can use methods stored in a template object. 

*Objects don't own their inherited methods.

*Inheritance make our OOP code more efficient because it lets us write a method once and use it with many objects.
*/

let speaker = {
	play: function() {
		console.log("Playing audio")
	}
}

let alexa = Object.create(speaker)

alexa.listen = function() {
	console.log("Listening")
}
//The new object alexa inherit only the play() method. 

let car3 = {
	drive: function() {
		console.log("Vroom")
	}
}

let myCar = Object.create(car3)
console.log(myCar)

let player3 = {
	fight: function() {
		console.log("Take that")
	}
}

let wizard1 = Object.create(player3)
wizard1.castSpell = function() { //add a new method to the new wizard object.
	console.log("Alohomora!")
}
wizard1.fight()
wizard1.castSpell()

/* Applying inheritance in OOP pt2

*We're previously learned how to use classes to make our code more efficient. Every class contains a method called a constructor that sets the properties of new objects, known as instances.

*Creating objects out of classes is a great example of using inheritance to write short efficient code

*Writing OOP code with classes requires planning. Let's take a look at how a developer would plan their code in the following situation. Suppose we wanted to model students in the following code:
*/

//We've decided "Student" objects should work exactly like "User", but also have a property called "major". If we create a new "Student" class, we end up repeating a lot of code from "User". Which parts are repeated ? : The assignment of the name and age properties and the greet() method. 

class Users {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	greet() {
		console.log("Hi, I study " + this.major)
	}
}
/*
class Student {
	constructor(name, age, major) {
		this.name = name,
		this.age = age,
		this.major = major
	}
	greet() {
		console.log("Hii")
	}
}

*Instead, it makes more sense to create a subclass that inherits User's greet() method. To do that, code extends Users. Once we've created a subclass, we make sure the Student class also has the properties of Users by coding the super keyword with the classes they want to share.

*After we've created a subclass that has all the properties of the superclass, we can add the additional properties we need like major.
*/

//We can now create objects that own properties and inherit methods form both Student and Users. A key part of writing OOP code is figuring out effective ways of applying inheritance. 

class Student extends Users {
	constructor(name, age, major) {
		super(name, age)
		this.major = major
	}
}

let student1 = new Student("Sam", 25, "chemistery")
let student2 = new Student("Ann", 25, "architecture")
let student3 = new Student("Zoé", 25, "maths")

console.log(student1)
student1.greet()
student2.greet()

class Phone {
	constructor(provider) {
		this.provider = provider
	}
	call(contact) {
		console.log("Calling " + contact)
	}
}

let phone1 = new Phone ("AT&T")
// The property AT&T is only displayed because call() is inherited, for having the method you should call it.
console.log(phone1) 
//Output: Object { provider: "AT&T" }

phone1.call("Mia")
//Output: Calling Mia

class Employees {
	constructor(compagny) {
		this.compagny = compagny
	}
	mission() {
		console.log("Hi, I'm capable of " + this.language)
	}
}

class Developper extends Employees {
	constructor(compagny, language) {
		super(compagny)
		this.language = language
	}
}
let employee1 = new Developper("Google", "python")
let employee2 = new Developper("Amazon", "sql")

console.log(employee1)
console.log(employee2)

employee1.mission()
employee2.mission()

class Reviewer {
	read() {
		console.log("Lecture")
	}
}
class Writer extends Reviewer {
	edit() {
		console.log("Edition")
	}
}

let control1 = new Writer() //He can both read and edit.
let control2 = new Reviewer() // He's reading only.

console.log(control1.edit, control1.read)
console.log(control2.read, control2.edit) //edit is undefined here!

//*Abstracting Objects

//Model a complicated object, like a car in JavaScript: when we're driving, we don't have to interact with the mechanics of the car at every level. The same goes for code. We don't interact with every method or property. We want to interact with a few cire parts that control the rest. A car does a lot of things as the same time. For example, a car injects and ignites fuel thousands of times a minute just to stay running.

class Car {
	injectFuel() {
		console.log("Spraying fuel")
	}
	igniteFuel() {
		console.log("Boom")
	}
}

let acar = new Car()
acar.injectFuel()
acar.igniteFuel()
acar.injectFuel()
acar.igniteFuel()

//If we had to always make low-level method calls to control an object, our code would be very hardd to read and use. Besides that, managing each-low level method call by oourselves increases the chance we'll make a mistake and cause unwanted effects.

acar.injectFuel()
acar.injectFuel()
acar.igniteFuel()

//Cars do all of this low-level fuctionality for us, and we only have to start them up. Hidding these details is called abstraction. We'll implement abstraction in OOP by writing a few core functions that handle all of the low-level work.

class Car1 {
	constructor(start) {
		this.on = true
	}
	stepOneFuel() {
		console.log("Injecting fuel")
	}
	stepTwoFuel() {
		console.log("Fuel consummed")
	}
	honk() {
		console.log("Honk")
	}

	startUp() {
		this.on = false //If on, infinite loop
		while (this.on) {
			this.stepOneFuel()
			this.stepTwoFuel()
		}
	}
}

class Mitsubishi extends Car1 {
	constructor(start) {
		super(start)
	}
}

let  eclipseCross = new Mitsubishi()

eclipseCross.startUp()
//Output: Injecting fuel, Fuel consummed....infinite....

//Abstraction allows other developers to use our class without having to know what low-level methods it has or how they even work. Other developpers can create a new object from our "Car1" class and use it by just calling a few core methods.

//To recap: Abstraction is simplifying how we interact with objects down to a few methods. We implement it by writing a few core methods that handle low-level functions.

//A core method is like takePhoto() not closeShutter() for example

//Abstract this class by creating a makeCoffee() method that heats water, adds it to coffee grouds and filters off the coffee:
class Coffeemaker {
	heatWater() {
		console.log("Heating water")
	}
	brew() {
		console.log("Adding water to grounds")
	}
	filter() {
		console.log("Filtering coffee")
	}
	makeCoffee() {
		this.heatWater()
		this.brew()
		this.filter()
	}
}

let coffeeMaker = new Coffeemaker() 
coffeeMaker.makeCoffee()
//Output: Heating water Adding water to grounds Filtering coffee

//To make ice cream, we must both churn and freeze cream. Call the method of iceCreamMaker that doeas both for us:

class IceCreamMaker {
	churn() {
		console.log("Churning cream")
	}
	freeze() {
		console.log("Freezing cream")
	}
	makeIceCream() {
		this.churn()
		this.freeze()
	}
}

let iceCreamMaker = new IceCreamMaker()
iceCreamMaker.makeIceCream()
//Output: Churning cream Freezing cream

//Code the translateLive() method so that travelers using your app can instantly translate their audio into another language.

class Translator {
	record() {
		console.log("Recording audio")
	}
	transcribeRecording() {
		console.log("Converting audio to text")
	}
	translateText() {
		console.log("Translating text")
	}
	translateLive() {
		this.record()
		this.transcribeRecording()
		this.translateText()
	}
}
let translateme = new Translator()
translateme.translateLive()
//Output: Recording audio Converting audio to text Translating text

//Call the correct core method that handles the low-level functionality of changing slides after displaying each one:

class Slideshow {
	constructor(slides) {
		this.slides = slides
		this.current = 1
	}
	viewNextSlide() {
		this.current++
	}
	play() {
		while (this.current <= this.slides) {
			console.log('Slide ' + this.current)
			this.viewNextSlide()
		}
	}
}

let slideShow = new Slideshow(5)
slideShow.play()

//Output: Slide 1 Slide 2 Slide 3 Slide 4 Slide 5

//*Polymorphic Objects

/* To make our code easier to use, we want to keep the same method calls for different objects, even if they have slighly different behaviors:

car.displayAlert() // Output: Warning: Fuel low
elecrtricCar.displayAlert() //Output: Warning: Battery low

*Sometimes inherited methods won't make sense without adapting them, like displaying a fuel warning for an electricCar object.


class GasCar {
	displayAlert() {
		console.log("Fuel low")
	}
	startNavigation() {
		console.log("Select destination")
	}
}

let electricalCar = new GasCar()
electricalCar.diplayAlert()
//Output: Fuel low

*In OOP, objects can have the same method calls but different behaviors. We call that polymorphism.

*As a example, all three instances below inherit the honk() method but produce different sounds.
*/

let prius = new Car1()
let kia = new Car1()
let tesla = new Car1()

prius.honk()
kia.honk()
tesla.honk()
//Output: Honk, Honk, Honk

//With a simple method inherited, they'll honk the same sound three times.

//To apply polymorphism and change how objects behave, we override object methods with the right behavior.

class ClassicCar {
	alertOpenDoor() {
		console.log("Open 4 doors")
	}
	lockDoors() {
		console.log("Locking 4 doors")
	}
}

class Coupe extends ClassicCar {
	lockDoors() {
		console.log("Locking 2 doors")
	} 
}

let myNewCar = new ClassicCar()
let myNewCoupe = new Coupe()

myNewCoupe.alertOpenDoor()
//Output: Open 4 doors !

//Similarly, we override subclass methods when needed. Code lockDoors() to override the method:

myNewCoupe.lockDoors()
//Output: Locking 2 doors

//Through polymorphism, we can call on object methods knowing that they have the correct behavior set. Not having to remember different method names for each unique behavior makes our code easy to use and maintain.

myNewCar.lockDoors()
//Output: Locking 4 doors
myNewCoupe.lockDoors()
//Output: Locking 2 doors

class Personnality {
	greet() {
		console.log("Hello")
	}
}

class Professor extends Personnality {
	greet() {
		console.log("Salutations")
	}
}

let professor = new Professor()

professor.greet = function() {
	console.log("Good news, everyone !")
}
professor.greet()

//First, it was Hello, then Professor erase it with Salutations, and then we attributed Good news... to the same greet function and actualized it.

//Override the inherited method so that premium.playVideo() doesn't show any ads:

class MyUser {
	playVideo() {
		console.log("Ad #1: Shaving cream 9,99$")
	} 
}

let premium = new MyUser()
premium.playVideo = function () {
	console.log("You've successfuly connected: Buffering HD Video")
}

premium.playVideo()

//To recap: Polymorphism is when objects have the same method call but different behaviors.

//Both instances and subclasses can overridde their inherited methods.

//**Dynamic Webpages**

//*Interacting with Webpages with html5

/*

*Behind every dynamic and responsive website there's some JavaScript code. On this webpage, JavaScript changes the text when you click the reverse button and reverse the order of the letters.

*To add JavaScript code to a webpage, we start with the script tags. It's the LAST ELEMENT BEFORE CLOSING THE BODY TAG in the HTML structure.

*To tell the elements how to respond to, say, the click of a button, we need a way of interacting with them : the first step in doing that is giving each element an ID ! All IDD values are unique ! They identify HTML elements and help us to interact with them using JavaScript

*First instruction, id #index inside parentheses
document.getElementById("index")

*To make changes to the text between the tags we need to retrieve it with .innerHTML. It gives us the text.
*/

console.log(document.getElementById("index").innerHTML)
//Output: First instruction

//After we retrieve it, we can update it by using the equal sign followed by a value that we picked.

document.getElementById("index").innerHTML = "Second instruction"
//Output: direct change in HTML : Second instruction override First instruction

/*
To recap:

*innerHTML is for accessing the text of an element.

*document.getElementById retrieves the tags and the text of an HTML element
*/

//*Using variables in Webpages

//We can create variables like let element and use them to store the HTML element we access. We store the element we're accessing through document.getElementById() using a variable.

let element = document.getElementById("index")

//Now the element variable stands for what's in the document.getElementById("index"). We can access the text of the paragraph through the variable element by using .innerHTML

console.log(element.innerHTML)
//Output: Second Instruction
//We can also use the variable to update the paragraph's content, by adding equal sign and the new value "Third instruction". 

//let element = document.getElementById("index")
element.innerHTML = "Third instruction" 
//It will override First instruction, then skip Second Instruction for Third Instruction.

console.log(element.innerHTML)
//Output: Third Instruction

//*Creating Elements

let bodyElement = document.getElementById("parent") 
//First instruction, therefore the DOM can't access property "appendChild" and bodyElement is null...

//Creating new elements with JS, like when users click the Show Message button, makes for flexible and user-friendly webpage.  Start with a variable named paragraph to store the element we want to create. Create a specific element by coding its name surrounded by quotes. p for create a paragraph

let paragraph = document.createElement("p")

//The element stored in paragraph has no text so we need paragraph.innerHTML to change that. To set the text of the new paragraph, code an equal sign followed by a string value:

paragraph.innerHTML = "I'm a paragraph injected"

//We use a variable to store an element we create for make our code more readable.

//Created elements don't automatically display. We'll learn later how to make them show up.
console.log(paragraph)

//*Nesting Elements

/*
Now that we know how to create elements using JS, we can learn how to nest andd display them.

*When nesting an element like the "p" element inside the "body element", "body" becomes the PARENT of "p", so "p" is the CHILD of "body"

*First, in the HTML code, set an id to the body so we can nest a new element inside of it.

*Inside the script, create a variable to store body element using let bodyElement.

*Then access the body element using document.getElementById("parent")

*To nest an element inside the bodyElement, we use bodyElement.append(paragraph)
*/

//let bodyElement = document.getElementById("parent")
bodyElement.append(paragraph)

/*
To recap: 

*Be careful: we need to set before we can create an element, the ID of the created element's parent ! 

*It's a good idea to store the parent element in a variable when accessing it to avoid rewriting the instruction when we need the parent.
*/

//*Removing Elements

//We need a new function to remove elements when users click the button for example.

//To remove the p element fromt the body, bodyElement.removeChild is the correct instruction.

//bodyElement.removeChild(paragraph)

//Remember we don't create variables for the element we want to remove, create or the parent for access these elements, it's only for make the code more readable.

let list1 = document.getElementById("list")
let ingredient1 = document.getElementById("flour")
let ingredient2 = document.getElementById("sugar")

list1.removeChild(ingredient2)

//*Including a script

/*
*To make creating interactive webpages even easier we can use seperate files to add JavaScript and HTML

*<script src="script.js"></script> in the HTML

*Without addditional information, a button tag is useless. To react to clicks from visitors, a button tag needs the onclick attribute.

*<button onclick>Publish webstie</button>

*The onclick attribute can call functions from an included script when a visitor clicks on : onclick="sayHello()"

*Using .innerHTML, we can make the sayHello() function change the content of the paragraph a visitor clicks on the button. 
*/

function sayHello() {
	document.getElementById("info").innerHTML = "Website published!"
}

//Getting User Input

/*
Websites come to life with user input: when visitors add comments, send messages, or share posts with their friends :

*We've learned before that we get user input with the input element: single tag like this: <input>

*input elements can only be text fields with a sigle line. To create a multiple-line text area use <textarea></textarea>

*To control the size, rows attribute rows="6", cols attribute cols="15"

*For the placeholder same: placeholder="My Placeholder"

*To access user input from an included script, we need to add .value at the end of document.getElementById()

let mimo = document.getElementById("mimoInput").value
console.log(mimo)
Output: Miaou : If I type Miaou in the input!

*After accessing user input, we can use it like any other value.

*Knowing how to get user input, we can use it to update a webpage. Assemble the code so that the value of mimo appears on the webpage when clicking on the Register button
*/

function register() {
	let mimo = document.getElementById("mimoInput").value
	document.getElementById("success").innerHTML = mimo + ", you're signed up!"
	console.log(mimo)
}

//Accessing user input from a textarea element works the same way. Code .value after accessing the textarea element.

function addReview() {
	let review = document.getElementById("reviewText").value
	let addedReview = document.getElementById("addedReview")
	addedReview.innerHTML = review
	console.log(review)
}

function ask() {
	let question = document.getElementById("questionInput").value
	console.log(question)
}

//We need a button and a function to access user input from an input element because the element's value changes when a user interacts with it

function share() {
	let post = document.getElementById("postText").value
	console.log(post)
}

//Set the content of the paragraph to searchWord, the variable that stores the value of the input element.
function searchMe() {
	let searchWord = document.getElementById("searchInput").value
	document.getElementById("area").innerHTML = searchWord
} 

//**The Document Object Model**

//*The HTMM Document Tree

/*
Previously, we've seen how we can access HTML elements by their ID with getElementById, the id and innerHTML

*We can also find elements by their location in the HTML document.

console.log(document.body.firstElementChild.innerHTML)

*This displays the entire HTML document that the DOM is rendering.

*To find elements by their location, we need to be able to visualize the HTML document as a tree structure

*First HTML then body then h1, p etc...

*Tree data structures like the one below are commonly used in programming to represent data and relationships in a hierarchical way.

*We can access elements that don't have an ID by their POSITION in the HTML tree structure. 

*We call each element of a tree a node. "html" is the root node, the start of the tree.

*Elements like "p" are called element nodes. 
We consider the text inside text nodeds even though it doesn't have th "<" and ">"
*/

//*HTML Tree Node Relations, how nodes relate to each other.

/*
We refer to nodes as being in a parent-child relationship if they are connected and there are no other nodes between them.

*We create a child node by nesting an element inside another. The "p" element is inside the body element so it's a child of "body":

<body>
	<h1>Puzzles</h1>
	<p>Landscape</p>
</body>

*If a "li" is nested inside a "ul", li is not directy inside body, so its node PARENT is "li" instead of "body"

*A node is descendant of another node, if there is a connection between them, even if there are other nodes in between. Here, all nodes are dedscendants of the html node:
html > body > p > text

*We create descendant nodes by nesting elements inside each other. The "li" inside the "ul" which is inside "body". "li" is a DESCENDANT of "body"

*Two nodes are siblings if they share the same parent like "h1" and "p"

*Here, "h1" and "p" are sibling nodes because they appear nested inside the same parent "body".

*So the ul element is a child of the body. "body" is a descendant of "body" because all children are descendants

*Nodes are siblings when they descendant of the same node

*PARENT/SIBLINGS/DESCENDANT

//*The Document Object Model

/*
The principle is to have easy access to HTML elements based on their position in the HTML document's tree representation

*The DOM is a javasript INTERFACE that allows us to access HTML elements based on their position in the HTML document's tree

*Before we start accessing elements with JavaScript we need to add a script element. The first thing the DOM allows us to do is access the root HTML node with javascript keyword "document"
*/

let htmlRoot = document

//Just like we access object properties, we can access the child nodes of the html nodde with .head and .body

let theHead = document.head
let theBody = document.body

console.log(theHead)
console.log(theBody)

/*
We can then update the nodes with .innerHTML

theBody.innerHTML = "Where did the page go"

*To get all the children nodes of a node, we use the .children property. This gives us an array of the child nodes in order of appearance. 

let bodyChildren = document.body.children
bodyChildren[0].innerHTML = "Who changed my heading?"

*We can access the first child node of a parent with .firstElementChild 

let heading = document.body.firstElementChild
heading.innerHTML = "Changing heading"

*We can access the nearest sibling of an element node with .nextElementSibling

let theBody1 = document.head.nextElementSibling
theBody1.innerHTML = "Page deleted"

*For example, accessing the "p" when there a two children in the body element would be : document.body.children[1]

*Here document.head.nextElementSibling is body:
html
head
title
body
h1
ol
li
ol
body
html

*Here, assign p:
html
head
title
body
h1
p
body
html

document.body.firstElementChild.nextElementSibling.innerHTML = "I'm changing the p"
*/

//**Querying Webpages

//*Querying Specific Selectors*

//If we want to retrieve individual HTML elements, we use the querySelector() method.

function publish() {
	let element1 = document.querySelector("#p")
	element1.innerHTML = "Website published"

}

/*
To select a specific element, we add a selector inside parentheses, like coding "p" if we want to get the paragraph below the button. 

*It works with all selectors, like tags, classes, and ID's. (# ID, . class, tags p)

*querySelector only retrieves the first element it finds. If we have two elements with the same tag or class, we only access the first one. 

h3 * only me
h3
h3
querySelector("h3") 

To recap : Only the first HTML element that matches its search is what does the querySelector() method access.

For accessing a different element of the SAME class, we can specify the tag then the class if a class is shared by different tags.

*If the tags has multiple classes, we can add the other class right after the first.  (".firstclass.secondclass")
*/

//*Setting attributes dynamically

/*
How to change HTML attributes with JS, just like we're changing the src attribute on each button press in this example of picture profile when click a button, changed.

*Once we've accessed an element with JavaScript, we can get its attributse by adding a "." followed by the attribute name.

*For example, after we've stored an "img" element inside the "element2" variable, we write "element2.src" to get the attribute value.
*/

function showAttribute() {
	let element2 = document.querySelector("img")
	console.log(element2.src)
}

function changeAttribute() {
	let element3 = document.querySelector("img")
	element3.src = "https://mimo.app/r/kittles.png"
	console.log(element3)
}

//We can even use attributes to change how eleents work and behave on a webpage.

function changeQuestionType() {
	let element4 = document.querySelector("#range")
	element4.type = "checkbox"
} 

//Changing the right attributes can be very powerful. Change this webpage's entire look by setting a style sheet:

function darkMode() {
	let element5 = document.querySelector("#actualstyle")
	element5.href = "style2.css"
}

//We access an element's attribute after we've stored the element inside a variable, by cooding a period followed by the attribute name.

//You can also set the input element type andd placeholder attributes element.placeholder = "MyPlaceholder"

function showColor() {
	let element6 = document.querySelector(".redcolor")
	element6.style.color = "#FFDAB9"
	console.log(element6.style.color)
}

/*
el.style.borderRadius = "45px"
el.style.backgroundColor = "blue"
el.style.border = "5px solid lightGray" 
*/

//*Getting and Setting Attributes

/*
How to use JS methods to change HTML attributes? (Element.getAttribute() method)

*Before changing the attribute, we'll use the querySelector to store the img element inside the element7 variable.

*We'll want to access the img element's src attribute and store it. Let's store it in a new variable called imageLink

*To get an attribute's value, we have to use the getAttribute() method.

*Inside the parentheses, we specify which attribute value we want. Here, we'll code src inside quotes to get the image link.

*We can confirm we got the value by printing the imageLink variable to the console. 
*/

function displayAttribute() {
	let element7 = document.querySelector("#cat")
	console.log(element7)
	let imageLink = element7.getAttribute("src")
	console.log(imageLink) //Does the same thing as element7, but with imageLink we act with element7 and focus on the src attribute
}

//getAttribute() also works if we want to get all the attributes values, like multiple style ones for example:

function displayMultipleStyles() {
	let element8 = document.querySelector("#pokemonlink")
	let imageStyle = element8.getAttribute("style")
	console.log(imageStyle)
} 
displayMultipleStyles()
//Output: color: #FFDAB9; font-size: 1.3rem;

/*
Now that we've learned how to access attributes, let's learn how to change them (setAttribute())

*Here, we have the "img" element stored inside the element9 variable. To set an attribute, we use the setAttribute() method after the variable name.

*Inside the parentheses, we first have to specify which attribute we want to set, like src in our case.

*Next, we want to provide the new value for src. We add the new value after a comma and inside quotes. Both the attribute we want to change and the new value. First the attribute and then the value.

*Let's display element9.getAttribute("#cat") again to see that the web address actually changed.
*/

function changeImage() {
	let element9 = document.querySelector("#cat")
	element9.setAttribute("src", "https://mimo.app/r/kittles.png")
	console.log(element9.getAttribute("src"))
}
//Output: https://mimo.app/r/kittles.png
changeImage()

function changeType() {
	let element10 = document.querySelector("#mimoInput")
	element10.setAttribute("type", "range")
}

function updateElement() {
	let element11 = document.querySelector("#mimoInput")
	element10.setAttribute("placeholder", "MyPlaceholder")
}

//*Getting Tags and Classes

/* 
So far we've only looked at ways of accessing one element at a time with methods like getElementById() or querySelector(). 

*But what if we want to access more than one element at a time? For example, what if we wanted to count items in a list?

*We can get a COLLECTION of elements of the same tag type with getElementsByTagName()

*Collections are similar to ARRAYS. They work with indices that start from 0. DDisplay the first element's HTML content.

*Just like with arrays, we can also access the length property of a collection 

*/

function displayItem() {
	let element11 = document.getElementsByTagName("li")
	console.log(element11[0].innerHTML)
	console.log(element11.length)
}
displayItem()
//Output : Flour
//When console.log only the variable element11, it just displays the entire collection of all lists that existed in the HTML. All tags. It returns a collection of elements that have the same tag.

//If we want to return a collection that contains specific elements of a class, we can use the getElementsByClassName() method instead.

function displayTasks() {
	let element12 = document.getElementsByClassName("urgent")
	console.log("You have " + element12.length + " tasks")
}
displayTasks()
//Output: You have 5 tasks.

//Since getElementsByClassName() also returns a collection, we can then access each element through the index. Display the first urgent task.

function displayItems() {
	let element13 = document.getElementsByClassName("urgent")
	console.log(element13[3].innerHTML)
}
displayItems()
//Call John

//To access multiple elements that have mmore than one class, we just add the classes with a space in between (in HTML: class="urgent, important") (in JS: getElementsByClassName("urgent important"))

function displayMultipleClasses() {
	let element14 = document.getElementsByClassName("list urgent")
	console.log(element14.length)
}
displayMultipleClasses()

//*Querying Multiple Elements

//So far we've only been able to retrieve multiple elements if they had the same tag or class name.

function displayH3() {
	let element15 = document.getElementsByTagName("h3")
	console.log(element15[0].innerHTML)
}
displayH3()
//Output: Breaking News

//There's also another more powerful way of getting array-like lists of elements, and that's with the querySelectorAll() method:

function displayAllH3() {
	let element16 = document.querySelectorAll("h3")
	console.log(element16[2].innerHTML)
}
displayAllH3()
//Output: The New Y-Phone

//The great thing about querySelectorAll() is that it works for both tag and class names.

function displayUrgentItems() {
	let element17 = document.querySelectorAll(".urgent")
	console.log(element17)
}
displayUrgentItems()
//Output: NodeList(6) [ li.list,.urgent, li.list,.urgent, li.list,.urgent, li.list,.urgent, li.urgent, li.urgent ]

//We can also use querySelectorAll to look for specific elements, like a h3 element of a class "news"

function displayNewsItems() {
	let element18 = document.querySelectorAll("h3.news")
	console.log(element18)
}
displayNewsItems()
//Output: NodeList(3) [ h3.news, h3.news, h3.news ]

//querySelectorAll() lets us do more advance searches like accessing elements of two different classes at the same time. In this example, we're looking for elements of either class movie or tech. To get elements that belong to 2 different classes, we just add one class after the other separated by a comma.

function displayMovieAndTech() {
	let element19 = document.querySelectorAll(".movie, .tech, h3")
	console.log(element19.length)
}
displayMovieAndTech()
//Output : 2 + 17 buttons

//We can even combine selectors like classes, tags, or ID. A button tage name will display its text in the console for example.

//When querySelectorAll(".movie, .tech") : it returns elements of either class .movie or .tech ! We can combine inside querySelectoreAll, all types of selectors as long as they separated by a comma.

//Toggling CSS classes (https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)

/*
There's a reason why we haven't used setAttribute() to set classes. If we use it to change a class, it overrides the previous class. We can see the issue if we run this code and try to make the text display as both bold and italic.

*There's a better way to add and remove classes and it's with property called classList.

*To add a new class without overriding the previous one, we have to add the classList property. We can then use it to access the add() method.

*Inside the add() method, we code the class we want to add to the element.

*Code bold to add the class once you call the function.

*Classes can be removed from an element as well. To remove a class, code the remove() method.

*If we want to automatically add or remove a class when we call the function, we can use the toggle() method. 
*/

function addBold() {
	let element20 = document.querySelector("#stylechanging")
	element20.classList.add("bold")
}
addBold()

function removeBold() {
	let element21 = document.querySelector("#stylechanging")
	element21.classList.remove("bold")
}

function toggleBold() {
	let element22 = document.querySelector("#stylechanging")
	element22.classList.toggle("bold")
}

//We can add multiple classes to an element at the same time. Let's add two new classes to our paragraph element. We can easily remove multiple classes as well by add remove()

function addClasses() {
	let element23 = document.querySelector("#style1")
	element23.classList.add("highlight", "underline")
}

//To recap, setAttribute() overwrites the element's classes while classList don't.



