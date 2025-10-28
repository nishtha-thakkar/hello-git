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



// day-15

//For Loop Questions:

// 1.Write a JavaScript program using a for loop that prints all even numbers from 1 to 50.
let sum6 = 0
for (let i =0 ; i<=50 ; i++){
    if(i%2===0){
        sum6 += i //2 // 2+4=6//6+6=12//12+8=20//20+10=30//30+12=42//42+14=56//56+16=72//72+18=90// 90+20=110
                 // 110+22 = 132 // 132+24=156//156+26=182//182+28=210//210+30 = 240//240+32=272//272+34=306// 
                 // 306+36=342 // 342+38=380//380+40=420
    }            //420+42= 462// 462+44=506 // 506+46=552 // 552+48=600 // 600+50=650
}
console.log(sum6)

//for (let i =0 ; i<=50 ; i++){
    // if(i%2===0){
    //     console.log(i)}
//}

//2.Write a JavaScript program using a for loop that prints the multiplication table for the 
// number 5 (from 1 to 10).

for(let i=1 ; i<=10 ; i++){
    console.log(`${5} * ${i} = ${5*i}` )
}

//3 Using a for loop, create a program that calculates the factorial(multiplication) of a given 
// positive integer n.   factorial 1 means multiply by 1 not 0 

let n = 5
let factorial = 1

for(let i = 1 ; i<=n ; i++){
    factorial *= i
}
console.log(factorial)


//4 . Write a JavaScript program that uses a for loop to print numbers from 1 to 100,
//  but for multiples of 3, print “Fizz” instead of the number, 
// and for multiples of 5, print “Buzz.”



for(let i = 1 ; i<=100 ; i++){
    if(i%3===0){
        console.log("Fizz")
    }else if(i%5===0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}


// console.log(i)  // ouput come only fizz and buzzz not no

//or 2nd method

//for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 5. Using a for loop, create a program that calculates the sum of 
// all numbers from 1 to 100.
let sum2 =0
for(let i = 1 ; i<=100 ; i++){
    sum2 += i
}
console.log(sum2)


// 6.Write a for loop that prints the cube (Cube (ઘન) એટલે — કોઈ સંખ્યાને ત્રણ વાર પોતાને સાથે ગુણવી.) of 
// all numbers from 1 to 10.

for(let i = 1 ; i<=10 ; i++){
     let cube = i**3
    console.log(`${"cube of"} ${i} = ${cube}`)

}
 //console.log(`${"cube of"} ${i} = ${cube}`)  - if i write in that way so cube was not defined because of 
  // we shold write cube in block

// console.log(cube)


//7.Write a for loop that prints the sum of squares of all odd numbers from 1 to 20.
let sum4=0
for(let i =1 ; i<=20 ; i++){
   if(i % 2 !== 0 ){
    let square = i**2
    sum4 += square
    console.log(`square of ${i} = ${square}`)
   }
}
console.log(sum4)

// 8. Write a for loop that calculates and prints the sum of all numbers divisible by 
// 3 between 1 and 100.
let sum5 = 0
for(let i =1 ; i<=100 ; i++){
    if(i%3 === 0 ){
        sum5+=i
    }
}
console.log(sum5)

//9.Using a for loop, write a program that calculates the product(multiplication) of all 
// numbers from 1 to 10.

let product  = 1

for(let i = 1 ; i<=10 ; i++){
    product*=i
}
console.log(`product of all number calculate ${product}`)

console.log("while loop")


//While Loop Questions:
//initialize the value
// condition check
//execute the block
//inc/dec

//10. Write a JavaScript program using a while loop that prints all numbers from 10 to 1 
// in reverse order.

let i = 10;


while(i>=1){
    console.log(`all numbers from 10 to 1 in reverse order. =  ${i}`)
    i--
}

//11.Write a while loop that keeps doubling a number starting from 1 until the number exceeds 1000, 
// and then prints the final value.

let num8 = 1;

while(num8<=1000){
    num8*=2   // 1*2=2 , 2*2=4, 4*2=8, 8*2=16 , 16*2=32 , 32*2=64, 64*2=128 , 128*2=256 , 256*2=512
             //512*2=1024 , 1024<=1000 - false loop end so ans is"1024"
   
    console.log( `number starting from 1 until the number exceeds 1000 = ${num}`)
    //  num++


}
console.log( `number starting from 1 until the number exceeds 1000 final value = ${num}`)

    // 12 .Write a program that uses a while loop to calculate the sum of 
    // all even numbers between 1 and 100. 
    let sum1 = 0 
    let i2 = 1;
    while(i2<=100){
        if(i2%2===0){
        sum1 += i2
        console.log(` all even no between 1 to 100 = ${i2}`)
        }
        
        i2++;
        
    }
    console.log(`sum of all even no ${sum1}`) 


    //13.Using a while loop, create a program that finds and prints the first 5 numbers 
    // divisible by both 3 and 7
    
    let i3 = 1;

    while(i3<=120){
        if(i3%3===0 && i3%7===0){
            console.log(i3)
        }
        i3++
    }



    console.log("do while")

    //.Do-While Loop Question:
    //initialize the value
    //execute the code
    //inc/dec
    //condition

    // 14. Write a JavaScript program using a do-while loop that prints numbers from 1 to 10. 
    // The loop should run at least once, regardless of the condition.

    let i4 = 1;

    do{
        console.log(i4)
        i4++
    }while(i4<=10);


    











 



 





