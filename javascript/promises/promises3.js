console.log('program started');
let age = 0;
function agePromise(){
    return new Promise((resolve ,reject) =>{
        console.log(age);
        if( age >= 18){
            resolve('Eligible for voting')
        }else {
            reject('Not eligible for Voting')
        }
    })
}
agePromise().then ((sucess) => {
    console.log(sucess);

}).catch(err => {
    console.log(err);
});

function validateAge(){
  
    age = document.getElementById('age').value  
    agePromise().then((sucess) => {
        console.log(sucess);
    })
}
console.log('program ended');

