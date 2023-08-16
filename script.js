const form = document.getElementById("form-user-add")
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
const biographie = document.getElementById("biographie")
const sex = document.getElementById("sex")
const birthday = document.getElementById("birthday")

form.addEventListener('submit',(e) =>{
    e.preventDefault()

    if(firstname.value === "") {
        alert("le champ est vide");
        return;
    }
    
    if(lastname.value ==="") {
        alert("Le champ prénom est obligatoir")
        return;
    }
    if(email.value ==="") {
        alert("L'email est obligatoir")
        return;
    }
    if(biographie.value ==="") {
        alert("On a besoin de votre biographie")
        return;
    }
    if(birthday.value ==="") {
        alert("Veuillez entré votre date naissance")
        return;
    }
    if(sex.value ==="none") {
        alert("Veuillez entré votre date naissance")
        return;
    }
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

