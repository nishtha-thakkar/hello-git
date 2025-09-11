// 1.Print the sum of those numbers that are divisible by 2 or 5 between a range of 1 and 
  
let sum = 0;

for(let i = 1; i<=15 ; i++){
    if(i%2===0 || i%5===0)
        sum = sum+i
}
console.log("sum = " , sum)

// * 2                      //*5
// 2                          5
// 4                          10
// 6                           15
// 8
// 10
// 12
// 14

// without combination

// 2, 4, 6, 8, 10, 12, 14, 5, 15
 
//* 2+4=6
    // 6+6=12
    //12+8=20
    //20+10=30
    //30+12=42
    //42+14=56
    //56+5=61
    //61+15=76
    
    



// 2.Write a for loop to print the multiplication table of a given number up to 10. For example, for the number 3, 
// it should print: // Output: // 3 x 1 = 3 // 3 x 2 = 6
 let number = 4;
for(let i2 = 1 ; i2<=10 ; i2++  ){
    console.log(`${number} x ${i2} = ${number * i2}`);
}


// 3.Use a for loop to create the following pattern: output

//  ```markdown 
// *
// **
// *** 
// **** 
// ***** 
// ``` 


let number2 = 5;

for(let i3 = 1 ; i3<=5 ; i3++){
   let str = ""
   for(let j = 1; j<=i3 ; j++){
    str = str+"*"
   }
   console.log(str)
}



// let number3 = 6;

// for(let i4 = 3 ; i4<=number3 ; i4++){
//     str = ""
//     for(let m = 3 ; m<=i4 ; m++)
//         str = str+m
//     console.log(str)
// }









    





