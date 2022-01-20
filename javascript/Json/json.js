const jsObject ={
    firstName:'Arshi',
    lastName:'Tabas',
    age:17,
    isAdult:false,
    hobbies:["cricket","singing"],
    address:{
        pincode:560046,
        state:"karnataka",
        city:"Banglore"
    }
}
console.log('JavaScript to JSON');
const stringifiedJSON =JSON.stringify(jsObject)
console.log(stringifiedJSON);
console.log(typeof  stringifiedJSON);
console.log('JSON to javascript');
const javascriptObject = JSON.parse(stringifiedJSON)
console.log(javascriptObject);

