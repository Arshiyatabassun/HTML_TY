///closures
function outer(){
    let count = 0;
    function inner (){
        console.log('inner function');
        count  =count + 1
        console.log('count',count);

    }
    return inner
}
const innerFunc =outer()
innerFunc()

//what is the use ?why we use?
//1.To preserve the value/
//2.fo data privacy/

function increaseCounter(){
    let counter = 0;
    function counterUpdate(){
        counter = counter+1;
        console.log(counter);
      
        return counter;
    }
    return counterUpdate;
}
//there is a possibility counter will be 0 if increased 
const  c = increaseCounter()
 c()
const counterIncrease = increaseCounter()
    counterIncrease()
    counterIncrease()
    counterIncrease()
    counterIncrease()
//self invoked function will be executed only once
//hence counter cannot be reinitialised to 0 again
//only counteruodated function will be able to change the 
//counter variable value
    const counterInc = (function() {
      let counter = 0 
        function counterUpdate (){
            counter =counter+1;
            console.log(counter);
            return counter;
        }
        return counterUpdate
    })()



