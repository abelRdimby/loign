// window.location.reload()
const form = document.getElementById("form-user-add")
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
const biographie = document.getElementById("biographie")
const sex = document.getElementById("sex")
const birthday = document.getElementById("birthday")


function notValidAnim(className , inputId ,message) {
    let Inputparent = document.getElementsByClassName(className)[0]
    Inputparent.classList.toggle('animation')
       
    var input = document.getElementsByName(inputId)[0]
    input.setAttribute('placeholder', message)
    input.style.border = "red 1px solid"
    input.classList.add('invalid-input')
    Inputparent.style.transition="0.9s all"
    setTimeout(() =>{
        Inputparent.classList.remove('animation');
        input.classList.remove('invalid-input')
        input.style.border = "rgb(211, 211, 211) 1px solid"
        var inputSelect = document.getElementById("sex")
        inputSelect.style.border = "rgb(211, 211, 211) 1px solid"
    }, "1500")
}

form.addEventListener('submit',(e) =>{
    e.preventDefault()

    if(firstname.value === "") {
        // alert('Le champ prénom est obligatoir?')
        notValidAnim('firstnameWraper', "firstname", "Le prénom est obligatoir")
        return;
    }
    
    if(lastname.value ==="") {
        // alert("Le champ nom est obligatoir")
        notValidAnim('lastnameWraper',"lastname","Le nom est obligatoir")
        return;
    }

    if(email.value ==="") {
        // alert("L'email est obligatoir")
        notValidAnim("emailWraper","email","Votre addresse email est très important")
        return;
    }

    if(biographie.value ==="") {
        // alert("On a besoin de votre biographie")
        notValidAnim("bioWraper","biographie", "Le biographie est aussi obligatoir")
        return;
    }

    if(birthday.value ==="") {
        // alert("Veuillez entré votre date naissance")
        notValidAnim("birthWraper","birthday")
        return;
    }

    if(sex.value ==="none") {
        // alert("Veuillez entré votre date naissance")
        var inputSelect = document.getElementById("sex")
        inputSelect.style.border = "red 1px solid"
        notValidAnim("sexWraper","sex")
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


