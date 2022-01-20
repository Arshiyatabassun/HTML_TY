const person ={
    firstName :'Ajay',
    lastName:'G',
    getFullName:function (middleName){
        console.log(this);
        return `${this.firstName} ${middleName} ${this.lastName}`
    }
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFullName('kumar'));
const john ={
    firstName:'John',
    lastName:'P'
}
console.log(john.firstName);
console.log(john.lastName);
console.log('----------------------------');
//this will point to the object passed as first
//parameter to the call method
//Ex below - this will point to john object
//instead of person object 
const johnFulName =person.getFullName.call(john,'Abraham');
console.log('full name',johnFulName);

const  fullName =person.getFullName.apply(john,['Abraham'])
console.log(fullName );
console.log('--------------------');

console.log('---------------------bind function ------------------');
const teacher = {
    firstName:'Ajit',
    lastName:'K',
    getFullName:function (age,subjects){
        console.log(this);
        console.log('age',age);
        console.log('subject',subjects);
        return `${this.firstName} ${this.lastName}`

    }
}
const guru ={
    firstName:'Guru',
    lastName:'L'
}
/* create a copy of the getFullName and it returns that function and this will be pointing to the object
passed as first parameter*/


const getFullNameFunc =teacher.getFullName.bind(guru,10)
getFullNameFunc(['English'])
getFullNameFunc(['English','Kannada'])
getFullNameFunc(['English','Kannada'])

console.log('---------------------------------------------');


