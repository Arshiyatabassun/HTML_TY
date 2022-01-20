console.log('App file');

var person = {
       firstName:'Allu Arjun',
       lastName:'Arvind',
       age:39,
       gender:'Male',
       isMarried:true,
       getFullName:function()
       {
           return this.firstName + ''+this.lastName
       }
}

console.log('person',person)

var fName = person.firstName//dot operator
console.log('FirstName -',fName);

var lName =person.lastName
console.log('LastName -',lName);

var pAge = person.age
console.log('Age -',pAge);

var pGender =person.gender;
console.log('Gender -',pGender);

var PisMarried =person.isMarried
console.log('PisMarried -',PisMarried);

var fullName =person.getFullName()
console.log('Full Name -' ,fullName);

console.log('-------------------------------------------------');


var marker = {
    color :'black',
    height: '10cm',
    'pri ce': 25
}
//Another way of accessing the properties of objects

console.log(marker['pri ce']);//subscript operator

console.log(marker['color']);

console.log(marker['height']);

console.log(person['getFullName']());// function calling

console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --");

var car = new Object()
car.price =40000000
car.model =2021
car.brand ='Toyota'
car.cname ='Fortuner'
car.color ='pink'
console.log(car);
console.log(car.price);
console.log(car.model);
console.log(car.brand);
console.log(car.cname);
console.log(car.color);


