const person ={
    firstName:'Ajit',
    lastName:'K',
    age:12,
    hobbies:['crciket','singing'],
    address:{
        state:'Karnataka',
        pincode:560068,
        city:'Banglore'

    }
}


//const firstName =person.firstName;
//const lastName =person.lastName;
//const age =person.age;

//object Destructure(ES6 feature)
const{firstName,lastName} =person;
console.log('FirstName',firstName);
console.log('LastName',lastName);


//multi level destructure
const {hobbies ,address :{state ,city}} =person
console.log('hobbies',hobbies);
console.log('state',state);
console.log('city',city);

//alias names
const {firstName :fname ,lastName :lname} =person
console.log(fname);
console.log(lname);
function calculateTotalPrice({gst,price}) {
    console.log('gst',gst);
    console.log('price',price);
    return price + (price *(gst /100))
}

const product ={
    price :100,
    gst:3,
    productName :'Bag',
    mfgyear :2021,
    moreDetails: {
        brand:'WildCraft',
        color:'blue'
    }
}
calculateTotalPrice(product)

const fruits =['Apple','PineApple','Orange','Banana']
//const fruit1 =fruits[0];
//const fruit2 = fruits[1];

//Arraybdestructuring

const [fruit1,fruit2]=fruits
console.log(fruit1);
console.log(fruit2);

//we can skip if we dont want by giving space
const [fruit11, ,fruit21]=fruits
console.log(fruit11);
console.log(fruit21);


const names=['bob','fred','benedict'];
const [cat,dog,alligator]=names;
console.log(cat);
console.log(dog);
console.log(alligator);
const names1 =['bob','fred','benedict'];
const [cat1 ,...rest] =names1;
console.log(cat1);
console.log(rest);

const name2 ={cat :'bob',dog:'fred',alligator:'benedrict'};
const{cat:newCat,dog:newDog ,
alligator :newAlligator} =name2;
console.log(newCat);
console.log(newDog);
console.log(newAlligator);


const url ="https://jsonplaceholder.tyicode.com/posts";
async function fetchPost(){
    try{
        const response =await fetch(url);
        const data =await response.json;
        console.log(data);

    }catch(err){

        console.log(err);
    }finally{
        console.log('hello');
        console.log('bye');
    }

    
}
console.log(fetchPost());