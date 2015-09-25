// Step 1 - Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
//var userName = window.prompt("What is your name?");
//window.alert(userName.length); 

//Step 2 - Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
//var userName = window.prompt("What is your name?");
//var entry = window.prompt("Find the letter based on the number");
//window.alert(userName.charAt(entry));

//Step 3 - Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
//var firstName = window.prompt("What is your first name?");
//var lastName = window.prompt ("What is your last name?");
//window.alert("You name is: " + firstName + " " + lastName);	

//Step 4 - Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
//var app = "The quick brown fox jumps over the lazy dog";
//window.alert(app.indexOf("fox"));

//Step 5 - Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
//var app = "The quick brown fox jumps over the lazy fox";
//window.alert(app.lastIndexOf("fox"));

//Step 6 - Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
//var app = "The quick brown fox jumped over the lazy dog";
//var userName =  window.prompt("Please enter your name");
//window.alert(app.replace("the lazy dog", userName));

//Step 7 - Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
//var app = "The quick brown fox jumped over the lazy dog";
//var entry = window.prompt("Please enter any of the words in the sentence \"The quick brown fox jumped over the lazy dog\"");
//window.alert(app.search(entry));

//Step 8 - Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
//var oldString = "The quick brown fox jumps over the lazy dog";
//var newString = (oldString.slice(30, 43));
//window.alert(newString.toUpperCase());

//Step 9 - Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
//var app = "               THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG                     ";
//window.alert(app.trim().toLowerCase());

//Step 10 - Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
//var app = "the quick brown fox jumps over the lazy dog";
//window.alert(app.charAt(0).toUpperCase() + app.slice(1));

//Step 11 - Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
//var app = window.prompt("Please enter any number");
//console.log(Math.abs(app));

//Step 12 - Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
//var app = window.prompt("Please enter any floating point value");
//console.log(Math.ceil(app));

//Step 13 - Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
//var app = window.prompt("Please enter any floating point value");
//console.log(Math.floor(app));

//Step 14 - Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
//var app1 = window.prompt("Please enter a number");
//var app2 = window.prompt("Please enter a number");
//var app3 = window.prompt("Please enter a number");
//var app4 = window.prompt("Please enter a number");
//var app5 = window.prompt("Please enter a number");
//console.log(Math.max(app1, app2, app3, app4, app5), Math.min(app1, app2, app3, app4, app5));

//Step 15 - Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
//var app = window.prompt("Please enter any number");
//console.log(Math.sqrt(app));

//Step 16 - Create an application that gets the current date. Display that result within the console window.
//var app = new Date();
//console.log(app.getDate());

//Step 17 - Create an application that gets the number of days in a month. Display that result within the console window.
//function daysInMonth(month, year) {
//    return new Date(year, month, 0).getDate();
//}
//for(var  i = 1; i < 13; i++) {
//    document.write(daysInMonth(i, 2015) + '<br />');
//}
//console.log(daysInMonth);

//Step 18 - Create an application that gets the month name from a particular date. Display that result within the console window.
//var d = new Date();
//var n =[d.getMonth()];
//if (n == 0) {
//	console.log("January");
//} else if (n == 1) {
//	console.log("February");
//} else if (n == 2)  {
//	console.log("March");
//} else if (n == 3) {
//	console.log("April");
//} else if (n == 4) {
//	console.log("May");
//} else if (n == 5)  {
//	console.log("June");
//} else if (n == 6) {
//	console.log("July");
//} else if (n == 7) {
//	console.log("August");
//} else if (n == 8)  {
//	console.log("September");
//} else if (n == 9) {
//	console.log("October");
//} else if (n == 10) {
//	console.log("November");
//} else {
//	console.log("December");
//}

//Step 19 - Create an application that tests whether a date is a weekend. Display that result within the console window.
//var date = new Date();
//if (date == 0) {
//	console.log("Sunday");
//} else if (date == 6) {
//	console.log("Sunday");
//} else {
//	console.log("Weekday");
//}


//Step 20 - Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
//var d = new Date();
//var day = (d.getDay()-1);
//if (day == 0) {
//	console.log("Sunday");
//} else if (day == 1) {
//	console.log("Monday");
//} else if (day == 2)  {
//	console.log("Tuesday");
//} else if (day == 3) {
//	console.log("Wednesday");
//} else if (day == 4) {
//	console.log("Thursday");
//} else if (day == 5)  {
//	console.log("Friday");
//} else {
//	console.log("Saturday");
//}


//Step 21 - Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
//var d = new Date();
//var day = (d.getDay());
//if (day == 0) {
//	console.log("S");
//} else if (day == 1) {
//	console.log("M");
//} else if (day == 2)  {
//	console.log("T");
//} else if (day == 3) {
//	console.log("W");
//} else if (day == 4) {
//	console.log("T");
//} else if (day == 5)  {
//	console.log("F");
//} else {
//	console.log("S");
//}

//Step 22 - Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
//var num1 = window.prompt("Please enter a number");
//var num2 = window.prompt("Please enter a number");
//if (num1 > num2) {
//	console.log(num1);
//} else {
//	console.log(num2);
//}

//Step 23 - Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
//var students = [['Ursula', 80], ['Paul', 77], ['Henry', 88], ['Tabitha', 95], ['Lucy', 68]];
//

//Step 24 - Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
//for (var x=0; x<=15; x++) {  
//if (x === 0) {  
//	 console.log(x +  " is even");  
//} else if (x % 2 === 0) {  
//	console.log(x + " is even");     
//} else {  
//	console.log(x + " is odd");  
//}  
//} 

//Step 25 - Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
//for (var i = 1; i <= 100; i++)  
//{  
//if (i%3 === 0 && i%5 === 0){  
//	console.log(i + " FizzBuzz");  
//	} else if (i%3 === 0){  
//	console.log(i+ " Fizz" );  
//	} else if (i%5 === 0) {  
//	console.log(i+ " Buzz");  
//	} else {  
//console.log(i);  
//  }  
//}  

//Step 26 - Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
//var x = window.confirm("Are you ready to play a game?");
//if (x == 1) {
//	console.log("Awesome, our hero is waiting!");
//} else {
//	console.log("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//}

//Step 27 - Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
//var y = window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

//Step 28 - Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
//var z = window.prompt ("Which direction would you like to head (please enter forward, left, or right)?");
//if (z == "forward") {
//	console.log("You walk about 100 yards and safely make your way out of the cave.");
//} else if (z == "left") {
//	console.log("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//} else if (z === "right") {
//	console.log("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//} else {
//	console.log("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//}

//Step 29 - Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
//var rate = window.prompt("Please rate our game on a scale of 1 to 10");
//if (rate <= 10 && rate >= 6) {
//	console.log("Thank you, we will continue to make improvements to the game!");
//} else {
//	console.log("Whatever, you weren’t very good at this game anyway!");
//}

//Step 30 - Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
//var rate = window.prompt("Please rate our game on a scale of 1 to 10");
//if(rate <= 10 && rate >= 1){
//	if (rate <= 10 && rate >= 6) {
//	console.log("Thank you, we will continue to make improvements to the game!");
//	} else {
//		console.log("Whatever, you weren’t very good at this game anyway!");
//	}
//} else {
//  console.log("Thank you, we will continue to make improvements to the game!");
//}

//Step 31 - In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps.
//coinFlip = Math.random();
//window.prompt("Do you choose Heads or Tails?").toLowerCase();
//if (coinFlip <0.5) {
//	coinFlip=="heads";
//}
//else {
//	coinFlip=="tails";
//}
//if (coinFlip=="heads"&& choice=="heads")  {	
//    alert("The flip was heads and you chose heads...you win!");
//} else if (coinFlip=="heads" && choice=="tails") {
//    alert("The flip was heads but you chose tails...you lose!");
//} else if (coinFlip=="tails" && choice=="heads") {
//	alert("The flip was tails and you chose heads...you lose!");
//} 
//else {
//	alert("The flip was tails and you chose tails...you win!");
//}

//Step 32 - In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps.
//coinFlip = Math.random();
//window.prompt("Do you choose Heads or Tails?").toLowerCase();
//if (coinFlip <0.5) {
//	coinFlip=="heads";
//}
//else {
//	coinFlip=="tails";
//}
//if (coinFlip=="heads"&& choice=="heads")  {	
//    alert("The flip was heads and you chose heads...you win!");
//} else if (coinFlip=="heads" && choice=="tails") {
//    alert("The flip was heads but you chose tails...you lose!");
//} else if (coinFlip=="tails" && choice=="heads") {
//	alert("The flip was tails and you chose heads...you lose!");
//} 
//else {
//	alert("The flip was tails and you chose tails...you win!");
//}

//Step 35 - Write a loop that displays the following triangle within a console window:
//var x,y,z;
//for(x=1; x<=7; x++)
//{
//   for (y=1; y<x; y++)
//     {
//    z=z+("#");        
//      }
// console.log(z);
// z="#";    
//}

//Step 36 - Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
//for (var x=0; x<=15; x++) {  
//if (x === 0) {  
//	 console.log(x +  " is even");  
//} else if (x % 2 === 0) {  
//	console.log(x + " is even");     
//} else {  
//	console.log(x + " is odd");  
//}  
//}
