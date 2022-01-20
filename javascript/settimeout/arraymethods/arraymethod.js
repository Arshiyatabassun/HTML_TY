//function or methods
//1.parameters
//2.what it returns //if not return anything means undefined
//3.functionality of the function (what it does)

var hobbies =['sleeping','coding','trekking','Bird Watch']
console.log('-----------PUSH-----------');
var hobbieslength = hobbies.push('Reading')
console.log('Hobbies after push',hobbies);
console.log('hobbiesLength',hobbieslength);
console.log('hobbies',hobbies.push('Cooking'));
console.log(hobbies);

console.log('---------------POP------------');
var deletedElement = hobbies.pop()
console.log('hobbies after pop',hobbies);
console.log('deletedElement',deletedElement);


console.log('----------forEach------------');
hobbies.forEach(function(value,index,arr){
    //debugger
    console.log(`${index}-${value}`);
})


console.log('-----------------------------------');
//Add the element at the start of the array
const lenOfHobbies = hobbies.unshift('Gaming')
console.log('hobbies after UNSHIFT ',hobbies);
console.log('hobbies length after unshift',lenOfHobbies);
console.log('----------------------------');
//removes the element at the start of the array
const deletedHobby =hobbies.shift()
console.log('hobbies after shift',hobbies);
console.log('deleted hobby after shift',deletedHobby);
console.log('---------------------------');
console.log('type of hobbies',typeof(hobbies));

//isArray returns true is its array else returns false
const isHobbiesArray = Array.isArray(hobbies)
console.log('isHobbiesArray',isHobbiesArray);
console.log('------------------------');

console.log(hobbies);
//check whether the element is present or not,
//if present returns true else returns false

const isCodingPresent =hobbies.includes('coding')
console.log('isCodingPresent',isCodingPresent);

//check whther element is present or not
//if present returns the index of the element else returns -1
const indexOfReading = hobbies.indexOf('Reading')
console.log('Index of Reading',indexOfReading);




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

console.log('-------------Map Method-------------------');
const numsArr = [100,200,300,400,500]
//const numsArrCopy =[]
//for(let i =0;i<numsArr.length;i++){
 //   numsArrCopy.push(numsArr[i]+10)
//}
//console.log(numsArrCopy);

const newNumsArr =numsArr.map((value,index,arr) =>{
    return value+10

})
console.log(numsArr);  //100,200,300,400,500
console.log(newNumsArr); //110,210,310,410,510

const ageArr = [45,56,9,89,10,5]
const filteredAges = ageArr.filter((value) =>{
    if(value >= 18){
        return true
    }else{
        return false
    }
})
console.log(ageArr);
console.log(filteredAges);

  //or
const filteredAge =ageArr.filter((value)=>{
    return value>=18
})
console.log(filteredAge);
//or
const filteredAge1 =ageArr.filter(value=> value>=18)

console.log(filteredAge1);

console.log('-- -- -- -- -- -- -- -- -- -- -- --');

const books =[
    {
        title :'Harry Potter',
        price :90,
        author:'J K Rowling'
    },
    {
        title :'Indian Constitution',
        price :720,
        author:'Lakshmi Kanth'
    },
    {
        title:' wings of fire',
        price:150,
        author:'A.P.J Abdul kalam'
    }

]
// //refference copy
 //const booksCopy =books
 //console.log(books === booksCopy); //true
 
 //const booksCopy = [...books]
 //console.log(books===booksCopy); false
 //console.log(books[0]===booksCopy[0]);  true

 //books[0].price =100
 //console.log(bookd[0].price);
 //console.log(booksCopy[0].price)

 //const booksCopy = books.map(books =>{
   //  return {...book}
 //})
//  console.log((booksCopy));
//  console.log(books[0]===booksCopy[0]); //false

//  books[0].price =100
//  console.log(books[0].price); //100
//  console.log(booksCopy[0].price);   //90


// const booksWithGst =books.map(book =>{
//     book.price = book.price *0.18 +book.price
//     return book
// })

//console.log(booksWithGst);      

//new price [106.2 ,849,177]


console.log('-- -- -- -- deep copy using spred operator ------');
const bookwithGstDeepCopy = books.map(book =>{
    const b ={...book}
    b.price =b.price *0.18+b.price
    return b
})
console.log(bookwithGstDeepCopy);
console.log(books);

console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -');

const products = [
    {
        productName:'LipStick',
        price :999,
        brand:'MayBeline'
    },
    {
        productName :'Eyeliner',
        price:500,
        brand:'Lakme'
    },{
        productName:'Trimmer',
        price:1000,
        brand:'Philips'
    },{
        productName:'Beard oil ',
        price:260,
        brand:'Beardo'
    }


]

const productWithGst =products.map(product => {
    const productCopy ={...product}
     productCopy.price = productCopy.price * 0.03 +productCopy.price;
     return productCopy;
})
console.log(productWithGst);
console.log(products);

console.log('----filter the [product where price is >500------------------------------');
const filteredProducts =products.filter((product) => {
   // return  product.price > 500
   if(product.price > 500){
       return true
   }
   else{
       return false

   }
     
})
console.log(filteredProducts);
console.log(products);

console.log('-- -- -- -- -- -Join method- -- -- -- -- --');
const myArr =[100 ,200,300,400,500]
const str =myArr.join('-')
console.log('str',str);


const fruits = ['Apple','PineApple','CustardApple','GreenApple'] //Apple,PineApple,CustarApple
const fruitStr =fruits.join(',')
console.log('fruitStr',fruitStr);
