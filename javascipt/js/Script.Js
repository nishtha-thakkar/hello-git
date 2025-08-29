// Topic-typesofoperator

// opearator-Used to perform some operation on data




// 1.Arithmetic Operators
// +, -, *, /


// Modulus-%
// Exponentiation-**-power
// Increment-++
// Decrement- --


let a = 5;
let b = 2;
// 1.plus
console.log("a=", a , "& b=", b);
console.log("a+b=",a+b,);
// 2. minus/deduction
console.log("a-b=",a-b);
// 3.multiply
console.log("a*b=",a*b);
// 4.divide or slash
console.log("a/b=",a/b);

// additional operator

// *modules*_%-reminder value - in modules we print reminder value
console.log("a%b=",a%b);

// *Expontiation*_**_power like 2**2=4_second sign_^

console.log("a**b=",a**b);


// Increment/Decrement - we also called unary operator

// *Increment*_a++, a+1-both are same like a=5, a++=6, a+1=6
//  ++a - prefix -first increment the value then assigning the value; for ex=6
//  a++ - postfix - first assign the value then incremrnt the value

let c = 20

console.log("++c=",++c);
console.log("c++=", c++);
console.log(c)

let d = 15;
console.log(d);
console.log(++d);
console.log(d++);
console.log(d);

// 2. Assignment operator- to assign the value. means to assign the value of variable
// = equal to
// += plus 
// -= Minus 
// *= multiply 
// /= divide 
// %= module - the result is in reminder value 
// **= expontiation - power - ex 5*5 = 25

// in assignmnent operator the value is going right to left jene propegate kahevai -right side se value left side jay che

let x = 5;
let y = 2;

// 1.=
// 5 value assign in the a - right to left means value of x is 2

x = y 
console.log(x);

// 2. +=  x+=4; / x=x+4 = 9

x += 4;
console.log("x=",x);

// 3. -=

x -= 4;
console.log("x = ", x);

// 4. multiply *

x *= 4;
console.log("x = ",x);

// 5. divide /

x /= 4;
console.log("x = ",x); 

// 6. module % - get result in reminder value

x %= 11;
console.log("x = ", x);

// 7. Expontiation - power ** - ^

x **= 4;
console.log("x = " , x);



// 3. comparison operator- to compare the two value

// ans is yes or No 

// 1.equal to ==  ,  not equal to !=
 
// 2.equal to & type === , not eqtal to & type !==  - strickly check -most of use in this operator

// > grater than , >= grater than wqual to
// < less than , <= less than wqual to


// 1.equal to ==  ,  not equal to !=
 
// **equal to
let raj = 70;
let nisha = 50;

console.log("raj==nisha = ", raj===nisha);

// example

let h = "40";
let i = 40;

console.log("h==i =" , h==i);

// **not eqtal to

let yashraj = 70;
let priya = 50;

console.log("yashraj!=priya ", yashraj!=priya);

// example

let g = 40;
let o = 40;

console.log("g!=o =" , g!=o);



//  2.equal to & type === , not eqtal to & type !==  - strickly check -most of use in this operator

let bulbul = "60";
let vikram = 60;

console.log("bulbul===vikram = ", bulbul===vikram );


// example


let ww = 120;
let rr = -120;

console.log("ww===rr = " , ww===rr);


// **not eqtal to

let java = 550;
let seva = -550;

console.log("java!==seva = " , java!==seva);

// example

let tt = 450;
let dd = 450;

console.log("tt!==dd = " , tt!==dd);


// 4. logical operator - ans is in true and flase

// Logical operators in JavaScript are used to combine or manipulate boolean expressions, resulting in a single
//  boolean value (true or false). They are essential for building complex conditional logic within your code.

// There are three primary logical operators in JavaScript:

// 1.Logical AND (&&):
// 2.Logical OR (||):
// 3.Logical NOT (!):

// 1.
// Logical AND (&&): This operator returns true only if both operands evaluate to true. 
// If either operand is false, the entire expression becomes false.

    // console.log(true && true);   // Output: true
    // console.log(true && false);  // Output: false
    // console.log(false && true);  // Output: false
    // console.log(false && false); // Output: false

    let q = 60;
    let t = 50;

    console.log("60>50 && 60===60 = " , 60>50 && 60===60);
    console.log("60>50 && 60===50 = " , 60>50 && 60===50);


    // 2. Logical OR (||): This operator returns true if at least one of the operands evaluates to true. 
    // It only returns false if both operands are false

    // console.log(true || true);   // Output: true
    // console.log(true || false);  // Output: true
    // console.log(false || true);  // Output: true
    // console.log(false || false); // Output: false

    let n = 90;
    let z = 10;

    console.log("90>10 || 90===10 = ", 90>10 || 90===10);
    console.log("90<10 || 90===90 = ", 90<10 || 90===90);
     console.log("90<10 || 90===10 = ", 90<10 || 90===10);


    //  3.Logical NOT (!): This is a unary operator that reverses the boolean value of its single operand.
    //  If the operand is true, it returns false, and if the operand is false, it returns true. 

    // console.log(!true);  // Output: false
    // console.log(!false); // Output: true


    let yy = 40;
    let uu = 50;

    console.log( "!(40<50) = " , !(40<50) );
    console.log( "!(40>50) = " , !(40>50) );

    // conversion - to come in implicit - tochange maually data type

    // In JavaScript, "conversion" refers to the process of changing a value from one data type to another.
    //  This is also commonly known as "type conversion" or "type casting." JavaScript,
    //  being a dynamically and weakly-typed language, handles type conversions in two primary ways: 
// Explicit Type Conversion (Type Casting): This involves manually converting a value from one type to another
//  using built-in functions or constructors. This provides more control over the conversion process.
//  Common explicit conversion functions include:

// Number(): Converts a value to a number.
// String(): Converts a value to a string.
// Boolean(): Converts a value to a boolean.
// parseInt(): Parses a string and returns an integer.
// parseFloat(): Parses a string and returns a floating-point number.

    let number = "30"
    console.log("number = ",number);
    console.log( typeof number);

    // now we covert string into no
 let result = Number(number);
 console.log(result);
 console.log( typeof result);

//  ex 

 let number1 = 30
    console.log("number1 = ",number1);
    console.log( typeof number1);

 // now we covert no into string
 let result2 = String(number1);
 console.log(result2);
 console.log( typeof result2);


//  Implicit Type Conversion (Coercion): This occurs automatically when JavaScript encounters 
// an operation or context that requires a value of a different type. 
// For instance, when adding a number and a string using the + operator, 
// JavaScript implicitly converts the number to a string to perform string concatenation.

// JavaScript


//     let result = 5 + "hello"; // 5 is implicitly converted to "5"
//     console.log(result); // Output: "5hello"




// ?In JavaScript, string concatenation refers to the process of combining two or more strings into a single, 
// new string. Several methods can be used to achieve this: using the + operator. 
// This is the most common and straightforward method. The + operator, typically used for addition, 
// also performs string concatenation when one or both operands are strings.

let firstword = "lok";
let secondword = "shabha";

console.log("firstword+secondword =" , firstword+secondword);// concatinate

console.log("15" + 5);//corcioun

console.log("15" +  (45+5));//corcioun

console.log("15" - 5);//corcioun


// shortcut of convert number into  string

console.log(+"25");
console.log(+"25" + 5);

// javascript true ki value koh 1 kehta hai or false ki value koh 0 kehta hai

console.log(5 + true);

console.log(6 + true);

console.log(6 + false);



// how to take average 

let math = 40;
let science = 50;
let english = 90;
let history = 55;


let average = (math + science + english + history) / 4;

console.log(average);

// "Brackets are necessary to calculate the average." either this value calculate on BODMAS according;

// history/4 then it calculate all addition 
// ex - 55/4 +90+50+40



// Swapting method

// third party involment

let rakesh = 40;
let rakhi = 90;

let temp = rakesh;

rakesh=rakhi;
 rakhi = temp;

 console.log(rakesh);
 console.log(rakhi);


//  without any third party

let m = 40;
let p = 50;

m = m + p
console.log("m+p = = " , m);   
//  40+50=90

p = m - p 
console.log("p = " ,p);

// p ki value 40 ayegi because of m ki value 90-50


m = m - p

// 90 - 40

console.log("m = " , m);


//conditional statement - to implement some condition in the code

// ()- this is called parethesis

// if the condition is true thrn block will execute

// if statement 

let score = 95;

if(score>90){
    console.log("you will get a bike")
}

let score2 = 75

if(score2>90){                           // in this condition you did not get 90 or above marks so ans ia in false the code wii not execute
    console.log("you will get a bike") 
}


// if-else statement

// in this situation if  statement not work then else code will execute

let age = 25;

if(age>18) {
    console.log("you are eligible to get a license")
}else{
    console.log("you are not eligile")
}

let age2 = 17;

if(age2>18) {
    console.log("you are eligible to get a license")
}else{
    console.log("you are not eligile")
}

// odd/even no

let number2 = 12;

if(number2 % 2 === 0){
    console.log("even number")
}else{
    console.log("odd no")
}

let number3 = 12;

if(number3 % 2 === 1){
    console.log("even number")
}else{
    console.log("odd no")
}


// // ""
// // ''
// ''

// to print the statement we can write in string

let marks = 50;
console.log(`marks = ${marks}`) // best and better technique to write


let marks2 = 80;
console.log("marks2 = " , marks2);

let marks3 = 66;
console.log('marks3 = ' , marks3)


































































