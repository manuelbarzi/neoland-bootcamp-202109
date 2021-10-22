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
        alert(xhr.responseText, xhr.statusText);
        formRegister.reset();
    }

    xhr.open("POST", url + "users");
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

    xhr.onload = function () {
        var status = xhr.status;

        if (status === 409) return alert('user already exists');

        if (status === 200) {
            formLogin.reset();
            alert("El usuario está verificado correctamente y tiene token");
        }

        var response = xhr.responseText
        var token = response.slice(10, -2)
        alert("El token obtenido es: ", token);


        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                alert("Los datos del usuario son: " + xhr.responseText);
            }
        }

        xhr.open("GET", url + "users");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.send(JSON.stringify(user));

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