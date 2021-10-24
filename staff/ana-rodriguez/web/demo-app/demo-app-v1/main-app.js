var xhr = new XMLHttpRequest;
var url = "https://b00tc4mp.herokuapp.com/api/v2/";

var landingContainer = document.querySelector('.landing')
var signInContainer = document.querySelector('.Sign-in')
var signInForm     =  document.querySelector('.sign-in__form')
var signUpContainer = document.querySelector('.Sign-up')
var thankyouContainer= document.querySelector('.Thank-you')
var homeContainer = document.querySelector('.home')

var landingButton = landingContainer.querySelectorAll('button')

var landingSignInButton = landingButton[0]

landingSignInButton.onclick = function() {
    landingContainer.classList.add('container--off')
    signInContainer.classList.remove('container--off')
}

var landingSignUpButton = landingButton[1]

landingSignUpButton.onclick = function(){
    landingContainer.classList.add('container--off')
    signUpContainer.classList.remove('container--off')
}

var signUpLink = signUpContainer.querySelector('.link')

signUpLink.onclick = function(event){
    event.preventDefault()

    signUpContainer.classList.add('container--off')
    signInContainer.classList.remove('container--off')
}

var signInLink = signInContainer.querySelector('.links')

signInLink.onclick = function(event){
    event.preventDefault()

    signInContainer.classList.add ('container--off')
    signUpContainer.classList.remove('container--off')
} 

signInForm.onsubmit = function(event){
    event.preventDefault()
    var formError = false;

    var inputs = signInForm.querySelectorAll('input')
      
    var username = inputs [0].value
    var password = inputs[1].value


    var login ={
        username  : username,
        password  : password
    }

    if(!username.length){
        formError= true;
        return alert('username is empty')
    }

    if(!password.length){
        formError= true;
        return alert('password is empty')
    }
    if(!formError){
        xhr.onload = function() {
            var status = xhr.status;
            var response = xhr.responseText;
            var token = response.slice(10,-2);
            alert(response)
            
            if(status === 409)return alert('user already exist')
            if(status === 200){

                xhr.onload = function () {
                    var status = xhr.status;
                    if(status ===200){
                        signInForm.reset();
                        signInContainer.classList.add('container--off')  
                        homeContainer.classList.remove('container--off')
                    }
                }
                
                xhr.open("GET", url + "users");
                xhr.setRequestHeader('Content-Type','application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                xhr.send();

            }
        }

        xhr.open("POST", url + "users/auth");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(login));
    }
}


signUpContainer.onsubmit = function(event){
    event.preventDefault()
    var formError = false;

    var inputs = signUpContainer.querySelectorAll('input')
    var FirstName = inputs[0].value
    var LastName = inputs[1].value
    var Email = inputs[2].value
    var Password = inputs[3].value
    var ConfirmPassword = inputs[4].value

    var register = {
        name        : FirstName + ' ' + LastName,
        username    : Email,
        password    : Password
    }

    if(!FirstName.length){
        formError = true;
        return alert('name is empty');
    }
    
    if(!LastName.length){
        formError = true;
        return alert('last name is empty');
    }
    if(!Email.length){
        formError = true;
        return alert('email is empty');
    }    
    if(!Password.length){
        formError = true;
        return alert('Password is empty');
    }
    if(!ConfirmPassword.length && ConfirmPassword === Password){
        formError = true;
        return alert('Confirm password');
    }

    if(!formError){
        xhr.onload = function() {
            alert(xhr.responseText, xhr.statusText);
            signUpContainer.reset();

            signUpContainer.classList.add('container--off')
            thankyouContainer.classList.remove('container--off')
        }

        xhr.open("POST", url + "users");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(register));
    }
}


