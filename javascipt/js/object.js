//object - nonprimitive data type (reference)
//object is a key value pair
//we can write object in curly brackts

//ex studentName = key in object 
//    nishtha = is object and also value

let student = {
    studentName : "Nistha",
    age: 45,
    subject:"maths",
    city:"rajkot"




}

console.log(student)

//agar hume sirf name hi print krvana hai toh 2 types che
 //with dot notation

//  let student = {
//     studentName : "Nistha",
//     age: 45,
//     subject:"maths",
//     city:"rajkot"




// }

console.log(student.studentName)
console.log(student.age)


// 2.with bracket notion


console.log(student ["subject"])



console.log("break")


// agar hume keys  or value store  print krvana hai woh araray ke andar ayega

let student2 ={

    studentName: "raj",
    age:23,
    subject:"science",
    city:"baroda"
}

let store = Object.keys(student2)
let store2 = Object.values(student2)



console.log(store)
console.log(store2)


console.log("break")

let obj = {
    userName :"barbi",
    subject:["english", "maths" , "html"],


    //hume subject ke marks ko print karvana hoy

    testsubject :{
        hindi:45,
        maths:77,
        english:66,
        science:88


    }

}
console.log(obj.subject[2])   // agar hume subject mei html print krvana hoy toh
let array = ["hindi" , "maths" , "english" , "science"]

console.log(obj.testsubject[array[1]])



let obj2 = {

 subject:{
    Maths:35,
    english:66,
    hindi:77
 }

}

let array6 =  ["Maths" , "english", "hindi"]

let sum = 0 
for(let i = 0 ; i<array6.length ; i++){
    sum+= obj2.subject [array6[i]]
}

console.log(sum)


