// var date = new Date('sept 12 2021');
// var formatteddate = date.toLocaleDateString('en-us',
// {
//     weekday:'short',
//     month:'short',
//     day:'numeric', //date
//     year:'numeric'
// }
// )
// console.log(formatteddate);

let arr1 =[10,20,30,40,50,2,4];
const newarr = arr1.map((value) =>{
    return value+10;
})
console.log(newarr);
console.log(arr1);

let arr2 =[10,56,34,25,76];
const newarr1 =arr2.filter((value) =>{
    if(value > 10){
        return value;
    }

})
console.log(newarr1);

let arr3 =[100,200,300,400,500];
const newarr3 = arr3.join('-')
console.log(newarr3);

let arr4 =[1,2,3,4,5]
const reducer =(previousvalue,currentvalue) =>
    previousvalue+currentvalue;
    console.log(arr4.reduce(reducer,3)
   
    );


