 //semicolon is mandatory Before()
  //if you are writting () next line 
  //after eecuting any function or after ()




console.log('Start');
(10 === 10?console.log('equal'):console.log('NotEqual'))
console.log('end');
console.log('--------------------');
function test() {
    function inner(){
        console.log('Inner function');
    }
    return inner;
}
// const val =test()
// console.log(val);
// val()
// console.log(test());
//function currying
test()();
(function(){
    console.log('hello');
})()

