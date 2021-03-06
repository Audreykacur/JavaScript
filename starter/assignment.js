/*
console.log("Name lecture");
console.log("  ");
console.log("Name assignment");
console.log("  ");
*/

/*console.log("  ");

console.log("Values and Variables assignment");
const country = "United States";
const continent = "North America";
let population = 329500000;
console.log(country); //logs the values the variables holds
console.log(continent);
console.log(population);
console.log("  ");
*/
/*
console.log("Data Types lecture");
true;
console.log(true);
let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);
JavaScriptIsFun = "fun";
console.log(JavaScriptIsFun);
console.log(typeof true);
console.log("  ");
*/
/*
console.log("Data Types assignment");
let isIsland = false; //boolean datatype
let language; //undefined datatype
console.log(typeof isIsland); //logs the type of a value
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log("  ");
*/

//dynamic typing - do not have to manually define the datatype of the value that it contains 
//automatically determines the datatype of the value when it is stored in a variable  
//the value has a type not the variable 
//variables store the value which has the type 
//variables with the same name can hold different variable type 

//commenting in javaScript 
//single line comment 
// command / creates a single line comment
/*
this is a multiline comment
command / creates a comment
*/


/*
console.log("let conts and var lecture");
let age = 30;//let is used when using a variable that can be changed later or creating empty variables
age = 31; // reassign a variable to a new value (mutated the variable)
const birthYear = 1991; //const variables are not suppose to change and can not be empty
//birthYear = 1990; //not valid
console.log("  ");
*/

/*
console.log("let conts and var assignment");
language = "English";
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(population);
console.log(country);
console.log(language);
console.log("  ");
console.log("  ");
*/


/*
console.log("Basic Operators lecture");
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // ** is the exponent operator
let lastName = "Fred";
console.log(firstName + " " + lastName); //concatinating strings

//assignment operator
let x = 10 + 5; // x is assigned 15
console.log(x); // x = 15
x += 10; // 15 + 10 = 25
console.log(x); // x = 25
x *= 4; // x = 100
console.log(x);
x++;
console.log(x); // x = 101
x--;
console.log(x); // x = 100
//comparison operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 20181);
console.log("  ");
*/

/*
console.log("Basic Operators assignment");
console.log("the amount of people in half my country is equal to " + population / 2);
console.log(population);
console.log(++population);
const finlandPop = 6000000;
console.log(population > finlandPop);
let averagepop = 33000000;
console.log(population < averagepop);
let description = 'The United States is in North America, and its' + population + 'million people speak english';
console.log("  ");
console.log("  ");
*/

/*
//     Coding Challenge #1
//     Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula
// const BMI = mass / height ** 2 //= mass / (height * height)
//     (mass in kg and height in meter).

//     Your tasks:
//     1. Store Mark's and John's mass and height in variables
// const marksMass, marksHeight, johnsMass, johnsHeight;
//     2. Calculate both their BMIs using the formula (you can even implement both versions)
// const marksBMI = marksMass / (marksHeight ** 2);
// const johnsBMI = johnsMass / (johnsHeight ** 2);

//     3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// let markHigherBMI = marksBMI > johnsBMI;

//     Test data:
//         Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
const marksMass = 78, marksHeight = 1.69, johnsMass = 92, johnsHeight = 1.95;
const marksBMI = marksMass / (marksHeight ** 2);
const johnsBMI = johnsMass / (johnsHeight ** 2);
let markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI);
console.log(johnsBMI);
console.log(markHigherBMI);

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
const marksMass2 = 95, marksHeight2 = 1.88, johnsMass2 = 85, johnsHeight2 = 1.76;
const marksBMI2 = marksMass2 / (marksHeight2 ** 2);
const johnsBMI2 = johnsMass2 / (johnsHeight2 ** 2);
let markHigherBMI2 = marksBMI2 > johnsBMI2;
console.log(marksBMI2);
console.log(johnsBMI2);
console.log(markHigherBMI2);
*/
/*
console.log("Strings and Template Literals lecture");
const firstName = "audrey";
const job = "student";
const birthYear = 2001;
const currentYear = 2022;
const audrey = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + ".";
console.log(audrey);
// type coersion - java script will convert the number into a string so it can concatinate with the rest of the strings
//Template literals - can assemble multiple peices into one final string (use backticks to tell javascript that you are doing a template literals)
const audreynew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}.`;
console.log(audreynew);
//you can use backticks to write all strings it does not need to have ${} in it
console.log(`This is a string with use of backticks`);
//template literals for multiline stings
console.log(' String \n\ with \n\ multiple \n\ lines'); //only works becasue there is an error in the code
//just press enter to create a new line
console.log(`String
with
multiple
lines using backtiks(template literals)`);
console.log("  ");
*/
/*
console.log("Strings and Template Literals assignment");

const country = "United States";
const continent = "North America";
let population = 329500000;
let isIsland = false; //boolean datatype
let language; //undefined datatype
language = "English";
console.log("the amount of people in half my country is equal to " + population / 2);
const finlandPop = 6000000;
let averagepop = 33000000;
let description = 'The ' + country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);
console.log("  ");
description = `The ${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
console.log("  ");
*/
/*
console.log("Taking decisions: if/else statement lecture");
//write a program that checks weather a person is allowed to start getting a drivers license or not and if they are it will print it to the console and if not it will print how many more years they have to go
const age = 12;
const isOldEnough = age >= 18; //if the age is 18 or above this boolean will be true

//an if else control structure - have more control over how the code works
if (isOldEnough) {
    console.log(`???? You are old enough to start your drivers license process ????`)
}
else {
    console.log(`Sorry you have ${18 - age} more years till you can get your license ????`)
}
//command control space to pull up emojis on mac
let century;
const birthYear = 2001;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);


console.log("  ");
console.log("Taking decisions: if/else statement assignment");
const country = "United States";
const continent = "North America";
let population = 329500000;
let isIsland = false; //boolean datatype
let language; //undefined datatype
language = "English";
console.log("the amount of people in half my country is equal to " + population / 2);
const finlandPop = 6000000;
let averagepop = 33000000;
description = `The ${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
console.log("  ");

if (population >= 33000000) {
    console.log(`${country}'s population is above average`)
}
else {
    console.log(`${country}'s population is ${33000000 - population} below average`)
}

console.log("  ");



//         Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
const marksMass = 78, marksHeight = 1.69, johnsMass = 92, johnsHeight = 1.95;
const marksBMI = marksMass / (marksHeight ** 2);
const johnsBMI = johnsMass / (johnsHeight ** 2);
let markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI);
console.log(johnsBMI);
console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark has a higher BMI when compared to John
    Mark's BMI: ${marksBMI}
    John's BMI: ${johnsBMI}`);
}
else {
    console.log(`John has a higher BMI when compared to Mark
    Mark's BMI: ${marksBMI}
    John's BMI: ${johnsBMI}`);

}

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
const marksMass2 = 95, marksHeight2 = 1.88, johnsMass2 = 85, johnsHeight2 = 1.76;
const marksBMI2 = marksMass2 / (marksHeight2 ** 2);
const johnsBMI2 = johnsMass2 / (johnsHeight2 ** 2);
let markHigherBMI2 = marksBMI2 > johnsBMI2;
console.log(marksBMI2);
console.log(johnsBMI2);
console.log(markHigherBMI2);
if (markHigherBMI2) {
    console.log(`Mark has a higher BMI when compared to John
    Mark's BMI: ${marksBMI2}
    John's BMI: ${johnsBMI2}`);
}
else {
    console.log(`John has a higher BMI when compared to Mark
    Mark's BMI: ${marksBMI2}
    John's BMI: ${johnsBMI2}`);

}
*/
/*
console.log("Type Conversion Type Coercion lecture");
//Type conversion
const inputYear = `1991`;
//to convert a string to a number use the number function
console.log(Number(inputYear)); //the original value is not converted
console.log(Number(inputYear) + 18);
console.log(Number("audrey")); //will print NaN - not a number --> an invalid number
console.log(String(23));
//Type Coercion
//when an operator is dealing with two values of different types it convers one of the valuse to match the other value --> it turns numbers into strings when putting them into a sentence
console.log('23' - '10' - 3); //this changes the values to numbers because its subtraction
let n = '1' + 1; //n = '11'
n = n - 1; //n = '11' - 1 = 10
console.log(n); // 10
//2+3+4+'5'  --> 2+3+4 =9 +'5' --> 95
*/

/*
console.log("  ");
console.log("Type Conversion Type Coercion assignment");

console.log('9' - '5'); // 9 - 5 = 4

console.log('19' - '13' + '17'); // 19 - 13 = 6 +'17' = 617

console.log('19' - '13' + 17); // 23

console.log('123' < 57); // false

console.log(5 + 6 + '4' + 9 - 4 - 2);  //114 + 9 - 4 - 2 --> 114+3 --> 1143

console.log("  ");
*/
/*
console.log("Truthy and Falsy Values lecture");
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Audrey")); //true becasue it is not empty
console.log(Boolean({})); //an empty object and it is true because it is not a falsy

const money = 0;
if (money) //--> the statement after the if statement should be a boolean value so it converts it and its a falsy becasue rn money is 0
{
    console.log("Don't spend it all");
}
else {
    console.log("You should get a job");
}


//check to see is a variable exsists or not
let height; //an undefined value is a falsey value and goes to else
if (height) {
    console.log(`it is defined`);
}
else {
    console.log("It is not yet defined");
}

console.log("  ");

*/
/*
console.log("Equality Operators: == vs. === lecture");
const age = 18;
if (age === 18) console.log("You just became and adult");
// === returns a boolean value but only is true if both sides are exactly the same if one is a number and one is a string it will return false
//loosely equal --> double equal will return as true if it is 18 and '18' it does type coercion

//for clean code try to only use the strict equality operator

// this gives a prompt window for a user to enter a value
prompt("whats your favorite number?")

console.log("  ");

console.log("Equality Operators: == vs. === assignment");
console.log("  ");
const numNeighbours = prompt("How many neighbour countried does your county have?");


if (Number(numNeighbours === 1)) console.log("Only 1 border!")
else if (Number(numNeighbours > 1)) console.log("More than 1 border");
else console.log("No borders")

//you should use the === because its a safer practice of coding and if you type converse then it will allow the user to enter the number and get the sucessful output because when a user enters anything it is a string and srting will not work with strict equality when compared to a number





*/

//logical operators assignment
/*
const country = "United States";
const continent = "North America";
let population = 329500000;
let isIsland = false; //boolean datatype
let language; //undefined datatype
language = "English";
const finlandPop = 6000000;
let averagepop = 33000000;
console.log("  ");
if (language === "English" && population < 500000 && !isIsland) console.log(`You should live in ${country}`)
else console.log(`You should not live in ${country}`)
console.log("  ");
*/
/*
//coding challenge #3

//two teams Dolphins and koalas
//compete three times and the highest score wins

// Calculate the average score for each team, using the test data below

// Compare the team's average scores to determine the winner ofthe competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// Bonus 1: Include a requirement for a minimum score of 100.With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.Hint: Use a logical operator to test for minimum score, as well as multiple else -if blocks ????

// Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.Otherwise, no team wins the trophy

const DolphinScore1 = 97;   //96;
const DolphinScore2 = 112;  //108;
const DolphinScore3 = 101;  //89;

const DolphinAvg = (DolphinScore1 + DolphinScore2 + DolphinScore3) / 3;

const KoalaScore1 = 109;    //88;
const KoalaScore2 = 95;     //91;
const KoalaScore3 = 106;    //110;

const KoalaAvg = (KoalaScore1 + KoalaScore2 + KoalaScore3) / 3;

let winner;

if ((DolphinAvg > KoalaAvg) && (DolphinAvg > 100)) console.log("The Dolphins win")
else if ((DolphinAvg < KoalaAvg) && (KoalaAvg > 100)) console.log("The Koalas win")
else if ((DolphinAvg === KoalaAvg) && (DolphinAvg > 100)) console.log("Their is a tie");
else console.log("The average is under 100");
*/

/*
console.log("Switch statement lecture");
const day = 'friday';
switch (day) {
    case 'monday':
        console.log("I have an 8am class");
        console.log("Have a great day");
        break;
    case 'tuesday':
        console.log("I have an 8am class");
    case 'wednesday':
        break;
    case 'thursday':
        console.log("I have an 9am class");
        break;
    case 'friday':
        console.log("I have an 8am class");
        break;
    case 'saturday':
        console.log("I go to work and run errands");
        break;
    case 'sunday':
        console.log("I get to sleep in ");
        break;
    default:
        console.log("not a valid day");
}
console.log("  ");


console.log("Switch statement assignment");
const language = "mandarin"
switch (language) {
    case 'mandarin':
    case 'chinese':
        console.log("MOST number of native speakers")
        break;
    case "spanish":
        console.log("2rd place");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language");
}

*/

/*
const age = 24;
console.log("Conditional Operator (Ternary) lecture");
console.log("  ");
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water")

const drink = age >= 18 ? "wine" : "water"; //one line if else statement
//is the age above 18?

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);




console.log("Conditional Operator (Ternary) assignment");
console.log("  ");
const country = "United States";
const continent = "North America";
let population = 329500000;
let isIsland = false; //boolean datatype
let language; //undefined datatype
language = "English";
const finlandPop = 6000000;
let averagepop = 33000000;
console.log("  ");

const findings = population > averagepop ? "above" : "below";
console.log(`${country}'s population is ${findings} average`)

//or 

console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`)
*/





/*
//coding challenge 4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement ???? (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: ???The bill was 275, the tip was 41.25, and the total value 316.25???

// Test data:
// ?? Data 1: Test for bill values 275, 40 and 430 Hints:
// ?? To calculate 20% of a value, simply multiply it by 20/100 = 0.2 ?? Value X is between 50 and 300, if it's>= 50 && <= 300????

const billValue1 = 430;
const billValue2 = 40;
const billValue3 = 430;
const tip = billValue1 <= 300 && billValue1 >= 50 ? billValue1 * .15 : billValue1 * .20;
//const cost = ((billValue1 > 300) && (billValue1 < 50)) ? (billValue1 * (15/100)) : (billValue1 * (20/100))
console.log(`The bill value is ${billValue1}
The tip value is: ${tip}
The total cost will be ${billValue1 + tip}`)

*/







