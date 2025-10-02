// closure - work with nested function -in one function inside in one funtion- ek function ke andar ek aur function


function jerry(){
    console.log("jerry function");
}
function barbi(){
    console.log("barbi function");
}
jerry()
barbi()


//in one function inside the function we can call second function - ek function ke andar dusra function call kar skte hai

// function outer(){
//     console.log("outer function");
//     inner()        
// }
// function inner(){
//     console.log("inner function");
// }
// outer(); //the ans is first wll come to print inner function because of hmne ne inner function koh outer function mei first call karaya hai then will be print outer function

// ans of inner fun , outer fun



//3.
// function kitty(){
//     console.log("hello kitty");

//     function tom(){
//         console.log("hello tom")
//     }
//     tom()
    
    
// }

// kitty()


//4.  we can make variables in hero function but they access the surronding the state of heroine function because of lexical environmnet


// function hero(){
//     console.log("hero function")
//     let a = 14;   //these variable are created in outerfunction
//     let b = 5

//     function heroine(){
//         console.log("heroine function");  
//     return a+b;   //i access the sorrounding state of outer function because of lexical environement
   

//     }
//     return heroine;
   
// }

// let heroinefunction = hero();
// console.log(heroinefunction)

function outer() {
  console.log("outer function ");

  let a = 14; // these variable are created in outerfunction
  let b = 5;

  function inner() {
    console.log("inner function ");

    return a + b; // i access the sorrounding state of outer function because of lexical environement
  }

  return inner;
}


