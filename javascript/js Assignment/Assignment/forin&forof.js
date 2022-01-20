 var numbers=[10,20,30,40,50,60]

 for(var number of numbers){
     console.log(number);

 }
 console.log('-- -- -- -- -- -- -- -- -- --');

 var biscuits =['parleG','sunfeast','oreo','treat','bournbun']
 for(var biscuit of biscuits)
 {
     console.log(biscuit);
 }
 console.log("-- --- -- -- -- -- --- -- -- -- -- -- --");

 var arr1 = [10,10.25,'Technoelvate','hello',54,1]
 for(var arr of arr1)
 {
     console.log(arr);
 }

 var car1={
     name:'range rover',
     color:'blue',
     yom:2020
 }
 for(var car in car1){
     console.log(`${car} - ${car1[car]}`);
 }

 for(var index in biscuits){
     console.log(`value at index ${index} -${biscuits[index]}`);
 }
 console.log('-- --- -- -- -- -- -- -- -- -- -- -- --');
 var Mobile ={
     name:'POCO X2',
     color:'blue',
     RAM:'256gb',
     processor:'i5'
 }
 for(var mobile in Mobile)
 {
     console.log(`${mobile} - ${Mobile[mobile]}`);
 }
 for(var i in Mobile)
 {
     console.log(Mobile[i]);
 }

 var arr2 =[10,55.65,'Hi',{color:'blue'}]
for(var i in arr2){
    console.log(arr2);
}
 
console.log('-- -- -- -- -- -- -- -- -- -- --');
 var Bus={
     name:'BMTC',
     color:'white',
     noOfseats: 35,
     speed:'45km'
 }

 for(var bus in Bus)
 {
     console.log(`${bus} - ${Bus[bus]}`)
 }
 for(var index in Bus)
 {
     console.log(`value at index ${index} - ${Bus[index]}`);
 }
