// loop In JavaScript, a loop is a programming tool that allows you to repeatedly execute a block of code until 
// a certain condition is met. Instead of writing the same code multiple times, you can use a loop to automate
//  repetitive tasks, making your code more efficient and concise. 

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);

// 1 to 10000

// // entry loop
// while
// for

// // exit loop
// do while

// while loop

// value inintialzaiton

// while(conditon){

//   // increment decrement i++ i--
// }

// In dry run 
// intialize  the value 
// condition check 
// execute block 
// inc / dec


// 1.entey loop
//   a while lppo

let i = 1;

while(i<=10000){      // 1<=10000 , 2<=10000(true) , 3(true), 9999<=10000(true) , 10000<=10000(true) , 10001<=10000(flase) break the code here
    console.log(i)  // 1 , 2 , 3 , 9999 ,10000
    i++    //2 , 3 , 4 , 10000 ,10001
}

console.log("end")


// 2. ex

let i2 = 100          
while(i2>=1){          //  100>=1 (true), 99>=1(true) , 2>=1(true), 1>=1(true) , o>=1(false) inthis condition is false our code is flase
    console.log(i2)    //100 , 99 , 2 , 1 , 
    i2--               //99  ,98 , 1 . 0
}
console.log("end")

let i4 = 1

while(i4<=50){
    if(i4 % 2 ===0){
        console.log(`the even number is ${i4}`)     }
       i4++

 }

 console.log("end")



// // b for loop

// // for(intialization ; condition ; inc / dec){

// // }


for(let i3 = 1; i3<=12;i3++) {
    console.log(i3);
}


let sum2 = 30;

for(let i4 = 10 ; i4<=15 ; i4++){
    sum2 = sum2+i4
}
console.log("sum2 = ", sum2);


let sum3 = 0

for(let i = 2; i<=50; i++){

    if(i%2===0)

    sum3 = sum3+i
}
console.log("sum3 = " , sum3)



// 2. exit loop 

//  do while // if code is false but still code will execute at least one time.


let k = 1;
do{
    console.log(k)
    k++
}while(k<=5);


let l = 2;
do{
    l++
    console.log(l)
}while(l<=5)


 let j = 1;
 do{
    console.log(j)
    j++
 } while(j<=0)

    console.log("break")





// nested for loop

    // ques-

    // 1
    // 12 
    // 123
    // 1234
    // 12345






   let number = 5
   for (let i = 1 ; i<=number ; i++){ 
    let str = "" 
    for(let k = 1 ; k<=i ; k++)
        str = str+k              
    console.log(str)
   }

   console.log("complete loop")


//str = ""

// Inner loop:

// k = 1 → str = "" + "1" = "1"
 

// str = "" (reset again at start of outer loop)

// Inner loop:

// k = 1 → str = "1"

// k = 2 → str = "12"

// Print → 12


// let number = 5
//    for (let i = 1 ; i<=number ; i++){   //2
//     let str = ""                        //1
//     for(let k = 1 ; k<=i ; k++)          //2
//         str = str+i                      12
//     console.log(str)
//    }




///functions-js is a single threaded language dynamic language -top se bottom tak line execute because of interpreter - interpreter mean line by line check

// functions(block of code)

//1.normal function

//function  show - function is keyword and show is name of the function

//ex - function name is use for call
console.log("ex-1")
function show(){
    console.log(1)

}
show()

console.log("complete 1 ex of function")

console.log("ex-2")
// 2.

function show1(){
    console.log(1)
}
function show2(){
    console.log(2)
}
function show3(){
    console.log(3)
}
function show4(){
    console.log(4)
}
function show5(){
    console.log(5)
}

show1()
show4()
show2()
show5()
show3()

console.log("complete 2 ex of function")


// ex-3 to declare the funtion name before insted of last , work same no change

console.log("ex-3")
barbi()
function barbi(){
    console.log("princess")
}

console.log("complete 3 ex of function")


//4.

console.log("ex-4")

function sum(){
    let a = 15;
    let b = 12;

    console.log("a+b = ", a+b)
}

sum()

console.log("complete 4 ex of function")    










