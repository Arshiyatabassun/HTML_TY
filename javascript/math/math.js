console.log('Math object');

//to find minimum

var minVal = Math.min(12,34,56,78,9)
console.log('Min value -',minVal);

// to find maximum

var maxVal = Math.max(78,90,780,1000,67678)
console.log('Max Value-',maxVal);

//to find power
var powerVal = Math.pow(2,3)
console.log('Power of 2,3',powerVal);

var powerVal1 =Math.pow(3,9)
console.log('power of 34,56',powerVal1);

var randomVal = Math.random()
console.log('randomVal',randomVal);

var randomVal1 = Math.ceil(Math.random()*100);//number from zero to 100
console.log(randomVal1);

var names = ['Harsith' ,'Vijay','Ajay','Guru']
var randomIndex =Math.floor(Math.random( )*names.length)
console.log(names[randomIndex]);