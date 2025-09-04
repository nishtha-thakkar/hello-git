// Arthmatic operator

// 1.Write a JavaScript code snippet that uses arithmetic operators to calculate the area of a circle given its radius. Assume the radius is 7. Display the result using console.log.

let radius = 7;
let pi = 3.14;

// formula = pir2

console.log(3.14 * (7**2));


//2.Given the variables a = 10, b = 20, and c = 5, write a JavaScript code to find the value of (a * b) / c + (b - a). Use console.log to display the result.

let a = 10;
let b = 20;
let c = 5;

console.log( (a * b) / c + (b - a));

// explanation

// a*b = 10*20 = 200
// /c = 200/5 = 40
// b-a = 20-10 = 10
// c+b-a = 40+10 = 50   


//Assignment Operators

// 3.Given the variables x = 5 and y = 10, use assignment operators to increment x by 2 and multiply y by x. Display the new values of x and y using console.log.

let x = 5;
let y = 10;

x += 2
console.log("x = " , x);

y *= x
console.log("y =" , y);

// new value - x = 7 and y = 70


// 4. Write a JavaScript code snippet that uses the compound assignment operators to perform the following operations:

// Add 15 to num
// Subtract 5 from num
// Multiply num by 3
// Divide num by 2
// Initialize num to 10, and log the result after each operation.


let num = 10;

console.log("num", num);

num += 15;
console.log("num = " , num);

num -= 5;
console.log("num = " , num);

num *= 3;
console.log("num = " , num);

num /= 2;
console.log("num = " , num);


//Comparison Operators

//5.Given the variables score1 = 85 and score2 = 90, write a JavaScript code using comparison operators to check if both scores are greater than 80 and display the result using console.log.

let score1 = 85;

console.log("85>80" , 85>80);

let score2 = 90;
console.log("90>80" , 90>80);

//6.Write a JavaScript code snippet to compare two strings, "apple" and "banana", using comparison operators to check if the first string is less than the second string. Display the result using console.log.

let fruitName = "apple";
let fruitName2 = "banana";

console.log("apple<banana = ","apple" < "banana");


//Logical Operators

// 7.Given age = 25 and hasDrivingLicense = true, use logical operators to write a condition that checks if the person is eligible to drive. Print the result using console.log.

let age = 25;
let hasDrivingLicense = true;

console.log("age>18 && hasDrivingLicense" , age>18 && hasDrivingLicense);

//8.Write a JavaScript code snippet that checks if a number is between 10 and 50 (inclusive) 
// or is a multiple of 5 using logical operators. Display the result using console.log.

let number = 25;

if ((number >= 10 && number <= 50) || (number % 5 === 0)) {
  console.log("true");
} else {
  console.log("false");
}

//Type Conversion

// 9.Write a JavaScript code snippet that converts a string "123.45" to a number and adds 10 to it. Display the result using console.log.

console.log("123.45 + 10 = ", +"123.45" + 10,);

//10.Write a JavaScript code snippet to convert a boolean value true to a string and concatenate it with " is the value". Use console.log to display the result.

let bolleanValue = true;

console.log(bolleanValue + " is the value ");

//console.log and innerHtml


//11.Write a JavaScript code snippet that updates the content of a <div> with id output to show the result of 15 * 3 using innerHTML.

let r = 15;
let s = 3;

console.log("15*3" , 15*3);

//12.Write a JavaScript code snippet that uses console.log to display the values of variables d = 5, e = 10, and the result of their addition.

let d = 5;
let e = 10;

console.log("5+10" , 5+10);



//if statement

//13.Write a JavaScript code snippet that checks if a given number is positive. Use an if statement and display the result using console.log.

let number4 = 23;

if(number4>=20){
  console.log(number4 + " is positive");
}else{
  console.log(number4 + " is negative");
}

//14.Given the variable temperature = 30, write an if statement that checks if the temperature is above 25. If true, log "It's a hot day" to the console.

let temperature = 30;

if(temperature>25){
  console.log("It's a hot day");
}else{
  console.log("It's a cold day");
}


//if-else statement

//15. Write a JavaScript code snippet that checks if a number is positive, negative, or zero using nested if-else statements. Display the appropriate message using console.log.

let number7 = 35;

if(number7>=30){
  if(number7===30){
    console.log("number is positive")
  }else{
    console.log("number is zero")
  }


}else{
  console.log("numbar is negative")
}


let number8 = -12

if(number8>=0){
  if(number8===0){
    console.log("the number is positive")
  }else{
    console.log("the numner is zero")
  }

}else{
  console.log("the number is negative")

}

//16.Write a JavaScript code using nested if-else statements to determine the grade of a student based on the following conditions:

// Grade "A" if score is 90 or above
// Grade "B" if score is between 80 and 89
// Grade "C" if score is between 70 and 79
// Grade "D" if score is below 70
// Assume the score is 75.


let score3 = 75;

if(score3>90){
  console.log("Grade A")
}else{
  if(score3>=80 && score3<=89){
    console.log("Grade B")
  }else{
    if(score3>=70 && score3<=79){
      console.log("Grade C")
    }else{
      console.log("Grade D")
    }
  }

}


//combination question

//17.Write a JavaScript code snippet that uses arithmetic, comparison, and logical operators to determine if a number is both even and greater than 10. Display the result using console.log.


let num3 = 20;

if(num3>=10 && num3 % 5===0 ){
  console.log("the number is even and grater than 10")
}else{
  console.log("the number is odd and not grater than 10")
}


//18.Write a code snippet that assigns a value to a variable marks, then checks if the marks are greater than or equal to 75. If true, assign "Passed" to another variable result, otherwise assign "Failed". Display result using innerHTML.


let marks = 80

if(marks>=75){
  console.log("the student is pass")
}else{
  console.log("the student is fail")
}

//19.Given num1 = 8 and num2 = 3, use a combination of arithmetic, assignment, and comparison operators to find if num1 is a multiple of num2 after incrementing num1 by 1. Log the result.

num1=8
num2=3

num1 += 1;
console.log("num1" , num1);

if(num1%num2===0){
  console.log("we will won")
}else{
  console.log("we will lose")
}

//20.Write a JavaScript code snippet that checks if a given variable age is either less than 18 or greater than 60 using logical operators, and displays the message "Not eligible" using console.log. If neither condition is met, display "Eligible"

let age1 = 25;
if(age1<18 || age1>60){
  console.log("not eligible")
}else{
  console.log("eligible")
}










  







