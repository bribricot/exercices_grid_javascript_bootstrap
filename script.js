
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
name = name + "John",
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
let counter1 = 0;
while (counter 1 < 5) {
	console.log("*********------------");
	counter++;
}

let counter2 = 0;
while (counter2 < 4) {
	console.log("------------------------");
	counter2++;
}

//For loops make this program easier :

for (let i = 0; i < 4; i++) {
	console.log("*********------------");
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
	console.loge(i);
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
for (let i = 5; i >= 1; i--;) {
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

/*Changing Values in Arrays with a weather app where an array can store and update values. We can imagine an array like a chest of ddrawers. A drawer can store any variable or value, be it a string a boolean or a number.*/

let temperatures = [17, 20, 26, 24];

//Every element in a array has a numbered position called an index. That means the second element in temperatures is at index 1. 

console.log(temperatures[ 1 ]);
//Output: 20;

//To change the temperature value at the second index, access it through temperatures[2], then use "=" to assign it a new value like 25.

temperature[2] = 25;
console.log(temperatures);
//Output: [ 17,20,25, 24 ]

//Pushing and Popping Arrays

//To add a value like "groceries" to an array, we can code the array name toDo folloowed by a period "." then the instruction PUSH ("groceries"). The new value goes to the end of the aray.
let toDo = ["call mom", "dishes"];
toDo.push("groceries");
console.log(toDo);
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

let tasks = ["dishes", "windows", "vaccum"];
console.log(tasks.length);
//Output : 3

let length = tasks.length;
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

