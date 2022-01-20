var fruits ={
    fname:'Apple',
    fcolor:'red',
    fsize:'Big',
}
for(var value in fruits){
console.log(fruits[value]);
}
let fruits1 =new Array('Apple','red',{fsize :'Big'})
for(let key in fruits1){
    console.log(` keys are :${key} `);
}
for(let index in fruits){
    console.log(`index value is :${fruits[index]}` );
}