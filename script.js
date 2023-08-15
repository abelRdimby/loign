const form = document.getElementById("form-user-add")
const firstname = document.getElementById("firstname").value
const lastname = document.getElementById("lastname").value
const email = document.getElementById("email").value
const biographie = document.getElementById("biographie").value
const sex = document.getElementById("sex").value
const birthday = document.getElementById("birthday").value

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    console.log("alatsao")
});
