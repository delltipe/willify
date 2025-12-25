document.getElementById('signup-form').addEventListener('submit', function (event){
    event.preventDefault();
    console.log("submit status");

    let valid = true;

    // username validation
    let username = document.getElementById('username').value;
    if(username.length <= 8){
        valid = false;
        document.getElementById('username-error').innerText = "*username must be more than 8 characters!"
    }
    else{
        document.getElementById('username-error').innerText = ""
    }

    // age validation
    let age = document.getElementById('age').value;
    if(isNaN(age) || age < 13){
        valid = false;
        document.getElementById('age-error').innerText = "*you must be older than 12 years old"
    }
    else{
        document.getElementById('age-error').innerText = ""
    }

    // gender choice validation
    let gender = document.querySelector('input[name = gender]:checked')
    if(!gender){
        valid = false;
        document.getElementById('gender-error').innerText = "*please select a gender"
    }
    else{
        document.getElementById('gender-error').innerText = ""
    }

    // email validation
    let email = document.getElementById('email').value;
    if(!email.endsWith('@gmail.com')){
        valid = false;
        document.getElementById('email-error').innerText = "*e-mail must end with @gmail.com"
    }
    else{
        document.getElementById('email-error').innerText = ""
    }

    // password validation
    let password = document.getElementById('password').value;
    if(!isAlphaNumeric(password) || password.length < 8){
        valid = false;
        document.getElementById('password-error').innerText = "*password must be more than 8 characters and \nalphanumeric (without symbols)!"
    }
    else{
        document.getElementById('password-error').innerText = ""
    }

    // confirm password validation
    let confirmpassword = document.getElementById('confirm-password').value;
    if(confirmpassword !== password){
        valid = false;
        document.getElementById('confirm-password-error').innerText = "*password must match above"
    }
    else{
        document.getElementById('confirm-password-error').innerText = ""
    }

    // ToS check validation
    let agreement = document.getElementById('terms').checked;
    if(!agreement){
        valid = false;
        document.getElementById('terms-error').innerText = "*you must agree to the ToS"
    }
    else{
        document.getElementById('terms-error').innerText = ""
    }

    console.log(valid);

    // submit validation
    if(valid == true){
        window.location.href='home.html'
    }
})

function isAlphaNumeric(password){
    // password numeric = ada angka dan huruf, ga ada simbol
    let hasNumber = false;
    let hasLetter = false;
    let hasSymbol = false;
    for(let i = 0; i < password.length; i++){
        const c = password[i];
        if(c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z'){
            hasLetter = true;
        }
        else if(c >= '0' && c <= '9'){
            hasNumber = true;
        }
        else{
            hasSymbol = true;
        }
    }
    return(hasLetter && hasNumber && !hasSymbol);
}