// ----- global variables -----
var user = {};
var token = "";


// ----- pages selectors -----
var landing = document.getElementById("landing");
var register = document.getElementById("register");
var logIn = document.getElementById("logIn");
var home = document.getElementById("home");
var profile = document.getElementById("profile");


// ----- logic page landing -----
var landingButtons = landing.getElementsByTagName("button");
var registerPage = landingButtons[0];
var logInPage = landingButtons[1];

registerPage.onclick = function() {
    landing.classList.add("panel--off");
    register.classList.remove("panel--off");
}

logInPage.onclick = function() {
    landing.classList.add("panel--off");
    logIn.classList.remove("panel--off");
}


// ----- logic page register -----
var registerButtons = register.getElementsByTagName("button");
var logInPage = registerButtons[0];
var registerBtn = registerButtons[1];

logInPage.onclick = function () {
    register.classList.add("panel--off");
    logIn.classList.remove("panel--off");
}

register.onsubmit = function(event) {
    event.preventDefault();
    var inputs = this.getElementsByTagName("input");
    var name = inputs[0];
    var username = inputs[1];
    var password = inputs[2];
    
    try {
        if (!password) throw new Error("Introduce un formato de contraseña válido");
        var user = {
            name     : name.value,
            username : username.value,
            password : password.value
        };
        logUpUser(user, function(err, res) {
            if (err) {
                injectableModal("template-modal", "Error", err.message);
            }
            else {
                injectableModal("template-modal", "Success", res.message);
                register.classList.add("panel--off");
                logIn.classList.remove("panel--off");
            }
            register.reset();
        })
    }
    catch (err) {
        injectableModal("template-modal", "Error", err.message);
        password = "";
    }
}

// ----- logic page logIn -----
var logInButtons = logIn.getElementsByTagName("button");
var registerPage = logInButtons[0];
var logInBtn = logInButtons[1];

registerPage.onclick = function () {
    logIn.classList.add("panel--off");
    register.classList.remove("panel--off");
}


logIn.onsubmit = function(event) {
    event.preventDefault();
    var inputs = this.getElementsByTagName("input");
    var username = inputs[0];
    var password = inputs[1];
    var _user = {
        username : username.value,
        password : password.value,
    }
    try {
        if (!password) throw new Error("Introduce un formato de contraseña válido");
        logInUser(_user, function(err, res) {
            if(err) {
                injectableModal("template-modal", "Error", err.message);
                logIn.reset();
            }
            else {
                user = res.user;
                token = res.token;
                injectableModal("template-modal", "Bienvenido", res.message);
                logIn.classList.add("panel--off");
                home.classList.remove("panel--off");
                logIn.reset();
            }
        })
    }
    catch(err) {
        injectableModal("template-modal", "Error", err.message);
        password.value = "";
    }
}


// ----- logic home page -----
var homeButtons = home.getElementsByTagName("button");
var logOutButton = homeButtons[0];
var profileButton = homeButtons[1];

logOutButton.onclick = function() {
    user = {};
    token = "";
    alert("Sesión cerrada correctamente");
    home.classList.add("panel--off");
    landing.classList.remove("panel--off");
}

profileButton.onclick = function() {
    home.classList.add("panel--off");
    profile.classList.remove("panel--off");
}


// ----- logic profile page -----
var profileButtons = profile.getElementsByTagName("button");
var forms = profile.getElementsByTagName("form");
var updateForm = forms[0];
var deleteForm = forms[1];
var backButton = profileButtons[2];

backButton.onclick = function() {
    profile.classList.add("panel--off");
    home.classList.remove("panel--off");
}

updateForm.onsubmit = function(event) {
    event.preventDefault();
    var inputs = this.getElementsByTagName("input");
    var oldPassword = inputs[0];
    var password = inputs[1];
    try {
        var _user = {
            username    : user.username,
            oldPassword : oldPassword.value,
            password    : password.value
        }
        if(!_user.password && !_user.oldPassword) throw new Error("Introduce un formato de contraseña válido");
        changePasswordUser(_user, token, function(err, res) {
            if(err) {
                alert(err.message);
                updateForm.reset();
            }
            else {
                alert(res);
                updateForm.reset();
            }
        })
    }
    catch(err) {
        alert(err.message);
        updateForm.reset();
    }
}

deleteForm.onsubmit = function(event) {
    event.preventDefault();
    var inputs = this.getElementsByTagName("input");
    var password = inputs[0];
    try {
        var _user = {
            username : user.username,
            password : password.value
        }
        if(!_user.password) throw new Error("Introduce un formato de contraseña válido");
        deleteUser(_user, token, function(err, res) {
            if(err) {
                alert(err.message);
                deleteForm.reset();
            }
            else {
                user = {};
                token = "";
                alert(res)
                profile.classList.remove("panel--off");
                landing.classList.add("panel--off");
                deleteForm.reset();
            }
        })
    }
    catch(err) {
        alert(err.message);
        password.value = "";
    }
}