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







