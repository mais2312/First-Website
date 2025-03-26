//generate a random number between 0 and 1
let randomnumber= Math.random();
console.log (randomnumber);

//scale scale the range between 0 and 9.99999
randomnumber = randomnumber *10;
console.log(randomnumber);

//round the number down to the nearest whole number
randomnumber=Math.floor (randomnumber);
console.log(randomnumber);

//add 1 to the number to get a random number between 1 and 10
randomnumber=randomnumber +1;
console.log(randomnumber);

let randomnumber2=Math.floor(Math.random()* 10)+1;
console.log(randomnumber2);

//create a variable to store the current date
let d= new Date();
console.log(d);

//create variables to store the day month and year from d
let date= d.getDate();
let month= d.getMonth(); +1;
let year= d.getFullYear();

//create a formed message
console.log('Today is ${date})/${year}, and today I have learnt about JavaScript objects');

//ask the user to enter their date of birth
let dobYear= prompt("What year were your born? Please enter in the format YYY");
console.log(dobYear);
let dobMonth= prompt ("What month was you born? Please enter in the format MM");
console.log(dobMonth);
let dobDate= prompt ("What day was you born? Please enter in the format DD");
console.log(dobDate);

//convert the input in to a date object
let dob= new Date (dobYear, dobMonth - 1, dobDate);
console.log(dob);

//calculate the diffrence between the current date and date of birth
let ageYears= d.getFullYear()- dob.getFullYear();
console.log(ageYears);

//get current date & month, get dob date and month, compare them, to see if the birthdate has passed yet,if the date hasn't passed,-1 from the result
if (d.getMonth()< dob.getMonth()) {
ageYears--;
}
console.log(ageYears);

//declare a variable called text and store your full name as a string
let text= "Maisie Howarth"

//find the lengh of your name using the appropriate sting method
let namelengh= text.length;
console.log('Your name has ${nameLength}characters');


//change your first name to Joe/Jo/Jane and your second name to Bloggs
let= newName= text.replace("Maisie", "Jane").replace ("Howarth","Bloggs");
console.log ('New name: ${newName}');

//convert your name to uppercase
let upperCaseName= text.toUpperCase();
console.log(upperCaseName);
