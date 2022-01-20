console.log('started');
const mypromise1 =new Promise((resolve ,reject) => {
    setTimeout(() => {
        resolve([100,200,300,400])
    },3000)
})
const mypromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve([900,1000,1200])
    },5000)
})
// if all promises are resolved then function will be executed and 
// it will combine the resolved data into Array
// if any one promise is rejected also catch functio n will be executed
Promise.all([ mypromise1, mypromise2]).then((data) => {
    console.log('Data',data);
}).catch(err => {
    console.log('err',err);
})


//whichever promise first resolved only that promise data will be recived
Promise.race([ mypromise1, mypromise2]).then((data) => {
    console.log('Data',data);
}).catch(err => {
    console.log('err',err);
})
console.log('ended');