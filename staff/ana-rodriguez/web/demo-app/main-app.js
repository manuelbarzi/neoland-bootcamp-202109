var xhr = new XMLHttpRequest;
var url = "https://b00tc4mp.herokuapp.com/api/v2/";

var landingContainer = document.querySelector('.landing')
var signInContainer = document.querySelector('.Sign-in')
var signInForm     =  document.querySelector('.sign-in__form')
var signUpContainer = document.querySelector('.Sign-up')
var thankyouContainer= document.querySelector('.Thank-you')
var homeContainer = document.querySelector('.home')
var profileContainer = document.querySelector(".form_profile")
var buttonProfile = document.querySelector('.button-profile')
var buttonSignOut = document.querySelector('.button-signout')
var buttonUpdate = document.querySelector('.button-Update')
var buttonGoBack = document.querySelector('.button-Goback')

var token

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
      
    var user = inputs [0].value
    var password = inputs[1].value

    try{
        signInCall(user,password, function(error, _token){
            if(error) result.alert(error.message)

            token = _token

            signInForm.reset() 

            try{
                retrieveSignIn(token, function(error, user){
                    if(error) return alert (error.message)
                     
                    var name = user.name
                    alert('Hola ' + name)

                    signInContainer.classList.add('container--off')

                    homeContainer.classList.remove('container--off')

                })
            }catch(error){
                alert(error.message)
            }

        })
    }catch(error){
        alert(error.message)
    }
}


signUpContainer.onsubmit = function(event){
    event.preventDefault()

    var inputs = signUpContainer.querySelectorAll('input')
    var firstName = inputs[0].value
    var lastName = inputs[1].value
    var email = inputs[2].value
    var password = inputs[3].value
    var confirmPassword = inputs[4].value

    // Aplicamos el bloque try catch
    // Configuramos el manejador de errores catch
    // Dentro de try llamar a la función que tienes en logic
    // En la callBack manejamos lo que necesitemos implementar
    
    try{
        signUpCall(firstName, lastName, email, password, confirmPassword, function(error){
            if(error) result.alert(error.message)

            signUpContainer.reset()

            signUpContainer.classList.add('container--off')

            thankyouContainer.classList.remove('container--off')
        })
    
    }catch(error){
        alert(error.message)
    }
}   

buttonProfile.onclick = function(event){
    event.preventDefault()

    homeContainer.classList.add('container--off')
    profileContainer.classList.remove('container--off')
}
  

profileContainer.onsubmit = function(event){
    event.preventDefault()
    formError = false;

    var profileInput = profileContainer.querySelectorAll(".input__input")

    var oldPassword = profileInput[0].value
    var newPassword = profileInput[1].value


    profileCall(oldPassword,newPassword,token,function(error) {
        if(error) result.alert(error.message)

        profileContainer.reset();

        profileContainer.classList.add('container--off')
        homeContainer.classList.remove('container--off')
    })
}
    
buttonGoBack.onclick = function(event){
    event.preventDefault()

    buttonGoBack.classList.add('container--off')
    homeContainer.classList.remove('container--off')
}


