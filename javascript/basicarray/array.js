//Array

var names = ['Puneeth', 'Darshan', 'Sudeep', 'Ajit', 'Hritik']
console.log(names);
console.log(names.length);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

console.log("---------------------------------------------------");

for (var i = 0; i < 5; i++) {
    console.log('Hello');
}

console.log('----------------------------------------')

for (var i = 0; i < names.length; i++) {
    debugger
    console.log(names[i]);
}



var myArray = ['Ajay', 34, true, undefined, null, { color: 'black' }, ['black', 'blue', 'red']];

console.log(myArray[2]);//true
console.log(myArray[4]);//null
console.log(typeof (myArray[3]));//undefined

console.log(myArray.length)//7
console.log(myArray[5].length);

console.log(myArray[5].color)
console.log(myArray[5]['color'])

console.log(myArray[5]['co lor'])
console.log(myArray[6].length);
console.log(myArray[6][0])
console.log(myArray[6][2 - 1])
console.log('-- -- -- --- -- -- -- -- --- -- -- -- -- --')
debugger

var books = [
    {
        author: 'chetan Bhatgath',
        title: 'Two States',
        price: 80,
        noOfPages: 265,
        pubhlisher: 'ab'
    },
    {
        author: 'chetan Bhatgath',
        title: 'Two States',
        price: 180,
        noOfPages: 290,
        pubhlisher: 'bc'
    },
    {
        author: 'PoornaChandra',
        title: 'Two States',
        price: 240,
        noOfPages: 300,
        pubhlisher: 'cd'
    }

]
//console.log(books[0]);
//console.log(books[1]);
// console.log(books[2]);

for (var i = 0; i < books.length; i++) {
    console.log(books[i]);
}
//
var arr = new Array(10)
console.log(arr.length)
console.log(arr[0]);
console.log('-----------------------------')

var numbers = new Array(20, 30)
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[1]);

numbers[2] = 67
console.log(numbers[2]);

var colors = new Array('blue');
console.log(colors.length);//1
console.log(colors[0]);//blue


                //formatting or aligning the code
                //Alt+Shift+F






