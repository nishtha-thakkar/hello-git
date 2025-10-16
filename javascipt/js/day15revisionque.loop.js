//For Loop Questions:

// 1.Write a JavaScript program using a for loop that prints all even numbers from 1 to 50.
let sum = 0
for (let i =0 ; i<=50 ; i++){
    if(i%2===0){
        sum += i //2 // 2+4=6//6+6=12//12+8=20//20+10=30//30+12=42//42+14=56//56+16=72//72+18=90// 90+20=110
                 // 110+22 = 132 // 132+24=156//156+26=182//182+28=210//210+30 = 240//240+32=272//272+34=306// 
                 // 306+36=342 // 342+38=380//380+40=420
    }            //420+42= 462// 462+44=506 // 506+46=552 // 552+48=600 // 600+50=650
}
console.log(sum)

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

let num = 1;

while(num<=1000){
    num*=2   // 1*2=2 , 2*2=4, 4*2=8, 8*2=16 , 16*2=32 , 32*2=64, 64*2=128 , 128*2=256 , 256*2=512
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


    

















