const form = document.getElementById("form-user-add")
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
const biographie = document.getElementById("biographie")
const sex = document.getElementById("sex")
const birthday = document.getElementById("birthday")

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    let dataUser = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        biographie: biographie.value,
        sex: sex.value,
        birthday: birthday.value
    }
    console.log(dataUser)
});
