//Objects using new Keyword with one function
var Chair = new Object();
Chair.price=500.0;
Chair.color ='black';
Chair.height = 15;
Chair.hasLegs= function(){
    console.log('chair has 4 legs');
};
    console.log(Chair);
    Chair.hasLegs();



var Bike =new Object();
Bike.name='KTM'
Bike.speed = '200km'
Bike.color ='orange'
Bike.myFavourite=function(){
    return this.name+''+this.color;
}
console.log(Bike);
console.log(Bike.myFavourite());


var Car = new Object();
Car.name='Range Rover'
Car.color ='Black'
Car.speed ='120km'
Car.maxSpeed =function(){
    return this.speed;
}
console.log(Car);
console.log(Car.maxSpeed());

var Laptop =new Object();
Laptop.name='Lenovo'
Laptop.processor ='i5'
Laptop.memory='256gb'
Laptop.Genration =function(){
    console.log("Latested Generation 11th");
}
console.log(Laptop);
Laptop.Genration();

var Student =new Object()
Student.name='Arshi'
Student.Id=123
Student.marks=456
Student.write=function(){
    return this.name+''+this.marks
}
console.log(Student);
console.log(Student.write());






