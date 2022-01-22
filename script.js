
let homeCity = "Chicago"; //This is a string stored in the variable homeCity
// This is a camel case : star with a lowercase letter and capitalize the additional words.

//This is a console.log
console.log("1, 2, 3")

let name1 = "Lucie";
console.log(name1)

// Variables are called variables because the values they store can change. Use the sign = to change the value in status from "Watching tv" to "Relaxing at the beach"
let status = "Watching tv";
status = "Relaxing at the beach";
console.log(status)

//We can add string values together with a + sign. It will add the value together.
bouquet = "Flowers" + "Vessel";

/* === equality operator, !== inequality operator, <= less than or equal to operator, >= greater than or equal to operator.
We can compare using === in conditions, number, strings and booleans. */

//A variable assignment is storing a value inside a variable

let min = 5;
let max = 10;
let result = min <= max;
console.log(result);
//Output: true. 

console.log(10 >= 10);
//Output: true.

let batteryLevel = 10;
let low = batteryLevel <= 20;
console.log("Low battery: " + low);
//Output: Lowbattery: true.

let points = 12;
let levelTwo = points <= 10;
console.log("Level 2: " + levelTwo);
//Output: Level 2: true.

//Check if solved is less than or equal to minimum:
let solved = 20;
let minimum = 10;
let lostStreak = solved <= minimum;

/* What type is the result of joining a string with a number = a string.
What is the result of joining a string and a boolean = a string. */

//Conditionnal statements
if (true) {
	console.log("Hello");
}

let greet = true;
if (greet) {
	console.log("Hello")
}

let answer = "Picasso";
if (answer === "Picasso") {
	console.log(answer + " is correct");
}

let score = 51;
let pass = score > 50;
if (pass) {
	console.log(pass);
}
//Output: true.

//We can avoid rewriting the same comparaison multiple times by saving its result in a variable and reuse the variable. 

let inboxFull = true;
let showAlert = inboxFull === true;

if (showAlert) {
	console.log("Your inbox is full.");
	console.log("You can't receive any more emails.");
}
/* Output: Your inbox is full.
You can't receive any more emails.*/

let hour = 9;

if (hour < 12) {
	console.log("Good morning");
} else {
	console.log("Good night")
}
//Output: Goodmorning

let hoour = 14;

if (hour < 12) {
	console.log("Good morning");
} else if (hour < 17) {
	console.log("Good afternoon")
}

let age = 16;

if (age <= 12) {
	console.log("Where are your parents?");
} else if (age <= 16) {
	console.log("You're too young to ride this car");
} else if (age <= 100) {
	console.log("It's ok for you to ride.")
}
//Output: You're too young to ride this car

//Self-assigning variables
let wallet = 3;
wallet = wallet;

/* Because we can self-assign variables, we can increase or decrease variables set to numbers. 
Self assigning variables let us track data that changes over time. A user might add 2 dollars to a wallet then remove 1: 
*/
wallet = wallet + 2;
wallet = wallet - 2;
console.log(wallet);

//Variables set to strings work the same way.
let name = "Account name: ";
name = name + "Elton";
name = name + " John",
console.log(name);

//Assigning with operators
let like = 5;
like = like + 1;
console.log(like)

//Same as :
let likes = 5;
likes+=1;
console.log(likes)

/* Decreasing by 3 : "-=3"
Increment Operator is placed after a variable's name. Same with decrement operator : "kudo--"*/
let kudo = 5;
kudo++;
console.log(kudo);

/*Repeating Code with While Loops
while (true) {
	console.log("and again");
}
*/

let keepPlaying = true;
while (keepPlaying === true) {
	console.log("Now Playing: Ryan Paris");
	keepPlaying = false;
}
//Output : une fois  'Now Playing: Ryan Paris'

//Skip the loop by updating the autoPilotOn variable :

let autoPilotOn = false;
while (autoPilotOn === true) {
	console.log("Autopilot on: Vroooom!");
	autoPilotOn = false;
}

//Controlling the while loop

let counter = 1;
while (counter < 4) {
	console.log(counter);
	counter++;
}

//Since the whole coded block runs, the order you write code affects what the console displays
// let counter1 = 0;
// while (counter1 < 5) {
// 	console.log("*********------------");
// 	counter1++;
// }

let counter2 = 0;
while (counter2 < 4) {
	console.log("------------------------");
	counter2++;
}

//For loops make this program easier :

for (let i = 0; i < 4; i++) {
	console.log("*********---------------");
}

for (let i = 0; i < 4; i++) {
	console.log("------------------------");
}

//The code of a for loop is easier to read because the information for the times the loop repeats is inside the parentheses. i is the counter here.

for (let i = 1; i < 5; i++) {
	console.log("Round" + i);
}

for (let index = 1; index < 5; index++) {
	console.log(index);
}

//Looping Downward

//This for loop counts upward from 1 to 5. Let's learn how to change it to loop downward from 5 to 1:
for (let i = 1; i < 6; i++) {
	console.log(i);
}
// Output 1 2 3 4 5 

for (let i = 5; i > 0; i--) {
// If i++ infinite loop
	console.log(i);
}

// To INCLUDE 0 when counting down, we use <= instead of >.

for (let i = 5; i >= 0; i--) {
	console.log(i);
}
//Output 5 4 3 2 1 0 

//What happens when we use i > 0 in the condition instead of i < 0 ? 

for (let i = 5; i > 0; i--) {
	console.log(i)
}
//Output: The loop continues while i is greater than 0 so : 5 4 3 2 1 

//Include 1 when counting down : 
for (let i = 5; i >= 1; i--) {
	console.log(i);
}

//Grouping values with Arrays : bigger apps group similar values, like the names of friends in a social network.
let friend1 = "Tom";
let friend2 = "Mia";
let friend3 = "Lee";

//Rather than creating a variable for each friend's name we can group all of the values into an array using [ ].
let friends = ["Tom", "Mia", "Lee"];
console.log(friends);

//To create an empty array, we code let friends = [];

/*Changing Values in Arrays with a weather app where an array can store and update values. We can imagine an array like a chest of drawers. A drawer can store any variable or value, be it a string a boolean or a number.*/

let temperatures = [17, 20, 26, 24];

//Every element in a array has a numbered position called an index. That means the second element in temperatures is at index 1. 

console.log(temperatures[ 1 ]);
//Output: 20;

//To change the temperature value at the second index, access it through temperatures[2], then use "=" to assign it a new value like 25.

temperatures[2] = 25;
console.log(temperatures);
//Output: [ 17,20,25, 24 ]

//Pushing and Popping Arrays

//To add a value like "groceries" to an array, we can code the array name toDo folloowed by a period "." then the instruction PUSH ("groceries"). The new value goes to the end of the aray.
let toDoList = ["call mom", "dishes"];
toDoList.push("groceries");
console.log(toDoList);
//Output : ['call mom', 'dishes', 'groceries']

//To remove the last element of the array, we coded the array name toDo, a period "." then the instruction POP variable.pop("elementofarray"). We can save the value removed by storing it in a variable
let toDo = ["call mom", "dishes"];
let chores = toDo.pop();
console.log(chores);
//Output : dishes

let activeUsers = ["Sue", "Mike"];
activeUsers.push("Jane");
console.log(activeUsers);
//Output: [ 'Sue', 'Mike', 'Jane' ]

let themes = ["classic", "dark mode"];
let current = themes.pop();
console.log(current);
//Output : dark mode

//Deciding with Arrays, count elements in array etc...

let reminders = ["dishes", "windows", "vaccum"];
console.log(reminders.length);
//Output : 3

let length = reminders.length;
console.log(length);
//Output : 3

//We can use the length of an array to create condditionnal statements that depend on its number of elements.

let tasks = ["dishes", "windows", "vaccum"];

if (tasks.length > 0) {
	console.log("There is a lot of work here :(");
}

//We can also use the length of an array to create for loops that go through all of its elements. For that we repeat a loop as many times as there are elements in the array.

let coworkers = ["Ana", "Eve", "Sam"];

for (let i = 0; i < 3; i++) {
	console.log(i);
}
//Output : 0 1 2 

//Repeat the for loop 3 times by specifying that "i" needs to be less than 3 :
let animals = ["Cat", "Dog"];

for (let i = 0; i < 3; i++) {
	console.log(i);
}
//Output : 0 1 

//Instead of specifying that "i" needs to be less than 3, we can also use the length of the array.
let food = ["Milk", "Bread", "Cauliflower"];

for (let i = 0; i < food.length; i++) {
	console.log(i);
}
//Same output : 0 1 2 

//The couter variable "i", stores the value 0 1 2 as the loop repeats. But 0 1 2 are also the indices of the elements in food, animals or coworkers.

//Everytime the loop repeats, "i" stores an index of an element in the food, animals or coworkers array. We can use this index to access the element.
let water = ["Evian", "Vittel", "Cristalline"];
for (let i = 0; i < friends.length; i++) {
	console.log(friends[i]);
}
//Output : Evian Vittel Cristalline

//Take the loop for a spin: use the counter variable "i", as the index to display all the elements in cars:
let cars = ["Toyota", "Lexus", "Opel"];
for (let i = 0; i < cars.length; i++) {
	console.log(cars[i]);
}

//Reusing Code with Functions

//Fonctions are used to group related code and perform the task in one place.
//We name a function by using camel case.

function greetUser() {
	console.log("Good morning");
	console.log("Welcome back");
}
// To run the code we need to call the function.
greetUser();

//Creating parameters

// Sometimes functions need specific information to help them perform their tasks. Like a function that adds a player's name to a team.

function greetRon() {
	let nickname = "Ron";
	console.log("Hello, " + name);
} 
greetRon();

//We can pass a specific information without repeating code:
function choose(choice) {
	console.log("I choose : " + choice);
}
choose("Pikachu");
choose("Charizard");

//To pass a value to a function, we first add a variable called a parameter inside the parentheses of the function. A parameter acts as a special variable that stores a value.
function displayHalf(number) {
	let half = number / 2;
	console.log(half);
}
displayHalf(10);
//Output: 5

//Returning Values
//This will returns a value to the code that called it to help perform its task.

function timesTen(number) {
	let operation = number * 10;
	return operation;
}
//Output : timesTen(4) = 40

function greaterThanTen(number) {
	let isGreater = number > 10;
	return isGreater;
}
//Output : greaterThanTen(4) = false

/* We can use the return value of a function like any value by calling the function. Here, we call userAge(22) to use its value. 
We can store the return value in a variable too. Here we store the return value in "ageResult" and display it in the console. */

function userAge(number) {
	let age = "User age: " + number;
	return age;
}
let ageResult = userAge(12);
console.log(ageResult);

/* If we don't include a return statement inside the function, the function returns the value "undefined" instead.
A function can return a signe value at a time.
We use the return value by calling the function and use it like any other value.
We store the return value by calling the function and store it in a variable. */

function giveMeTen() {
	return 10;
}
console.log(giveMeTen());

function addGreating(user) {
	let greeting = "Greetings " + user;
	return greeting
}
let salutation = addGreating("Lucie");
console.log(salutation);
//Output = "Greetings Lucie"

function lessThanFive(number) {
	let lessThan = number < 5;
	return lessThan;
}
let calculus = lessThanFive(10);
console.log(calculus);
//Output = false

//Using Multiple Parameters

//Functions need multiple parameters to work with two or more pieces of data, like a first and last name.

function display(firstName, lastName) {
	console.log(firstName + " " + lastName);
}
display("John", " Elton");

//Values get passed to a function in the same order parameters do. 

function displayWinners(first, second) {
	console.log("1st: " + first);
	console.log("2nd: " + second);
}
displayWinners("Amy", "Jake");
//Output: 1st: Amy 2nd: Jake

function displayAnimals(first, second, third) {
	console.log(first + " " + second + " " + third);
}
displayAnimals("duck", "goose", "elephant");
//Output: duck goose elephant

//When we pass values to a function with multiple parameters, the values and the parameters have to be in the same order. 

function createID(name, year) {
	return name + year + "@gmail.com";
}
let email = createID("dupuis", "1994");
console.log(email);

//Understanding functions
/* Functions names should be descriptive and let us know the main thing the function does.
Functions are actions, so their names should contain at least on verb. When using multiple words, the verb is a prefix, like "sumTotal". */

function sumTotal(price, tax) {
	console.log(price + tax);
}
sumTotal(1000, 240);

//Functions that mainly return a valut without changing it in any way start with verbs like "get"

function getName(fullName) {
	return fullName[0];
}
let fullName = ["Don", "Juan"]
let appelation = getName(fullName);
console.log(appelation);
//output : Don

//As a special case, functions that return boolean values often star with "is"

function isFreezing(temperature) {
	return temperature < 0;
}
let freezing = isFreezing(-3);
console.log(freezing);
//output : true

//Function names should be consistent. If one function is called "calculateDifference", a similar function should have the same verb prefix.

function calculateSum(a, b) {
	return a + b;
}

function calculateDifference(a, b) {
	return a - b;
}

let sum = calculateSum(20, 10);
let difference = calculateDifference(10, 5);

console.log(sum);
console.log(difference);

//While we don't have to remember the code of every function un a program, we ddo have to pass the right input to get the right output:

let author = "John Steinback";
let title = "Tortilla Flat";
let date = "1991";

function displayAuthor() {
	return author;
}
function displayTitle() {
	return title;
}

function displayDate() {
	return date;
}
console.log(title);
displayTitle(title);
displayDate(date);

//A function input can be a different type than the output 
function isSameWord(word) {
	console.log(word === "bombastic");
}
isSameWord("bombastic");
//Output : true

//An output is what a function displays in the console or what it returns. 

//*Functions with arrays as parameters.*

//Displaying the entier array
function displayNames(names) {
	console.log(names);
}
let students = ["Laurel", "Yanni"];
displayNames(students);
//Output : [ 'Laurel', 'Yanni' ]

//We could display the length of the array.
function displayNumberOfNames(names) {
	console.log(names.length);
}
let pupils = ["Laura", "Caroline"];
displayNumberOfNames(pupils);
//Output: 2

//Now, we use a single element of the array.
function displayFirstName(names) {
	console.log(names[0]);
}
let customer = ["Lili", "Cameron"];
displayFirstName(customer);
//Output: Lili

//We can pass an array to a function because we want to return a part of it:
function getFirstName(names) {
	return names[0];
}
let villagers = ["Maria", "John"];
let firstMember = getFirstName(villagers)
console.log(firstMember)
//Output: Maria

//We can use multiple elements from an array to return a certain kind of output we need for the next step in our code.

function getListOfNames(names) {
	return names[0] + ", " + names[1];
}
let vacationers = ["Vera", "Martha"];
let list = getListOfNames(vacationers);
console.log(list);

function displayGroupInfo(array) {
	console.log(group.length);
	console.log(group[1]);
}
let group = ["Lorenzo", "Tama"];
displayGroupInfo(group);
console.log(group);

function getFullName(group) {
	return group[1] + " " + group[0];
}
let scientist = ["Vera", "Rubin"];
let association = getFullName(scientist);
console.log(scientist);

//**Objects**

let favoriteFood = "Lasagna";
let petName = "Garfield";

//Instead of using two separate variables to describe our cat, we can group these into one variable, known as an object.

let pet = {
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
console.log(person.nickname);
//Output: Queen

//After accessing a property value, we can update it using an equal sign:
person.nickname = "Candy";
console.log(person);
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
console.log(tiger.scream("dinner is served."));

let phone = {
	brand: "Xiaomi",
	number: "555-555-555",
	ring: function() {
		console.log("Ding ding ding!");
	},
	call: function(number) {
		console.log("Calling " + number);
	},
};

phone.ring();
phone.call();

//*How to use methods to access and update our object's properties.*

//The keyword "THIS" refers to the object that contains the method. In this case "cereal"
let cereal = {
	name: "Crunch",
	display: function() {
		console.log(this.name);
	}
};
cereal.display();
//Output when just this: Object { name: "Crunch", display: display() }
//Output when this.name: Crunch

//Similarly, we can use "this" followed by a period to update the object's properties from inside its methods.

let laundry = {
	name: "Skip",
	changeLaundry: function() {
		this.name = "Ariel";
		console.log(this.name);
	}
};

laundry.changeLaundry();
//Output: Ariel

//The "this" keyword can only be used to access an object's properties INSIDE the object's method. That's why outside we type "laundry" instead of this.

//The keyword "this" refers to the object that contains the method. In this case: "meal".
let meal = {
	ingredients: "fish",
	display: function() {
		console.log(this);
	}
};
meal.display();
//Output: Object { ingredients: "fish", display: display() }

//For updating the object's properties from inside its methods, we can use "this" followed by a comma and the properties that we want to update. 

let sport = {
	type: "bike",
	changeSportDisplay: function() {
		this.name = "walk";
		console.log(this.name);
	}
};
sport.changeSportDisplay();
//Output: walk

//Again : "this" keyword can only be used to access an object's properties INSIDE the object's method. 

//**Reusable Programs, building functions that change their output based on input.**

//*Nesting conditionals statements inside functions*

function displayMessage(message) {
	console.log(message);
}
displayMessage("Approved");

//We can add other code blocks inside a function. When we do that, the extra pair of braces let us know which instructions belong where.

function isRentingAge(age) {
	if (age >= 21) {
		console.log("Approved");
	}
}
isRentingAge(26);
//Output: Approved

//Wrapping if statements inside functions helps us organize and reuse our codde. Now we can use the same if statement with a function call like so : isRentingAge(26); 

//Instructions outside of nested code blocks still get executed, even if the code inside the conditionnal statement gets skipped

function isBuyable(game) {
	if (game >= 70) {
		console.log("Approved");
	}
	console.log("Check complete");
}
isBuyable(71);
//Output: Check complete
//Not "Approved" because it's skipped.

function isLying(boolean) {
	console.log("Welcome to the lie Detector 3000");
	if (boolean === false) {
		console.log("He's lying");
	}
}
isLying(false);
//Output: Welcome to the lie Detector 3000. He's lying.

function getTaxedSalary(salary) {
	if (salary > 2100) {
		salary = salary - 500;
	}
return salary;
}
let income = getTaxedSalary(2100);
console.log(income);
//Output: 2100

//*Using conditions and functions*

/* When creating functions, we have to think about when and why we need conditional statements inside of them.
For example anytime you enter a password, a function with a conditionnal statement decides what message to show you.*/

function applySeniorDiscount(age) {
	if (age >= 65) {
		console.log(age + " year old has 50% off");
	}
}
applySeniorDiscount(18);
applySeniorDiscount(67);

//Output: 67 year old has 50% off

//Another way conditionnals get used inside functions is when they need to compare two values.
function isNumberGreater(a, b) {
	if (a > b) {
		console.log(a + " is greater than " + b);
	} 
}
isNumberGreater (13, 10);

//If we want to provide output for the wrong input, we add an "else" statement to the function. We add a conditional statement inside when the function's behavior changes based on its parameters.

function checkPassword(word) {
	if (word === "123456") {
		console.log("Login complete");
	} else {
		console.log("Retry please");
	}
}
checkPassword("12345");
//Output: Retry please

//We fifgure out how many values we need to pass to a function by checking how many parameters the conditional statement needs.

function whichNumberGreater(a, b) {
	if (a > b) {
		console.log(a + " is greater");
	} else {
		console.log(a + " isn't greater");
	}
}
whichNumberGreater(10, 20);
//Output: 10 isn't greater
//Because we're talking about the a value which is represented by the number 10. So we display his condition not the 20 one.

//*Stopping functions with return statements to exit functions at any time, even in the middle of the code*

/*Anything after a return statement doesn't execute. Here, the display statement after the return statement doesn't work.
If we have multiple return statements, whichever one gets run first exits the function.*/

function multiplyByTen(number) {
	//return number * 10;
	console.log("This won't get executed");
	return "This line doesn't get executed either";
}

let multiplication = multiplyByTen(40);
console.log(multiplication);

/*If we use conditional statements, we can use return to stop a function at different parts of the code based on the input.
Return statements at the end of the function and outside of any conditional statement are run only if no conditions have been met like "No Discount" */
function getDiscount(age) {
	if (age >= 65) {
		return "50% OFF";
	}
return "No Discount";
}

let discount = getDiscount(67);
console.log(discount);
//Output: 50% OFF

function canDrive(age) {
	if (age > 16) {
		return "You can drive";
	} else if (age === 16) {
		return "You can pass your licence";
	}
return "You cannot drive yet";
}

let drivepossible = canDrive("17");
console.log(drivepossible);
//Output: You can drive

//*Calling loops in functions and influence their outputs.*

function displayNumbers() {
	for (let i = 1; i <= 3; i++) {
		console.log("Let's go in " + i);
	}
}
displayNumbers();

//We can use parameters to get different resuluts from the same loop. 

function displayExercices(number, message) {
	for (let i = 1; i < 10; i++) {
		console.log( i + message );
	}
}
displayExercices(5, " Jumping Jack");
displayExercices(5, " Push-Up");
displayExercices(5, " Squat");

function displayNumbersAndMessage(message) {
	for (let i = 0; i < 10; i++) {
		console.log(i + message);
	}
}
displayNumbersAndMessage(" snow flakes");

//We can also use parameters to change opertaions like multiplication. This one function is enough to create different multiplication tables.

function displayMultiplieddNumbers(multiplier) {
	for (let i = 0; i <= 10; i++) {
		console.log(i * multiplier);
	}
}
displayMultiplieddNumbers(10);

//When we use a parameter in the function, depending on the value passed to it, the function displays a different message.

function displayPageNumbers(page) {
	for (let i = 1; i <= 20; i++) {
		console.log(page + i);
	}
}
displayPageNumbers("Page ");

//We can pass values as parameters to control how many times a loop gets executed. Display "Beetlejuice" three times by passing a number : 

function summonBeetlejuice (title, times) {
	for (let i = 0; i < times; i++) {
		console.log("I've seen " + "Beetlejuice " + times + " times it was great");
	}
}
summonBeetlejuice("Beetlejuice", 3);

//To controle where a loop starts, we use a parameter to set the counter variable's value. This code displays the days left in a month.

function displayDaysLeft(day) {
	for (let i = day; i < 31; i++) {
		console.log(i);
	}
}
displayDaysLeft(26);

//We can use parameters to set both the start and end values. This code only displays numbers in between the values we passed to the function. 

function displayInterval(start, end) {
	for (let i = start; i < end; i++) {
		console.log(i);
	}
}
displayInterval(26, 51);

function drawStars(times) {
	for (let i = 0; i < times; i++) {
		console.log("*");
	}
}
drawStars(5);

function displaySign(sign, times) {
	for (let i = 0; i < times; i++) {
		console.log(sign);
	}
}
displaySign("#", 3);

function displayCountdown(start) {
	for (let i = start; i > 0; i--) {
		console.log(i);
	}
console.log("Launch!");
}
displayCountdown(6);

//*Loooping over arrays*

//How to use functions to go over arrays and manipulate their values whenever we want, like when we click a button.

let grades = [91, 66, 77, 84, 66];
let search = 66;

function searchGrade(gradeds, search) {
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] === search) {
			console.log("This is the correct grade");
			break;
		}
	}
}
searchGrade(grades, search);
//Output: This is the correct grade.

//Functions are useful when we want to execute reusable code. To access array elements using the searchGrade function, let's pass the grades array when calling the function.

let localisation = [48.89684744988406, 2.2918054818719025];

function searchLocalisation(localisation) {
	console.log(grades);
}
searchLocalisation(grades);
//Output: [ 48.89684744988406, 2.2918054818719025 ]

//If we want to access elements stored in multiple arrays using the same function, we pass the arrays as arguments when calling that function. Let's code the seconde array latitude, when calling searchPosition()

let latitude = [48.89684744988406, 48.89684744988407];
let longitude = [2.2918054818719025, 2.2918054818719026];

function searchPosition(latitude, longitude) {
	console.log(latitude);
	console.log(longitude);
}
searchPosition(latitude, longitude);
//Output : [ 48.89684744988406, 48.89684744988407 ] [ 2.2918054818719025, 2.2918054818719026 ]

//once we've passed an array to a function, we can iterate over the array elements. Create a for loop to iterate through all grades elements.

let plants = [1, 2, 44, 67];

function searchPlants(plants) {
	let len = plants.length;
	for (let i = 0; i < len; i++) {}
}
searchPlants(plants);

//To retrieve each array element inside a for loop, we use the syntax array[i], where "i" is the current iteration, and array is the array name. Let's write the code to retrieve individual pens elements. 

let pens = [1, 6, 7, 29];

function searchPens(pens) {
	for (let i = 0; i < pens.length; i++) {
		console.log(pens[i]);
	}
}
searchPens(pens);

//By using a function, an array, and another parameter, we can do a lot. For example, let's search for the element 44 in the lights array by passing lights and then search to the searchLight function.

let lights = [12, 13, 14, 15];
let searches = 44;

function searchLight (lights, searches) {
	for (let i = 0; i < lights.length; i++) {
		if (lights[i] === searches) {
			console.log("This is the correct light");
			break;
		}
	}
}
searchLight(lights, searches);

//We access array elements for whithin a function, by passing the array to the function.

let prices = [99, 129, 159];
let discounts = 0.5;

function applyDiscount(prices, discounts) {
	for (let i = 0; i < prices.length; i++) {
		console.log(prices[i] * discounts);
	}
}
applyDiscount(prices, discounts);


