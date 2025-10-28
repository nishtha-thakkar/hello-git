// For Loop and Array
console.log("for loop array")
// 1 . Write a for loop to iterate over an array of numbers [1, 2, 3, 4, 5] 
// and print each number to the console.

let arr = [1, 2, 3, 4, 5]
for(let i = 0 ; i<arr.length ; i++){
    console.log(arr[i])
}
console.log("While Loop and Array")
//While Loop and Array

//Write a while loop to print all the elements of the array [10, 20, 30, 40, 50] to the console.
let array = [10,20,30,40,50]
let i = 0;
while(i<array.length){
    console.log(array[i])
    i++;
}

console.log("string length and for loop")
//String Length
//Given a string let str = "Hello, World!";, use a for loop
//  to find and print the length of the string.

let str = "Hello, World!"
let value = 0

for (let i = 0 ; i<str.length ; i++){
    value++

    
}
console.log(value)

console.log("string for loop")

//String Characters
//Use a for loop to print each character of the string "JavaScript" one by one.

let string = "Javascript"

for (let i = 0 ; i<string.length ; i++){
    console.log(string[i])
}

//5.Sum of Array Elements
//Write a for loop to calculate and print the sum of the elements in the array [1, 2, 3, 4, 5].

let arr2 = [1,2,3,4,5]
let sum = 0

for(let i = 0 ; i<arr2.length; i++){
 sum += arr2[i]
    
   
}

console.log(sum)

console.log("maxarray for loop")

// Find Maximum in Array
//Given an array [3, 1, 4, 1, 5, 9], use a for loop to find and print the maximum value.
// let array2 = [3, 1, 4, 1, 5, 9]

// for(let i = 0 ; i<array2.length ; i++){
//     if(array2[i]===9){
       
//     }
//      console.log(array2[i])
// }

let array2 = [3, 1, 4, 1, 5, 9];
let max = array2[0];  // assume the first element is the largest initially

for (let i = 1; i < array2.length; i++) {    // 1<6  ,2<6, 3<6 , 4<6 , 5<6 ,
    if (array2[i] > max) {   // compare current element with current max  //1>3 , 2>3 ,3>3,4>3 , 5>4 , 9>5
        max =  array2[i];     // update max if a bigger number is found  max = 4  , max= 5 , max =9
    }
}

console.log(max);

console.log("array reversal")


//Array Reversal
//Write a for loop to reverse the array [1, 2, 3, 4, 5] and print the reversed array.
// let arr3 = [1, 2, 3, 4, 5]
// for(let i = 5; i<arr3.length ; i-- ){
//     console.log(i)

// }

 let arr3 = [1, 2, 3, 4, 5];

for (let i = arr3.length - 1; i >= 0; i--) {
    console.log(arr3[i]);
}

console.log("upparcase")

// String to Uppercase
//Given a string let greeting = "hello";, use a for loop to convert each character to uppercase 
// and print the result.

let greeting = "hello";
let result = "";  // to store the uppercase version

for (let i = 0; i < greeting.length; i++) {
    result += greeting[i].toUpperCase();  // convert each character to uppercase
}

console.log(result);



//Counting Elements
//Write a while loop to count the number of elements in the array [2, 4, 6, 8, 10] 
// and print the count.

console.log("counting element")

let arr4 = [2, 4, 6, 8, 10] 
let count = 0

for(let i = 0 ; i<arr4.length ; i++ ){
     count ++
    

}
console.log(count)



let i2 = 0 
let count2 = 0

while(i2<arr4.length){
    count2++
    
    i2++

}
console.log(count2)


//Find Even Numbers
//Given an array [1, 2, 3, 4, 5, 6], use a for loop to print only the even numbers.

console.log("even no with array with for loop")

let arrayEven = [1, 2, 3, 4, 5, 6]

for(let i = 0; i<arrayEven.length ; i++){
    if (arrayEven[i] % 2 === 0 ){
        console.log(arrayEven[i])
     }  
    
     
}


   console.log("array length for loop") 

//Array Length
//Write a while loop to find and print the length of the array [5, 10, 15].



