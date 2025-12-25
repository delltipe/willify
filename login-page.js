document.getElementById('login-form').addEventListener('submit', function (event){
    event.preventDefault();
    console.log("submit status");

    let valid = true;

    // username validation
    let username = document.getElementById('username').value;
    if(!isNaN(username)){
        valid = false;
        document.getElementById('username-error').innerText = "*please insert your username"
    }
    else{
        document.getElementById('username-error').innerText = ""
    }

    // password validation
    let password = document.getElementById('password').value;
    if(!isNaN(password)){
        valid = false;
        document.getElementById('password-error').innerText = "*please insert your password"
    }
    else{
        document.getElementById('password-error').innerText = ""
    }

    console.log(valid);

    // submit validation
    if(valid == true){
        window.location.href='home.html'
    }
})