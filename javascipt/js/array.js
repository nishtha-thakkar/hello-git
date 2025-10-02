//Introduction of Array in JS (non primitive data type)(carry the reference )

//Array

////syntax array=[]// so i  can store multiple of data types in array

//example of shooping while i go for shopping in different places snd they gave me diff bags so it is difficult for me to carry but i put all bags in one bag so it is easy for me to carry

let store = [1, 2, 3, 4, 5, 55, ]; // elements
// index     0 ,1, 2, 3 ,4, 5 


console.log(store[2]);   // i write index no in square bracket and it will give me element
console.log(store[0]);
console.log(store[1]);


console.log(store[6]); // undefine because of not store index no and also element 

// length element - to decide the length of element - count the element how many is

let store2 = [7, 8, 9, 10, 11, 12,13,14]
//            0, 1, 2, 3,  4,  5, 6
console.log(store2.length)   //ans is 8

console.log("break")

//loop use kr skta hu
// //store.length-1 = for getting last index of an array


for (let i = 0 ; i <= store2.length - 1 ; i++){
    console.log(i)

}
console.log("break")

for (let i2= 0 ; i2<= store2.length - 1 ; i2++){
    console.log(store2[i2])   // print element
}
console.log("break")

for (let i2= 0 ; i2<= store2.length - 1 ; i2++){
    //nsole.log(store2[i2]) // print element
    if (store2[i2] % 2 ===0 ){
        console.log(store2[i2]);  // print emement

    }
}
console.log("break")


for (let i3 = store2.length - 1 ; i3 >= 0 ; i3--){
    console.log(store2[i3]);
}





















