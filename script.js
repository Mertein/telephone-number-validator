const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const form = document.querySelector("form");
const result = document.getElementById("results-div")

const submit = (e) => {
  e.preventDefault();
 const value = input.value;
  if(!value){
    alert("Please provide a phone number");
    return;
  } 

  if(phoneRegex.test(value)) {
    formatedResult(true, value);
  } else {
    formatedResult(false, value);

  }
}

const formatedResult = (success, value) => {
  clearForm();
  if(success) {
    result.textContent = `Valid US number: ${value}`;
    result.classList.add('valid');
  } else {
    result.innerText = `Invalid US number: ${value}`
    result.classList.add('invalid');
  }
}


const clearForm = () => {
  input.value = '';
  result.innerText = '';
  result.classList.remove("invalid");
  result.classList.remove("valid");
}

form.addEventListener("submit",(e) =>  submit(e));


clear.addEventListener("click",clearForm);

const phoneRegex = /^1?[- ]*(\d{3}|\(\d{3}\))[- ]*(\d{3})[- ]*(\d{4})$/;