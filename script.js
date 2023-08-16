// window.location.reload()
const form = document.getElementById("form-user-add")
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
const biographie = document.getElementById("biographie")
const sex = document.getElementById("sex")
const birthday = document.getElementById("birthday")

// function removeClass() {
//     let champ = document.getElementsByClassName("champ")[0]
//     champ.removeClass('animation')
// }



function notValidAnim(e , alika) {
    let champ = document.getElementsByClassName(e)[0]
    champ.classList.toggle('animation')
    var input = document.getElementsByName(alika)[0]
    input.classList.add('invalid-input')
    setTimeout(() =>{
        champ.classList.remove('animation')
        input.classList.remove('invalid-input')
    }, "2000")
}
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    if(firstname.value === "") {
        // alert('Le champ prénom est obligatoir?')
        notValidAnim('firstnameWraper', "firstname")
        return;
    }
    
    if(lastname.value ==="") {
        // alert("Le champ nom est obligatoir")
        notValidAnim('lastnameWraper',"lastname")
        return;
    }
    if(email.value ==="") {
        // alert("L'email est obligatoir")
        notValidAnim("emailWraper","email")
        return;
    }
    if(biographie.value ==="") {
        // alert("On a besoin de votre biographie")
        notValidAnim("bioWraper","biographie")
        return;
    }
    if(birthday.value ==="") {
        // alert("Veuillez entré votre date naissance")
        notValidAnim("birthWraper","biographie")
        return;
    }
    if(sex.value ==="none") {
        // alert("Veuillez entré votre date naissance")
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


