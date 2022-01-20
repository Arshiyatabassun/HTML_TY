//Named Function
function  isPrime(num){
    for(var i=2 ; i < num ;i++){
        if(num % i === 0){
            return `${num} is not prime number`;
        }
        return `${num} is prime number`
    }
}
console.log(isPrime(17));
console.log('---------------------------------------------');

//Anonymous function

var isPrimeNum =function (num){
        for(var i=2 ; i < num ;i++){
            if(num % i === 0){
                return `${num} is not prime number`;
            }
            return `${num} is prime number`
        }
    
};
console.log(isPrimeNum(12));
console.log('--------------------------------');

//Arrow Function

var isPrimeNum =(num) => {
    for(var i=2 ; i < num ;i++){
        if(num % i === 0){
            return `${num} is not prime number`;
        }
        return `${num} is prime number`
    }

};
console.log(isPrimeNum(12));
console.log('--------------------------------');
// Self invoked Function
console.log(
    (function (num){
        for(var i=2 ; i < num ;i++){
            if(num % i === 0){
                return `${num} is not prime number`;
            }
            return `${num} is prime number`;
        }

    })(12)
);
