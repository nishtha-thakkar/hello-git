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
let number = 28;
for(let i =1 ; i<number; i++){
    if(number%i===0){
       sum3 += i  
    }
}
console.log(sum3)

if(sum3 === number){
    console.log("perfect no")
}else{
    console.log("not perfect no")
}


// for loop


 
                