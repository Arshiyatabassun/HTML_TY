let a = 20;
console.log(a);//20

a = 30;
console.log(a);//30

let b = 100;
console.log(b);//100

a = b
console.log(a);//100
console.log(b);//100

b = 200
console.log(b);//200
console.log(a);//100
console.log('-----------------------------');


const person = {
    firstName :'Ajay',
    lastName :'k'
}
console.log(person.firstName);    //Ajay
const personCopy = person
console.log(personCopy.firstName); //Ajay

personCopy.firstName = 'Sujeet'
console.log(personCopy.firstName);//sujeet

const personCopyNew =personCopy
personCopyNew.firstName ='GURU'
console.log(person.firstName);//GURU
console.log(personCopy.firstName);
console.log(personCopyNew.firstName);

const val = 20
const val1 = 20
//compare the values
console.log(val === val1);   //true
//compares the address of the object
console.log(person === personCopy); //true


const car = {
    carBrand :'Jaguar',
    moreDetails:{
        price :1000000

    }
}



const car1 = {
    carBrand :'Jaguar',
    moreDetails:{
        price :1000000

    }
}



car1.moreDetails = car.moreDetails

//Never ever compare the objects using strict equal to 
//bcz it compares the address ,doesnot compare the data

console.log(car === car1);            //false
console.log('--------------------------------');
console.log(car.moreDetails === car1.moreDetails);//true



const mobile = {
    price :9000,
    brand:'MI'
}

//taking copy of the mobile (address will be copied)
const mobileCopy = mobile

//spread operator (...)ES6 features
//shallow copy (first level of properties will be copied)

const mobileCopyNew = {...mobile}
mobileCopyNew.price =40000
console.log(mobileCopyNew.price); //4000
console.log(mobile.price);       //9000
console.log(mobileCopy.price);   //9000

console.log('----------------------------------');
mobile.brand ='Samsung'
console.log(mobile.brand);         //Samsung
console.log(mobileCopy.brand);     //Samsung
console.log(mobileCopyNew.brand);  //MI


const movie ={
    movieName:'spiderman no way home',
    director :'John watts',
    actor:'Tom Holland',
    moreDetails:{
        budget:'200 million USD',
        heroine:'Zendya',
        villain:'Goblin'
    }
}
//Deep Copy
//taking multiple level copy using spread operator
const movieCopy ={
    ...movie ,
    moreDetails : {...movie.moreDetails}
}
movie.director = 'Upendra'
console.log(movie.director)
;             //Upendra
console.log(movieCopy.director);         //John Watts
console.log('---------------------');
movie.moreDetails.heroine = 'Ramya'
console.log(movie.moreDetails.heroine);       //Ramya
console.log(movieCopy.moreDetails.heroine);    //Zendya
console.log('-------------------------------------');

const bike ={
    price :70000,
    brand:'bajaj',
    bikeName:'pulsar',
    engineDetails :{
        cc :'200cc',
        stroke:'4 stroke'
    }
}
//deep copy of an object /array
//all the level of object/array will be copied 
//i-e,new object/array will be created
const bikeDeepCopy =JSON.parse(JSON.stringify(bike))
bike.engineDetails.cc ='250cc'
console.log(bike.engineDetails.cc);   //250cc
console.log(bikeDeepCopy.engineDetails.cc); //250cc
console.log('-----------------------------------');
const myObj ={
    firstName:'Arshi'
}
const myObj1 = {
    lastName:'Tabassum'
}
//Merge two objects using spread operator
const myObj2 ={
    ...myObj,
    ...myObj1
}
console.log(myObj2);

//Splice method
const numbers = [10,20,30,40,50]
const deletedElements = numbers.splice(2,2,60,70,80)
console.log('deletedElements',deletedElements);  //30 40
console.log('numbers',numbers);   //10 20 60 70 80 50
console.log('-----------------------------------');
//if we want to only add elements without deleting
//pass delete count as 0(second parameter)

const deletedElements1 =numbers.splice(1,0,100,110)
console.log('deletedElements1',deletedElements1);
console.log('numbers',numbers);


//Slice method
const nums =[10,20,30,40,50]
const deletedNums =nums.slice(1,3)
console.log('deletedNums',deletedNums);
console.log('nums',nums);            //10,20,30,40,50   


//ShallowCopy of array
const numsCopy =nums.slice(0)
console.log('numsCopy',numsCopy);//10,20,30,40,50
console.log('nums',nums); //10,20,30,40,50
nums[0] = 1000;
console.log(nums[0]);  //1000
console.log(numsCopy[0]);//10


//copy(address is copied) 
//changing n will also change n1
const n = [10,20]
const n1 =n;
n[0] = 90;
console.log(n[0]);  //90
console.log(n1[0]); //90



const movies =['spiderman','Batman','Antman','Iron man']
//shallow copy using spread operator for array
const moviesCopy = [...movies] 
movies[0] = 'shaktiman'
console.log(movies[0]); //shaktiman
console.log(moviesCopy[0]); //spiderman






