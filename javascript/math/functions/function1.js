
//Named Functions
function add(num1 ,num2){
    var sum = num1 + num2
    console.log('sum -',sum);
}

add(10,20)
add(30,40)


function findIsEligibleForVoting (age){
    if(age>= 18)
    {
        return true;
    }
    else{
        return false;

    }
}
function printEligibleOrNot(result){
    if(result === true)
    {
        console.log('Eligible for Voting');
    }
    else{
        console.log('Not Eligible');
    }
}
 var result = findIsEligibleForVoting(12)
 printEligibleOrNot(result)
 var result1 = findIsEligibleForVoting(34)
 printEligibleOrNot(result1)


 //Anonymous function
 var findProduct = function (a,b){
     return a*b
 }
 console.log(findProduct);

 var productVal = findProduct(12,3);
 console.log('product - ',productVal);

 //example 2nd
  var person = {
      testFunc :function() {
          console.log('test func executed');
      }
  }
  person.testFunc();

  //Self Invoked Function (IIFE)
  //Immediatley Invoked Function Expression
// syntax-
// (function(arg1,arg2,arg3){


// })(10,20,30)

// ex-
(function(a,b){
    var diff = b-a;
    console.log('difference - ',diff);
})(10,20);

//Arrow function (ES6 features)
console.log('------------Arrow Functions--------------');//1st way
var greet = () => {
    console.log('Greet function');
    console.log('Welcome');
}
greet()

var squareOfNumber = num =>num*num
var result = squareOfNumber(2)
console.log('Result',result);
console.log(squareOfNumber(3));


var calculateTotalPrice = (price ,gstper) => {
    var totalPrice = (price*gstper/100) +price
    return totalPrice
}
var priceVal = calculateTotalPrice(300 ,18)
console.log(priceVal);

let arr1 =[1,30,21,10000]
arr1.sort()
console.log(arr1);

let arr2 =[1,20,505,6000,40,1,30,10000]
console.log(arr2.sort())
// let sort=(function(){

//     console.log(arr2.sort());
// })
// sort(arr2);
