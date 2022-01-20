//global level this is equal to window object
console.log(this);// this it is equal to window object
console.log(this===window);
console.log('-----------------------');
//this is a keyword which is always points to the current object
//all the functions belongs to window object if it doenot belongs to anyother object

const person ={
    firstrName:'Arshi',
    lastName :'Tabassum',
    getFullName:function(){
        //this is person object
        console.log('this inside getFullName -',this);
        return this.firstrName +' '+this.lastName;

    }

}
person.getFullName()

function greet(){
    //this is equal to window object
    //all the global properties and functions
    //belongs to window object
    //(greet will be invokes using window reference)

    console.log('this inside greet -',this);
    console.log('greet func');

}
window.greet();
greet();
console.log('-------------------------------------');

const myObj ={
    getData :function(){
        function test(){
            //this is equal to window object
            //becaouse test is not invoked by 
            //any object refernce
            console.log('this inside test func',this);
            console.log('test func');
        }
        test()
        return 100
    }
}
myObj.getData()


console.log('----------------------------------');

// to overcome the above problem

//it refers to parent execution context
const myObj1 = {
    firstName:'Aalim',
    lastName:'Mohammed',
    getResult : () =>{
        // this inside getResult -window
        //refer to its parent context
        console.log('getResult',this);
    },
    getName :function(){
        const test = () => {
            //Arrow function will not have its own
            //this,this will refer to its parent
            //execution context

            console.log('this onside test',this);
            console.log('test func');

        }
        test()
        return `${this.firstName} ${this.lastName}`
    }
}

myObj1.getName();
myObj1.getResult()
console.log('-------------------------------');


/*
1.this in global -window
2.this in named function which is declared in global level -window
3.this in named function which is invoked using object refernce -current object
4.this in arrow function which is invoked using object refernce -parent context object
5.An named function  declared inside a function which is invoked using objecrt reference -window object
6.An Arrow function declared inside a function which is invoked using objectrefernce -parent context object
*/