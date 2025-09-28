//1. For Loop and Array

//Write a for loop to iterate over an array of numbers [1, 2, 3, 4, 5] and print each number to the console.
let array = [1, 2, 3, 4, 5]
for(i = 0 ; i<array.length;i++){      //0<5 true print 1 , i++ 0=1 1<5  true print 2 
    console.log(array[i])
}

//2. While Loop and Array
//Write a while loop to print all the elements of the array [10, 20, 30, 40, 50] to the console.

let array2 = [10, 20, 30, 40, 50]

let a=0

while(a<array2.length ){    //a=0 / 0<5 // print-10 / a++ = 1 , 1<5 //print 20
    console.log(array2[a])
    
    a++


}

//3. String Length
//Given a string let str = "Hello, World!";, use a for loop to find and print the length of the string.

let str = "Hello, World!";
let count = 0

for(let i = 0 ; i<str.length ; i++){
    // console.log(str[i])
    count++                         
    console.log(count)
}
console.log("Length of string:", count)



//4. String Characters
//Use a for loop to print each character of the string "JavaScript" one by one.
let str2 = "JavaScript"
for(let i2=0; i<str2.length;i2++){
    console.log(str2[i2])
}


//5. Sum of Array Elements
//Write a for loop to calculate and print the sum of the elements in the array [1, 2, 3, 4, 5].



// let array3 = [1, 2, 3, 4, 5]
// sum = 0
// for(let i3 = 0 ; i3<array3.length;i3++){
//     sum++

// }
// console.log(sum)

let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i3 = 0; i3 < array3.length; i3++) {
    sum = sum + array3[i3];   // or sum += array3[i3];
}

console.log(sum);  // 15

