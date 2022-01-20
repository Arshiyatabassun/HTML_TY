//Named function
function reverseString(str){
    var newString=""
    for(var i =str.length -1 ;i >= 0 ;i--)
    {
        newString +=str[i];
    }
    return newString;
}
console.log(reverseString('hello'));
console.log('----------------------------------------');

//Annonymous function
var reverseString =function (str){
    var newString=""
    for(var i =str.length -1 ;i >= 0 ;i--)
    {
        newString +=str[i];
    }
    return newString;
}
console.log(reverseString('hello'));

//Arrow Function
var reverseString  =(str) =>{
    var newString=""
    for(var i =str.length -1 ;i >= 0 ;i--)
    {
        newString +=str[i];
    }
    return newString;
}
console.log(reverseString('hello'));

//self invoked function
(function (str){
    for(var i = str.length -1 ;i >= 0 ;i--)
    {
        var newString;
        newString +=str[i];
    }
    return newString;
})('hello');


    
