//String method

let str ='Hello'
str.toUpperCase()
const result =str.toUpperCase()
//bcz primitive types are immutable
console.log(str);//Hello
console.log(result); //HELLO


//toLowercase
         //012345678910111213
let greet ='Good Afternoon'
greet =greet.toLowerCase()
console.log(greet);              //good afternoon

console.log((greet.charAt(13)));
console.log(greet.indexOf('o',3));
const res = str.concat(' ,',greet ,'all')
console.log(res);
const hasNoon = greet.includes('noon')
console.log('hasNoon',hasNoon);
const value =greet.replace('afternoon','night')
console.log(value);

const data = 'Hello all, Welcome to javastring session'

//11 
const extractedStr =data.substr(11,10) //from 11th index till 10 elements
console.log(extractedStr);//welcome to

//end is not inclusive
const substrVal = data.substring(1,4) // 4th index is not inclusive
console.log(substrVal);//ell


//trim remove the spaces from first and last not inbetween

const email ='         chandan.k@testyantra.com    '
console.log('email',email);
const emailAfterTrim = email.trim();
console.log('emailAfterTrim',emailAfterTrim);
const gmail = '          chandan.k@testyantra.com   ' 
console.log('start -' ,gmail.trimStart()); //ignore the  left side or first space
console.log('end -',gmail.trimEnd());//ignore the right side space

