console.log('program started');
let age = 10;
const validAgePromise = new Promise((resolve ,reject) =>{
    console.log(age);
    if(age >= 18)
    {
        resolve('Eligible for Voting')
    }else {
        reject('Not eligible for Voting')
    }
})
validAgePromise.then((sucess) => {
    console.log(sucess);
}).catch(err => {
    console.log(err);
});
console.log('program ended');