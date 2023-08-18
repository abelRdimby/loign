const dataBaseLink = ("http://localhost:3000/users");

fetch(dataBaseLink)
    .then((dataResponse) => dataResponse.json())
    .then (data => {
        data.forEach(function (element, index, array){
            const usersId = data[index].id; 
            
            document.getElementById('tableBody').innerHTML += `
                <tr>
                        <th style="text-align: left"><p>${data[index].lastname}</p></th>
                        <th style="text-align: left"><p>${data[index].firstname}</p></th>
                        <th style="text-align: left"><p>${data[index].email}</p></th>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" onclick="editUser(${usersId})" data-id="${usersId}" class="btnUserEdit icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                            <path d="M16 5l3 3"></path>
                        </svg>
                    </div>
                </tr>
            ` 
        });    
    }) 
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function editUser(usersId) {
    fetch(`http://localhost:3000/users/${usersId}`)
    .then((dataResponse) => dataResponse.json())
    .then (data => {
        console.log(data)        
    }) 
    .catch(error => {
        console.error('Error fetching data:', error);
    }); 
}

const form = document.getElementById("form-user-add")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const biographie = document.getElementById("biographie")
const sex = document.getElementById("sex")
const birthday = document.getElementById("birthday")

function notValidAnim(className , inputId ,message) {
    let Inputparent = document.getElementsByClassName(className)[0]
    Inputparent.classList.toggle('animation')
       
    var input = document.getElementsByName(inputId)[0]
    input.setAttribute('placeholder', message)
    input.style.border = "var(--color-red) 1px solid"
    input.classList.add('invalid-input')
    Inputparent.style.transition="0.9s all"
    setTimeout(() => {
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
        inputSelect.style.border = "var(--color-red) 1px solid"
        notValidAnim("sexWraper","sex")
        return;
    }

// POST METHOD
    const postLink = ("http://localhost:3000/users")
    fetch(postLink, {
        method: 'POST',
        body: JSON.stringify({
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            biographie: biographie.value,
            sex: sex.value,
            birthday: birthday.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

});
