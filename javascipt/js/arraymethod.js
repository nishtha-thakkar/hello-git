//array with functions(method)- function means method

//map  filter foreach indexof findindex incldes everysome

//array method

//HDF-(higher order functions) - those method who have call back function asan argument

//in hdf - map filter foreach


//1. map 

//map() ek array method che je original array par loop kare che ane navi array return kare che.
//Pratyek element par tame function apply kari shako cho.

// step -1 -internally create new array
// step-2 - update new array with user operations
// step-3 -return new array which is crated

let array = [12,1,2,3,55,6,7]  //-element  12*2 =24  1*2=2

let newArray = array.map((element)=>{
    return element*2
})
console.log(newArray)
console.log("break ex 1 of map")

//2/

let newArray2 = array.map((element)=>{

    return element/2
})

console.log(newArray2)

console.log("break ex 2 of map")



let newArray3= array.map((element)=>{

    return element+2
})

console.log(newArray3)
console.log("break ex 3 of map")



console.log("2. filter methodof an array")
//2. filter

// work same as map (based on condition it will return , if condition is true it will return that element otherwise faluse value not be return)

//element -12,1,2,3,55,6,7]

let result = array.filter((element)=>{
    return element>7
})
console.log(result)

console.log("break ex 1 of filter")
  //2 example
let result2 = array.filter((element)=>{
    return element%2===0
})
console.log(result2)

console.log("break ex 2 of filter")

//3 example


let result3 = array.filter((element)=>{
    return element%2!==0
})
console.log(result3)

console.log("break ex 3 of filter")


console.log("3. foreach methodof an array")

//3.foreach - could not retutn anything

// element - 12,1,2,3,55,6,7

let number = array.forEach((element)=>{
    console.log(element)

})


console.log("break ex 1of foreach")

2//
let sum = 0
let number2 = array.forEach((element)=>{

    sum += element
    

})
console.log(sum)

console.log("break ex 2 of foreach")


console.log("4. indexof methodof an array")

// 4. indexof  - what will come first they catch only and ans is an index

let array2 = [10,11,23,42,5,51,55,23,55]

     //index [ 0 1 2 3 4 5 6 7 8]

const indexNumber = array2.indexOf(23)

console.log(indexNumber)  // ans is 2 bcause of 23 indexis 2 and in this example 2 timescame 23 but woh joh pele 23 hoga oska number catch krega

console.log("break")


const indexNumber2 = array2.indexOf(123)

console.log(indexNumber2)   // ans is-1 because of 123 element hai hi nhi



console.log("5. findindex methodof an array")

//5. findindex

// element  array2 [10,11,23,42,5,51,55,23,55]

let store = array2.findIndex((element)=>{
    return element>30

})

console.log(store)  // ans is 3 beacuse of 42 is grater than 30 and first element toh voh catch up karga


console.log(" break")

console.log(" 2 nd ex of findindex")

//element  array2 [10,11,23,42,5,51,55,23,55]

//2.

let store2 = array2.findIndex((element)=>{
    return element%2===0

})

console.log(store2)   // ans is 0 because of 10 is even and first element catch up

console.log(" break")


console.log(" 3 nd ex of findindex")

//element  array2 [10,11,23,42,5,51,55,23,55]
 //3 

 let store3 = array2.findIndex((element)=>{
    return element%2!==0

})

console.log(store3)   // ans is 1 because of 10 is odd  and first element catch up

console.log(" break")

console.log(" 4th ex of findindex")

//4  findindex

let store4 = array2.findIndex((element)=>{
    return element===400

})

console.log(store4)  // ans is -1 because of element hmara 400 gnhi hai

console.log(" break")

console.log("includes method")


//6.includes
//array 
let array3 = ["one" , "two" , "three" ,"four" , "five" ]

//index        0        1       2        3        4

let store5 = array3.includes("two")   // ("tw")- ans is false
console.log(store5)   // ans is in true or false


//string

let string = "batman"

//index       012345

let string1 = string.includes("bat")   // ("man - ans is true")  ("tab-ans is fallse")
console.log(string1)

console.log("method 7 every")
//7. every - agar sre element ek hoge toh hi ans true ayega varna false ayega

//ex 5 5 5 5-true  5551-false

let store8 = [1,2,3,4,5,6,7,8,9,]

 let bollen = store8.every((element)=>{

   return element ==8;
}


)

console.log(bollen)

console.log("break")


console.log("2nd ex")


let store9 = [5,5,5,5,5,5]
let bollen2 = store9.every((element)=>{
    return element ==5;
}
)
console.log(bollen2)
 console.log("break")


  console.log("some method")


  //8.some - if one element will true it gives the ans true

  let store10 = [1,2,3,4,5,6]
let bollen3 = store10.some((element)=>{
    return element ==3;
}
)
console.log(bollen3)
 console.log("break")

 












































