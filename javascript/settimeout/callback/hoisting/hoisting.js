
console.log(a);
var a =10; //global variables
var b =30  //global variables
console.log('b outside function -',b);
function test(){
    //variables Hoisting inside function
    //Local variables will be given first preference
    //if the variable is not defined locally JS engine
    //will search the varaibles in global scope
    //if the variable is declared locally JS engine
    //will not search the variable in global scope

    console.log('b inside function -',b);
    var b = 20          //local variable
    console.log('a inside function -',a);
}
test()
console.log('---------------------------------');
// function hoisting
function add(a,b) {
    console.log(a+b);
}
console.log('---------------------------------');
//greet() calling the annonymous function before
//assigning the function will result in error i-e, greet is not a function 
//because the greet variable will be hoisted to the top as a variable

var greet = function(){
    console.log('Welcome');
}
greet()

//var greet
//greet()                           //greet is not a function
//greet = function(){
  //  console.log('Welcome');
//}
 console.log('--------------------------------');

 //product()
 //calling the arrow function before assigning the function to variable will result in error
 //i-e greet is not a function bcz the product
 //will be hoistedn to the top as a product variable will be hoisted to the top as a product
 var product =(a,b) =>{
     console.log(a*b);
 }
 product(10,2)