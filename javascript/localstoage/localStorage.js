const studentData=[]

const loginElement= document.getElementById('login')
loginElement.addEventListener('click',function(){
        // employee object to add the input fields value
        const student={
            userName:'',
            password:'',
            age:'',
            state:'',
            email:''
        }
    const nameVal=document.getElementById('username').value
    const passVal=document.getElementById('password').value
    const ageVal=document.getElementById('age').value
    const emailVal=document.getElementById('email').value
    const stateVal=document.getElementById('select').value

    // now validate the values
    const isUsernameValid = validateUsername(nameVal)
    const isPasswordValid = validatePassword(passVal)
    const isAgeValid=validateAge(ageVal)
    const isEmailValid=validateEmail(emailVal)
    const isStateValid=validateState(stateVal)
    if (isUsernameValid && isPasswordValid&&isAgeValid&&isStateValid&&isEmailValid){
        // assing the data to student

        student.userName=nameVal
        student.password=passVal;
        student.age=ageVal;
        student.email=emailVal; 
        student.state=stateVal ;      
        // push the object to employeeData
        studentData.push(student)
        // display employee data using below function
        // displayStudentData(studentData)
        addData()
    }
    console.log(student);
    
    
})
getData()

    


//display data in table formt function

// function displayStudentData(stdData){
//     const tableDiv = document.getElementById('tableData')
   
//     let studentTable = `<table border="1">
    
//     <thead>
//         <tr>
//             <th>UserName</th>
//             <th>Password</th>
//             <th>Age</th>
//             <th>State</th>
//             <th>Email</th>
//         </tr>
        
//     </thead>`
//     stdData.forEach(id => {
        
//         studentTable += `<tr><td>${id.userName}</td>
//             <td>${id.password}</td><td>${id.age}</td>
//             <td>${id.state}</td>
//             <td>${id.email}</td></tr>`
//     })
//     studentTable+=`</table>`
//     // display data in table
//     tableDiv.innerHTML = studentTable
// }

function validateUsername(userName) {
    if (userName) {
        if (/^[a-zA-Z]*$/.test(userName)) {
            console.log(userName);
            showError(false,'','usernameError')
            return true
        } else {
            showError(true, 'Only characters are allowed','usernameError')
            return false
        }
    } else {
        // console.log('user name is empty');
        showError(true, 'Username cannot be empty','usernameError')
        return false
    }

}
/* Age Validation */
function validateAge(age){
    if(age==""||age<=21||age>=50){
        
        showError(true, 'Age Contains between 21-50 ','ageError')
        return false
    }else{
        console.log(age);
        showError(false,'','ageError')
        return true
    }
}


/* password validation*/

function validatePassword(password){
 const minNumberofChars = 8;
const maxNumberofChars = 12;
const regularExpression  =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/
    if (password==""||password.length < minNumberofChars || password.length > maxNumberofChars||!password.match(regularExpression)){
        console.log(password);
        showError(true, 'Password cannot be empty','passwordError')
        return false
        
    } else {
        // console.log('password is empty');
        showError(false,'','passwordError')
        return true
    }
}
/*state Validation */
function validateState(select){
    if(select=='')
    {
        showError(true, 'Please select atleast one','stateError')
        return false

    }else{
        showError(false,'','stateError')
        return true
    }

}
/*Email Validation */
function validateEmail(email){
    if(email===''||email.indexOf('@')<1||email.indexOf('.')<-1){
        showError(true, 'Please Enter Valid Email Adress','ErrorEmail')
        return false
        
    }else{
        showError(false,'','ErrorEmail')
        return true
        
    }

}

/* error messages */
// function displayError()
// function showError(isShowError, errMsg,id) {
//     const ele = document.getElementById('usernameError')
//     if (isShowError) {
//         ele.innerText = errMsg
//         ele.style.display = 'block'
//     } else {
//         ele.innerText = ''
//         ele.style.display = 'none'
//     }
// }
function showError(isError, errMsg,spanId) {
    const ele = document.getElementById(spanId)
    if (isError) {
        ele.innerText = errMsg
        ele.style.display = 'block'
        ele.style.color = 'red'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}

// locl storage to js

function addData(){
    let studentList=new Array()
    studentList.push({
        studentData
    })
    localStorage.setItem('formData',JSON.stringify(studentList))
    getData()
}
function getData(){
    let showData=localStorage.getItem('formData')
    let data=JSON.parse(showData)
    let arr=data[0].studentData
    let arrLength=(arr).length;
    
    const tableDiv = document.getElementById('getTableData')
   
    let studentTable = `<table border="1">
    
    <thead>
        <tr>
            <th>UserName</th>
            <th>Password</th>
            <th>Age</th>
            <th>State</th>
            <th>Email</th>
        </tr>
        
    </thead>`
        for(let i=0;i<arrLength;i++){
        
        studentTable += `<tr><td>${arr[i].userName}</td>
            <td>${arr[i].password}</td><td>${arr[i].age}</td>
            <td>${arr[i].state}</td>
            <td>${arr[i].email}</td></tr>`
        }
    studentTable+=`</table>`
    // display data in table
    tableDiv.innerHTML = studentTable


}


// delete Data

function deleteData(){
    localStorage.clear('formData')
}