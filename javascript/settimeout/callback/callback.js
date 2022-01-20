function first(callback) {// variable name is anythng here is call back
   // console.log(callback);
    setTimeout(() => {
        console.log('first executed');
        callback()
    } , 0)
}

function second(){
    console.log('second executed');
}

first(second);
