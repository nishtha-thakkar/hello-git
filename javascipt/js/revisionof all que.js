// assignment operator


let num = 10

num+=15




num -= 5


num *= 3



num /= 2



console.log(num)




// let num = 10

// num+=15
//console.log(num)




// num -= 5
//console.log(num)


// num *= 3
//console.log(num)



// num /= 2
//console.log(num)


//let result = num;
// console.log(result)

//comparison


//Given the variables score1 = 85 and score2 = 90, write a JavaScript code using 
// comparison operators to check if both scores are greater than 80 and display the result 
// using console.log.

let score1 = 85;
let score2 = 90 

if(score1>=80){
    if(score2>=80){
        console.log("both scores are greter than 80")
    }else{
        console.log("score2 is not grater than 80")

    }
}else{
    console.log("score1 is not grater than 80")

}

//Write a JavaScript code snippet to compare two strings, "apple" and "banana", 
// using comparison operators to check if the first string is less than the second string. 
// Display the result using console.log.

let str1 = "apple"            // "apple" comes before "banana", so the condition is true.
let str2 = "banana"

if(str1<str2){
    console.log(`${str1} is less than ${str2} `)

}else{
    console.log(`${str1} is  not less than ${str2} `)

}


//Logical Operators

//Given age = 25 and hasDrivingLicense = true, use logical operators to write a condition that checks 
// if the person is eligible to drive. 
// Print the result using console.log.

let age = 25
let hasDrivingLicense = true

if(age>=18 && hasDrivingLicense){    // && both condition is true they give true  value
   console.log("eligible to drive")
}else{
     console.log(" not eligible to drive")

}

//Write a JavaScript code snippet that checks if a number is between 10 and 50 (inclusive) or
//  is a multiple of 5 using logical operators.
//  Display the result using console.log.

let number = 25

if(number % 5 === 0 ){
    console.log(`${number} is multiply of 5`)
}else{
    console.log(`${number} is not  multiply of 5`)

}

// let number = 25

// if(number>=10 && number <= 50 ) || (number % 5 === 0 ){
//  console.log((`${number} is multiply of 5`))
//}else{
   // console.log((`${number} is not multiply of 5`))
   // }

   //console.log and innerHTML

//    Write a JavaScript code snippet that uses console.log to display the values of variables
//     a = 5, b = 10, 
//    and the result of their addition.


    let a =5
    let b = 10

    let result = a+b

    console.log(result)


    // if - statement

    // Write a JavaScript code snippet that checks if a given number is positive. 
    // Use an if statement and display the result using console.log.

    let number2 = 10

    if(number2>-2){
        
        console.log("number is positive. ");
    } else {
        console.log("number is negative. ");

    }



    
// let number2 = 10;

// if(number2 > 0){
//     console.log("Number is positive.");
// } else if(number2 < 0){
//     console.log("Number is negative.");
// } else {
//     console.log("Number is zero.");
// }


// Given the variable temperature = 30, 
// write an if statement that checks if the temperature is above 25. I
// f true, log "It's a hot day" to the console


let temperature = 30

if(temperature > 25){
    console.log("It's a hot day")
}else{
    console.log("It's not  a hot day")
}


//Nested if-else Statement

// Write a JavaScript code snippet that checks if a number is positive, 
// negative, or zero using nested if-else statements. 
// Display the appropriate message using console.log.

let numb = 40

if(numb >  0){
    console.log("numb is positive");
}else if (numb < -2){
    console.log("number is negative");
}else  {
    console.log("number is zero");
}


// let numb = 40;

// if(numb > 0){
//     console.log("Number is positive");
// } else {
//     if(numb < 0){
//         console.log("Number is negative");
//     } else {
//         console.log("Number is zero");
//     }
// }

// Write a JavaScript code using nested if-else statements to determine the grade of a student based on the following conditions:

// Grade "A" if score is 90 or above
// Grade "B" if score is between 80 and 89
// Grade "C" if score is between 70 and 79
// Grade "D" if score is below 70
// Assume the score is 75.


let score = 75

if(score >= 90){
    console.log('grade "A"')
}else if (score>=80 && score<=89){
     console.log('grade "B"')
}else if (score>=70 && score<=79){
    console.log('grade "C"')

}else if (score < 70){
     console.log('grade "D"')


}



//Write a JavaScript code snippet that uses arithmetic, comparison, and logical operators to 
// determine if a number is both even and greater than 10. Display the 
// result using console.log.

let number5 = 12;
if(number5 > 10 && number5 % 2 === 0){
    console.log("number is both even and greater than 10.")
}else{
     console.log("number is not  both even  and greater than 10.")

}



// let number5 = 12;

// if(number5 > 10 && number5 % 2 === 0){
//     console.log("Number is both even and greater than 10.");
// } else if(number5 > 10 && number5 % 2 !== 0){
//     console.log("Number is odd but greater than 10.");
// } else if(number5 <= 10 && number5 % 2 === 0){
//     console.log("Number is even but 10 or less.");
// } else {
//     console.log("Number is odd and 10 or less.");
// }


// Given num1 = 8 and num2 = 3, use a combination of arithmetic, assignment,
//  and comparison operators to find if num1 is a multiple of num2 after incrementing num1 by 1. 
//  Log the result.

let num3 = 8
let num4 = 3

num3 += 1

console.log(num3)


if(num3 % num4 === 0){
    console.log(`${num3} is multiply ${num4}`)
}else{
    console.log(`${num3} is not  multiply ${num4}`)

}


//Write a JavaScript code snippet that checks if a given variable age is either less than 18 or 
// greater than 60 using logical operators, and displays the message "Not eligible" 
// using console.log. If neither condition is met, display "Eligible".


let age2 = 25

if(age2 < 18 || age > 60){
    console.log("Not eligible")
}else{
    console.log("Eligible")
}




//if if-else statement
//You have a thermometer that measures room temperature. Write an if-elseif condition to determine:

// - If the temperature is below 18°C, print "It's too cold, turn on the heater."
// - If the temperature is between 18°C and 25°C, print "The temperature is comfortable."
// - If the temperature is above 25°C, print "It's too hot, turn on the fan."

let temp = 24;

if(temp<18){
    console.log("It's too cold, turn on the heater.")
}else if (temp>=18 && temp<=25){
    console.log("The temperature is comfortable.")
    }else if (temp>25){
        console.log("It's too hot, turn on the fan.")
    }


    //A student gets a score out of 100 in an exam. Write an if-elseif condition to determine:

// - If the score is 90 or above, print "Grade A."
// - If the score is between 75 and 89, print "Grade B."
// - If the score is between 50 and 74, print "Grade C."
// - If the score is below 50, print "Grade D."

let score3 = 85;

if(score3 >= 90){
    console.log("Grade A.")
}else if (score3 >=75 && score3 <= 89){
     console.log("Grade B.")

}else if (score3 >=50 && score3 <= 74){
     console.log("Grade C.")
}else if (score3 < 50){
    console.log("Grade D.")

}

//You are driving and approach a traffic signal. Write an if-elseif condition to determine:

// - If the light is "Red", print "Stop."
// - If the light is "Yellow", print "Slow down."
// - If the light is "Green", print "Go."

let light = "Green"

if(light === "Red"){
    console.log("stop")
}else if (light === "Yellow"){
    console.log("slow down")
}else if (light === "Green"){
    console.log("Go")
}
  

//A store is giving discounts based on the total bill amount. Write an if-elseif condition to determine:

// - If the bill is less than $50, no discount.
// - If the bill is between $50 and $100, give a 10% discount.
// - If the bill is more than $100, give a 20% discount.

let bill = 80;

if(bill < 50){
    console.log("no discount")
}else if (bill >=50 && bill <= 100){
    console.log("10% discount")
}else if (bill > 100){
    console.log ("20% discount")
}

//You have different tasks to do based on the time of day. Write an if-elseif condition to determine:

// - If the time is before 7 AM, print "It's too early, sleep a bit more."
// - If the time is between 7 AM and 10 AM, print "Time for breakfast and morning exercise."
// - If the time is between 10 AM and 6 PM, print "Time to work or study."
// - If the time is after 6 PM, print "Relax for the day."

let time = 9 

if(time < 7 ){
    console.log("It's too early, sleep a bit more.")
}else if (time >= 7  && time < 10){
    console.log("Time for breakfast and morning exercise.")
}else if (time >= 10  && time <= 18  ){
    console.log("Time to work or study.")
}else if (time > 18 ){
    console.log("Relax for the day.")
}

//Find the Lowest and Highest Temperatures

// You have recorded the temperature for a day: temperature1 = 32°C. Initialize lowestTemperature to Infinity and highestTemperature to -Infinity. Write conditions to:

// Update lowestTemperature if temperature1 is lower than the current lowestTemperature.

// Update highestTemperature if temperature1 is higher than the current highestTemperature.

// Print "Lowest temperature: and "Highest temperature: " in innerHTML


let temperature1 =[32 ,26, 44,45] 
lowesttemp = Infinity
highsttemp = -Infinity

for(let i= 0 ; i<temperature1.length ; i++){
    if(temperature1[i] < lowesttemp){       //32<infinity=true assign the value in lowesttemp 32 //26<32-true 
        lowesttemp=temperature1[i]
        // console.log(lowesttemp)
    }  // ans is 26

    if(temperature1[i] >highsttemp ){
        highsttemp = temperature1[i]

    }
    //  ans is 45
}

console.log("Lowest temperature = " , lowesttemp);
console.log("Highest temperature = ",  highsttemp)









// Q1
//Print the sum of those numbers that are divisible by 2 or 5 between a range of 1 and 15.
let sum = 0
for(let i = 1; i<=15;i++){         // i = 1 ; 1<=15 , i++ = 2<=15 , 3<=15 , 4 , 5 ,6 , 7 ,8 , 9 ,10 ,11 , 12 ,13 , 14 ,15
    if(i % 2 ===0 || i % 5 === 0){   // 2%2===0 , 2%5 !== 0 -false  , 2 -false , 5 -false  , 4-true , 5 %5 , 6%2==0 ,7-false ,%2===0 , 9-false ,10%2===0 , 10%5===0 , 12%2===0 , 14%2===0 ,15%5===0
       sum += i      // 0+2 = 2 , 2+=4 = 6  , 6+=5 = 11  , 11+=6 = 17  , 17+=8 =25 , 25+=10 = 35 , 35+=12 =47 , 47+=14=61 ,61+=15 = 76
    }
}

console.log(sum)


//## Q2
//Write a for loop to print the multiplication table of a given number up to 10. For example, for the number 3, it should print:
// Output:
// 3 x 1 = 3
// 3 x 2 = 6


for(let i =1 ; i<=10;i++){
      
    console.log(`${"3"} * ${i} = ${3*i} `)
}

//Use a for loop to create the following pattern: output

//  ```markdown 
// *
// **
// *** 
// **** 
// ***** 
// ``` 

for(let i = 1 ; i<=5 ; i++){      // 1<5 , 2<5
    str = ""

    for(let j = 1 ; j<=i ; j++){  //1<1 2<1 // 1<1 , 2<=2
        str += "*"   // "" +* = * , "" + * =*
                                   // "*" + * = **
    }
    console.log(str)
}

//Detect Perfect Numbers A perfect number is a positive integer that is equal to 
// the sum of its proper divisors (excluding the number itself). Write a program using a 
// for loop to check if a given number is a perfect number.
//  // Input: number = 28 // Output: 1 + 2 + 4 + 7 + 14 = 28


let sum3 = 0
let number4 = 28;
for(let i =1 ; i<number4; i++){
    if(number%i===0){
       sum3 += i  
    }
}
console.log(sum3)

if(sum3 === number4){
    console.log("perfect no")
}else{
    console.log("not perfect no")
}
 



 





