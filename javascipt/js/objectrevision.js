let selfDetail = {
 userName : "Nishtha",
 age: 23,
 education:"web development and frontend course",
 institute:function(){
    console.log("red and white institute")  // anonmyuos function jiske andar name nhi hota but woh key ki hek=lp se catch karta hai

 }
}

console.log(selfDetail)
selfDetail.institute()
console.log(selfDetail.institute)

selfDetail.courseduration = "1year"

console.log(selfDetail) // create from outside 