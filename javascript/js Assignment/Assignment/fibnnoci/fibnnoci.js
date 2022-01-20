//Named function
function fibonacci(num){
    let num1 =0;
    let num2 = 1;
    let sum =0;
    console.log(num1);
    console.log(num2);

while(sum < num)
{
    sum =num1 +num2;
    if(sum <= num){
        console.log(sum);
    }
    num1 =num2;
    num2 =sum;
}
}
fibonacci(10)

console.log('--------------------------');
//Annonymous function

let fibonacci1 = function (num){

    let num1 =0;
    let num2 = 1;
    let sum =0;
    console.log(num1);
    console.log(num2);

while(sum < num)
{
    sum =num1 +num2;
    if(sum <= num){
        console.log(sum);
    }
    num1 =num2;
    num2 =sum;
}
};
fibonacci1(10)
console.log('--------------------');

//Arrow function
let fibonacci2 = (num)=>{
    let num1 =0;
    let num2 = 1;
    let sum =0;
    console.log(num1);
    console.log(num2);

while(sum < num)
{
    sum =num1 +num2;
    if(sum <= num){
        console.log(sum);
    }
    num1 =num2;
    num2 =sum;
}

};
fibonacci2(10)
console.log('--------------------');

