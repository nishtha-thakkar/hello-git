// que-1
//cretae a number variable num with some value
//now , print "good" if number is divisible by 10 and print "Bad" if it is not.


let num = 20;

if(num %  10 === 0 ){
    console.log("Good");
}else{
    console.log("Bad");
}

//que-2
// take user's name & age as input using prompts.
// then return back the following statement to the user as an alert (by sunstituing theit name &
//  age )
//name is age years old
//[use templet literals to print this sentence]


// let name = prompt("please enter your name")
// let age = prompt("please enter your age")
// console.log(`${name} is ${age} years old`)

// alert(`${name} is ${age} years old `)


//que-3
//write a swith statement to print the month in quarter

// Months in quarter 1: january, february, march
// Months in quarter 2 : April , may , june
// Months in quarter 3 : july, august , september
// Months in quarter 4 : october , november , december

// [use the number as the case value in switch]

let quarter = 1

switch(quarter){
    case 1 : console.log("January, February, March")
    break;
    case 2 : console.log("April , May , June")
    break;
    case 3 : console.log("July, August , September")
    break;
    case 4 : console.log("October , November , December")
    break;
    default : console.log("Not a quarter")

  
}

//que-4
//A string is a golden string if it starts with the character "A"  or "a" and has a total 
//length greater than 5 .
// For a given string print if it is golden or not.

let string = "apples";

if((string[0] === "A"  ||  string[0] === "a")  && (string.length > 5)) {
    console.log("golden string")


}else{
    console.log("not a golden string")
}


//que-5

//write a programme to find the largest of 3 numbers
let a = 5;
let b = 20;
let c = 15;

if(a>b){
    if(a>c){
        console.log("a is greter than c")
    }else{
        console.log("c is largest")
    }
}else{
    if(b>c){
        console.log("b is largest")

    }else{
        console.log("c is largest")
    }
}

//que-6
//(Bonus). write a programme to check if 2 number have the samelast digit . 
//ex: 32 and 47852 have the same last digit i.e. 2

let num1 = 32
let num2 = 47852

if(num1%10 === num2%10){
    console.log("2 number have the samelast digit.")
}else{
    console.log("2 number don't have the samelast digit .")
}