
//explicit conversion - joh hum khud se change krte hai

let number = "1234"

let result = Number(number)

console.log(result)


let number2 = "1234a"

let result2 = Number(number2)

console.log(result2)


// convert string into bollen

let str = ""
let string = Boolean(str)

console.log(string)   // false beacause of string is empty if string is not empty they the ans is true

//impliit - joh js khud se samj kar chnage krti hai  jrthi error through na ho


console.log(11+ "11")  // no koh string mei convert krti hai jese error through na ho

//concatinate krte hai  or corcian - js khud se convert krta hai

console.log(11 - "11")  // isme string koh no  no mei cnvert krti hao


// short cut to convert string into no

console.log(+"1234")


console.log(5 + +"25")


//true value = 1 , false value = 0
console.log( 5 + true)
console.log( 5 - true)

console.log(true-false)

console.log(false-true)

console.log(15 + "15" + +"15");


