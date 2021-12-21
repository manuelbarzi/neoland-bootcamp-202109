var xhr = new XMLHttpRequest;

var url = "https://b00tc4mp.herokuapp.com/api/v2/";

var formRegister = document.getElementById("formRegister");

formRegister.onsubmit = function(event) {

    event.preventDefault();

    var inputs = this.getElementsByTagName("input");

    var user = {
        name        : inputs[0].value,
        username    : inputs[1].value,
        password    : inputs[2].value
    }

    xhr.onload = function() {
        alert(xhr.responseText +' - '+ xhr.statusText);
        formRegister.reset();
    }

    xhr.open("POST", url + "users");
    // POST sirve para enviar datos - https://b00tc4mp.herokuapp.com/api/v2/users

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify(user));
}


var formLogin = document.getElementById("formLogin");

formLogin.onsubmit = function(event) {
    event.preventDefault();
    var inputs = this.getElementsByTagName("input");

    var user = {
        username    : inputs[0].value,
        password    : inputs[1].value
    }

    xhr.onload = function () {// se ejecuta despues del POST 
        var status = xhr.status;

        // 409 peticion con algun error
        if (status === 409) {
            return alert('user already exists');
        }

        // 200 es igual a peticion correcta un OK
        if (status === 200) {
            formLogin.reset();
            alert("El usuario está verificado correctamente y tiene token");
        }

        var response = xhr.responseText;
        var token = response.slice(10, -2);
        alert("El token obtenido es: "+ token);

        var xhr2 = new XMLHttpRequest;

        xhr2.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                alert("Los datos del usuario son: " + xhr.responseText);
            }
        }

        xhr2.open("GET", url + "users");
        xhr2.setRequestHeader('Content-Type', 'application/json');
        xhr2.setRequestHeader('Authorization', 'Bearer ' + token);
    
        xhr2.send(JSON.stringify(user));

    }

    xhr.open("POST", url + "users/auth");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));

}

// Los pasos son:

// Crear la instancia xhr

// definir la función que lanza mi llamada

// DEfinir que va a ocurrir cuando la llamada obtenga la respuesta "xhr.onload"

// Abrir el canal de comunicación "xhr.open()"

// Configurar como nos vamos a comunicar "xhr.setRequestHeader()"

// Enviar la información del servidor "xhr.send({Info a enviar si hay})"