//document .write('Welcome to DOM session')
//if id is present it returns element else null
const element = document.getElementById('demo')
console.log(element);
element.innerText ='DOM'
element.style.backgroundColor ='blue'


//it returns single element
const pElement =document.getElementById('.test')
console.log(pElement);
const tagElement =document.querySelector('hi')
console.log(tagElement);

const idElement = document.querySelector('#demo')
console.log(idElement);

//it returns array of the elementif the classname is present
const personElements = document.getElementsByClassName('person')
console.log(personElements);
personElements[2].innerText = 'Mumbai'

for(let i =0 ;i <personElements.length ;i++)
{
    if( i=== 0){
        personElements[i].innerText ='Vijay'
    }else if (i === 1){
        personElements[i].innerText ='S'
    }else{
        personElements[i].innerText = 'chennai'
    }

}

console.log('------------------------------------------');


// it returns array of elements
//getElementsByTagName
const pElements =document.getElementsByTagName('p')
console.log(pElements);
for(let i =0 ; i<pElements.length ; i++)
{
    console.log(pElements[i]);
    pElements[i].style.color = 'blue'
}
console.log('-------------------------------------------');

//it returns the array of elements
const personElementsAll =document.querySelectorAll('.person')
console.log(personElementsAll);
for(let i = 0; i <personElementsAll.length ;i++){
    personElementsAll[i].style.backgroundColor ='yellow'
    personElementsAll[i].style.border ='1px solid black'
    personElementsAll[i].style.fontSize ='20px'
   // personElementsAll.style.fontFamily =
}




const pTags =document.querySelectorAll('p')
console.log(pTags);
for(let  i= 0 ; i <pTags.length ;i++)
{
    console.log(pTags[i]);
    pTags[i].style.textDecoration = 'underline'
}
console.log('-------------------------------------');

//creat Element
const h2Element = document.createElement('h2')
h2Element.innerText = 'This is h2 element'
console.log(h2Element);
h2Element.style.color ='green'
document.body.appendChild(h2Element)
console.log('---------------------------------');

const labelElements =document.getElementsByTagName('label')
console.log(labelElements);
//adding style based on css file classess
//adding single class
labelElements[0].className ='labelTag'

//adding multiple classess
labelElements[1].classList ='labelBg'

console.log('--------------------------------------------------');
const userElement = document.getElementById('user')
//innerHTML will parse the string as HTML code
userElement.innerHTML = '<h1>My name is Arshiya </h1>'

const user1Element =document.getElementById('user1')
//innerText will parse the string as plain text or string itself
user1Element.innerText ='<h1>My name is Arshiya </h1>'

 //to hide the element
 const hobbiesListElement = document.getElementById('hobbieslist')
 hobbiesListElement.style.display = 'none'


// //to show the element
// const hobbiesListElement = document.getElementById('hobbieslist')
// hobbiesListElement.style.display = 'block'
