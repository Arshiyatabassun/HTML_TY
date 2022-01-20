


//5 objects without using NewKeyword with one function
var Mobile ={
    name :'POCO X2',
    color:'blue',
    RAM :'256 GB',
    model:'MI',
};

console.log('Mobile',Mobile);
console.log(typeof(Mobile));

var Laptop ={
    name:'Lenovo',
    color:'grey',
    processor:'i5',
    memory:'8gb',
    getName:function()
    {
        return this.name+''+this.color ;
    }
};
console.log('Laptop',Laptop);


var Book={
    bname:'Java',
    noOfpages:250,
    author:function(){
        console.log('James Gosling');
    },
    
};
console.log(Book)
Book.author();
Book['author']();

var Student ={
    sname:'arshi',
    sage:26,
    sgender:'female',
    sdob:1995,
    reading :function()
    {
        console.log('reading');
    },
    writting :function(){
        console.log('writting');
    }

};

console.log(Student);
Student.reading();
Student['reading']();
Student['writting']();
Student.writting();


var Person ={
    firstName:'Mohammed',
    lastName:'Aalim',
    age:2,
    gender:'Male',
    dob:2020,
    eating:function(){
        console.log("Aalim is eating");
    },
    // sleeping:function(){
    //     console.log('Aalim is sleeping');
    // },

};
console.log(Person);
Person.eating();
Person.sleeping();


