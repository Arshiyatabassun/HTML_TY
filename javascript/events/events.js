function testClick(){
    console.log('testClick executed');
}

function changeName(username){
    const element = document.getElementById('username')
    element.innerText =username
}

// function applyBGColor(){
//     const element = document.getElementById('change color')

// element.style.background ="red"
// }


// function removeBGColor(){
//     const element = document.getElementById('changeColor')

// element.style.background ="white"

// function removeApplyBGColor(color){
//     const element = document.getElementById('change color')
//     element.style.backgroundColor =color
// }
// function getData(){
//     console.log('onkeyup');

//     function showData () {
//         console.log('keydown');
//     }

    function getData(){
        const element = document.getElementById('randomData')
        console.log('onkeyup',element.value);
        document.getElementById('show').innerText = element.value.toUpperCase()
    }
}
function showData(){
    console.log('onkeydown');
}
