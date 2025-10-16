for(let i= 1 ; i <=5 ; i++){   //  1<=5    // for rows
    let str = ""                //

    for(let j=1; j<=5 ; j++){     // 1<=5  , 2<=5 , 3<=5 , 4<=5 , 5<=5
        str += j                    // "" + 1 = 1  "1"+2 12 , "12"+3=123 , "123"+4 =1234, "1234"+5 =12345




    }

    console.log(str) // 12345




}

for(let i= 1 ; i <=5 ; i++){          // 1<=5 , 
    let str = ""

    for(let j=1; j<=5 ; j++){           // 1<=5 , 2<=5
        str += j                        // ""+1 = 1 ,  "1"+2 =12

         console.log(str)                // 1  
                                         // "1"+2 = 12
                                         //  "12"+3 =123
                                         //





    }

   


 }


// 3.
let count = 0

for (let i2 = 1 ; i2<=5; i2++){         // 1<=5 -true  , 2<=5 -true
    for(let j2=1; j2<=5 ;j2++){           // 1<=5 ,2<=5 -true , 3<=5-true,4<=5-true,5<=5-true
        count ++                          // 0+1=1 , 1+1=2 , 2+1=3 , 3+1=4 ,4+1=5

                                              //1<=5 ,2<=5 -true , 3<=5-true,4<=5-true,5<=5-true
                                              //10   

                                               //1<=5 ,2<=5 -true , 3<=5-true,4<=5-true,5<=5-true
                                               //15

                                                //1<=5 ,2<=5 -true , 3<=5-true,4<=5-true,5<=5-true
                                                // 20

                                               // 1<=5 ,2<=5 -true , 3<=5-true,4<=5-true,5<=5-true
                                               // 25 
        
    }
}
console.log(count) // ans is 25

//4.
let count2 = 0

for (let i2 = 1 ; i2<=5; i2++){          // 1<=5 ,2<=5 , 3<=5 , 4<=5 , 5<=5
    for(let j2=1; j2<=i2 ;j2++){            // 1<=1  , 1<=2 , 2<=2  , 1<=3 , 2<=3 , 3<=3

        count2 ++                       //1   2  3   4  5  6  7 8 9 10 11 12 13 14 15
    }
}
console.log(count2)   // ans is 15



//5
//print  1 
//       12
//        123
//        1234
//        12345


for (let i = 1; i<=5;i++){      // 1<=5  2<=1
    let str = ""

    for(let j=1 ; j<=i; j++){    // 1<=1 , 1<=2 , 2<=2
        str += j                 //"" + 1 =1
                                 // ""+1 = 1
                                 //  "1"+2 =  =12
    }
    console.log(str)   //1
}



// array

let array = [2,3,4,5,3]
console.log(array[0])    // to print array with index no
console.log(array[1])
console.log(array[2])
console.log(array[3])


//sum 

console.log(array[0]+array[1]+array[2]+array[3])

// 2 method
let sum = array[0]+array[1]+array[2]+array[3]
console.log(sum)


//3rd patten

let sum2 =0

for (i = 0 ; i<array.length; i++ ){   // 0<4   , 1<4 , 2<4 , 3<4
    sum2 += array[i]                 // 0+2 = 2  2+3=5 , 5+4=9 , 9 + 5 =14
} 
console.log(sum2)


//to print array

for(let i =0 ; i<array.length;i++){       // 0<4 , 1<4   
    console.log(array[i])                 // 2   , 3

}


for(let i =0 ; i<array.length;i++){    // 0<4  , 1<4
    console.log(array)                 // 23453 , 23453

}

//  to check username and password

let userName = "Nishtha_sodha"
let password = "2345"

if(userName === "Nishtha_sodha"){
    if(password === "2345"){
        console.log("login succesfully")
    }else{
        console.log("invalid password")
    }
}else{
    console.log("userName is wrong")
}


// function

function show(a , b , ){     // parameter which we can give any name

  console.log(a+b)
//   console.log(a+b+c)
}
show( 12 , 2) // argument to send the vale

show("1" , "2")

show(8 , "10")

show(8, 2 , )


// loop while and do while

// while and for loop - entry loop
// do-while- exit loop

//while

//initialize
// condition
//execute
//inc-dec

let a = 1

while(a<=5){       // 1<=5 , 2<=5 , 3<=5 , 4<=5,5<=5 ,6<=5-false
    console.log(a)  //1,2 ,3 ,4 ,5
    a++               //2 //3 //4 //5 //6
}
console.log("break")


let b = 1

while(b<=5){     //1<=5 , 2<=5 , 3<=5 , 4<=5,5<=5 ,6<=5-false
     b++       //2 //3 //4 //5 //6 
    console.log(b)  //,2 ,3 ,4 ,5 ,6
               
}
console.log("break")


//do while - at least one time code will be execute

//initialize
//execute
// inc-dec
// condition


let c = 1

do{
    console.log(c) //1 //2 //3 //4
    c++ //2//3 //4 //5
}while(c<=4) //2<=4 , 3<=4 ,4<=4,5<=5


function validation(email , password){
   if(email==="cdet"){
      if(password === 2345){
         console.log("login")
      }else{
         console.log("password is incorrect")
      }
   }else{
      console.log("email invalid")
   }

}

validation("cdet" , 2345)

let array5 = ["nishtha" , "deep" , "yash"]

for(i=0 ; i<array5.length ; i++){   0<3
check(array5[i])      // nishtha
}

function check(username){  //nishtha
    if(username === "yash"){    //nishtha ===yash
        console.log(username)
    }
}      // passing array element in function








