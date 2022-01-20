function factorial2(num){
    let fact =1;
    for(let i = 1;i <=num; i++){
        fact =fact *i;
    }
    console.log(fact);

}
factorial2(5)
console.log('-------------------');





//Annonymous function

let factorial = function(num) {

    let fact =1;
    for(let i = 1;i <=num; i++){
        fact =fact *i;
    }
    console.log(fact);
};
factorial(4)
console.log('-------------------');

//ARROW FUNCTION
let factorial1 = (num) => {
    let fact =1;
    for(let i = 1;i <=num; i++){
        fact =fact *i;
    }
    console.log(fact);

};
factorial1(4)
console.log('-------------------');

console.log(
    (function (num){
        let fact =1;
        for(let i = 1;i <=num; i++){
            fact =fact *i;
        }
        console.log(fact);
    })(4)
    
);
// factorial(4)
//     console.log('-------------------');
    


