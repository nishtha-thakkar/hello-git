//method of function

let arr = [];
    arr  [0] = 12;
    arr  [1] = 32;
    arr  [2] = 34;
console.log(arr )// answer is 12,24,32

console.log("break")


// method of array 

//push, pop,shift,unshift,string,join

//1.push method - to add the element in the last (inbuid js function)

let arr2 = [1,2,3]

arr2.push(4)
arr2.push(56)

console.log(arr2)   // answer is 1 2 3 4 56

console.log("break")  

//2.pop - to remove the element from the last element

let arr3 = [1,2,3,4,56]
arr3.pop()
console.log(arr3)   // answer is 1 2 3 4 

console.log("break")  

//3. shift - remove the first element from the array

let arr4 = [1,2,3,4]
// arr4.shift()
   //console.log(arr4)
let store = arr4.shift()  // answer is 2 3 4

 console.log(arr4)   // ans is 2 3 4
 console.log(store)  // ans is 1 because of it store 1 - removed element from the first


console.log("break")

//4.unshift - insert new element in the first  unshift() is an array method that adds one or more elements to the beginning of an array.
//It also returns the new length of the array.

let arr5=[4,5,6,7]     //original array
arr5.unshift(1,2,3)  //adds 1, 2, 3 to the beginning


console.log(arr5)


let arr6 = [3, 4];
arr6.unshift(1, 2);

console.log(arr6);


//push() → adds to the end.

//unshift() → adds to the start.

console.log("break")


//5 The splice() method is used to add, remove, or replace elements in an array.
//It modifies the original array and returns an array of the removed elements.

//array.splice(startIndex, deleteCount, item1, item2, ...)

//Example 1: Remove elements


let arr7 = [1, 2, 3, 4, 5];
let removed = arr7.splice(2, 2);

console.log(arr7);     // [1, 2, 5]
console.log(removed)   // 3and 4

//Explanation:

// Index 2 એટલે ત્રીજો element (3).

// ત્યાંથી 2 element delete કર્યા → એટલે 3 અને 4.

// બાકી [1, 2, 5].

// splice() return કરે [3,4].


console.log("break")

//Example 2: Add elements
let arr8 = [1, 2, 5];
arr8.splice(2, 0 , 3 ,4)
console.log(arr8)

console.log("break")
//Rule: splice(index, ...) → નવા items એ index પહેલાં જ insert થાય છે, value ને replace કે shift કરી દે છે.

//Example 3: Replace elements

let arr9 = [1,2,3,4]
arr9.splice(1 ,2, 10,30)
console.log(arr9)

//Index 1 (value = 2) થી શરૂ થયું.

// 2 element delete થયા (2,3).

// ત્યાં 10, 20 insert થયા.


//Example 4: Remove all after index
let arr10 = [1,2,3,4,5]
arr10.splice(3)
console.log(arr10)


//Explanation:

// Index 3 એટલે value 4.

// ત્યાંથી આગળના બધા delete થઈ ગયા (4,5).

//Summary:

//Remove → splice(index, count)

// Add → splice(index, 0, items...)

// Replace → splice(index, count, items...)


///Conclusion:

// Array methods → work only on arrays.

// String methods → work only on strings.



//string function - primitive data type

// split

//The split() method is a String method.
//It splits a string into an array of substrings, based on a separator you provide.
 
  // we need ouput ("hello" , "world")


  //1. Split by space
  let str = "I love JavaScript";
  let arr12 = str.split(" ");
  console.log(arr12); // ["I", "love", "JavaScript"]




// 2. Split by comma

let str2  = "apple,banana,orange"
let arr13 = str2.split(",");
console.log(arr13)


//3. Split into characters

let str3 = "hello";
let arr14 = str3.split("");
console.log(arr14)


//4.4. Limit the number of splits


let str4 = "one two three four"
let arr15 = str4.split(" ",2)
console.log(arr15)  // ["one", "two"]


//Summary

// split() → string → array

// join() → array → string




//5.trim

// The trim() method is a String method.
// It removes all whitespace from the beginning and end of a string.

// Whitespace includes spaces, tabs, and newlines.

// It does not remove spaces in the middle of the string.


let userName = "            hello world           "


console.log(userName);
console.log(userName.trim())




//  join method

//It converts an array into a string.

//You can choose a separator between elements.


let store2 = ["hello" , "kitty"]
console.log(store2.join["-"])

//1. Default (comma)

let arr40 = [1, 2, 3, 4];
console.log(arr40.join()); 

//2. Custom separator
let arr41 = [1, 2, 3, 4];
console.log(arr41.join("-")); 


//3. Empty string separator

let arr42 = ["h", "e", "l", "l", "o"];
console.log(arr42.join(""));  // "hello"



