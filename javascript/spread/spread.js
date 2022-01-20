const person ={
    firstName:'arshi',
    lastName:'taba'
}


//copy the properties of one object /array two another object
//combine/merge two or more objects or two or more arrays
//add new properties and take the copy
//change any property and take the copy
const address = {
    pincode :560068,
    state:'Karnataka',
    city:'banglore'

}
const personDetails = {...person,...address}
console.log(personDetails);
const personC = {...person ,age :14}
console.log(personC);
const personD = {...person ,lastName:'I'}
console.log(personD);