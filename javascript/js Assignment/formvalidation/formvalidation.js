const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");
// const genderM = document.getElementById("radio1");
// console.log(genderM);
// console.log(genderM.checked);
// const genderF = document.getElementById("radio2");

console.log(age);
// const radioButton = document.getElementsByName('radioOptions')

///adding events
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  submitRadioButton();
  checkboxvalidate();
  selectState();
  agree()
});

//It receives two parameters: element, and message. The element will be the input element that is
// in the specific input-control. So first we have to get the input control
//parent div. We'll save it into the inputControl variable, and get the input
//control div by using the parent property of the input element. Next we have
// to gather the error div, and save it into a variable. We can do that by querying
// the input control with the error class.
// Now we have to set the error div's innerText to be the message that we got in
//parameters, and remove the success class from the input control (if it exists) and add the error class.

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

//validating the email
const isValidEmail = (email) => {
  const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(String(email).toLowerCase());
};

//validating the username------------------------------------------------

const isValiedName = (username) => {
  const re1 = /^[a-zA-Z]+$/;
  return re1.test(String(username));
};

//validating the password---------------------------------------------------

const isValidPassword = (password) => {
  const regp = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return regp.test(password);
};

const isValidAge = (age) => {
  // const rega = /^(00[1-9])|(0[1-9]\d)|(1[0-4]\d)|(150)$/;
  return rega.test(age);
  // console.log(isValidAge);
};

/////////////////////////////////////////////////////////////////////////////////////////////

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const ageValue = age.value.trim();
  //---------------------------------------------------------
  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (!isValiedName(usernameValue)) {
    setError(username, "username must contain a-z or A-Z");
  } else {
    setSuccess(username);
  }
  //------------------

  // -----------------------------------
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
  //------------------------------------------------------------
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (!isValidPassword(passwordValue)) {
    setError(
      password,
      "Password must be at least 8 character & must include one  Uppercase one lowercase and one special character."
    );
  } else {
    setSuccess(password);
  }

  // ----------------------------------------------------------
  if (ageValue === "") {
    setError(age, "age is required");
  } else if (ageValue > 0 && ageValue < 150) {
    setSuccess(age);
  } else {
    setError(age, "enter valied age");
  }
};

//  let gen = document.forms['Myform']['radioOptions'];
//  if(gen[0].checked == false && gen[1].checked==false){
//    setError(gen,'Please selece one option')
//  }else{
//    setSuccess(gen);
//  }

//////////////////////////////////////////////////////////////////////////////

function submitRadioButton() {
  var genderM = document.getElementById("radio1");
  var genderF = document.getElementById("radio2");

  if (genderM.checked || genderF.checked) {
    // return true;
    setSuccess(genderM);
  } else {
    setError(genderM, "You must select male or female");
  }
}

function checkboxvalidate() {
  var c0 = document.getElementById("check0");
  var c1 = document.getElementById("check1");
  var c2 = document.getElementById("check2");
  var c3 = document.getElementById("check3");
  var c4 = document.getElementById("check4");

  if (c0.checked || c1.checked || c2.checked || c3.checked || c4.checked) {
    // return true;
    setSuccess(c0);
  } else {
    setError(c0, "You must select atleast one option");
  }
}

function selectState() {
  let select = document.getElementById("selectStates"); // or in jQuery use: select = this;
  if (select.value) {
    // value is set to a valid option, so submit form
    // return true;

    setSuccess(select);
  } else {
    setError(select, "please select one option");
  }
 
}

function agree(){
  let agreeTerms = document.getElementById('checkag');
  if(agreeTerms.checked){
    setSuccess(agreeTerms);
  }else {
    setError(agreeTerms,"please agree terms and conditions");
  }

}
