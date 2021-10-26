// ----- global variables -----
var url = "https://b00tc4mp.herokuapp.com/api/v2";


function logUpUser(user, callback) {
    var xhr = new XMLHttpRequest;
    xhr.onload = function () {
        try {
            var status = xhr.status;
            switch (status) {
                case 201 : callback(null, "Usuario registrado correctamente"); break;
                case 400 : throw new Error("Faltan datos para procesar la petición");
                case 404 : throw new Error("No se ha podido establcer la conexión");
                case 409 : throw new Error("Este usuario ya está registrado");
                default  : throw new Error("Ops, respuesta del servidor no manejada");
            }
        }
        catch(err) {
            callback(err);
        }
    }
    xhr.open("POST", url + "/users");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));
}


function logInUser(user, callback) {
    function getData(user, token, callback) {
        var xhr = new XMLHttpRequest;
        xhr.onload = function () {
            try {
                var response = {
                    user    : JSON.parse(xhr.responseText),
                    token   : token,
                    message : "Bienvenido"
                }
                var status2 = xhr.status;
                switch (status2) {
                    case 200 : callback(null, response); break;
                    case 404 : throw new Error("No se ha podido establcer la conexión");
                    default  : throw new Error("Ops, respuesta del servidor no manejada");
                }
            }
            catch(err) {
                callback(err);
            }
        }
        xhr.open("GET", url + "/users");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.send(JSON.stringify(user));
    }
    var xhr = new XMLHttpRequest;
    xhr.onload = function() {
        try {
            var status = xhr.status;
            var response = xhr.responseText;
            var token = response.slice(10, -2);
            switch(status) {
                case 200 : getData(user, token, callback); break;
                case 401 : throw new Error("El usuario o la contraseña no son correctas o el usuario no está registrado o autorizado");
                case 404 : throw new Error("No se ha podido establcer la conexión");
                default  : throw new Error("Ops, respuesta del servidor no manejada");
            }
        }
        catch(err) {
            callback(err);
        }
    }
    xhr.open("POST", url + "/users/auth");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));
}


function changePasswordUser(user, token, callback) {
    var xhr = new XMLHttpRequest;
    xhr.onload = function() {
        try {
            var status = xhr.status;
            switch (status) {
                case 204 : callback(null, "El usuario ha sido modificado"); break;
                case 401 : throw new Error("Contraseña incorrecta o no existe el token, repita la operación");
                case 404 : throw new Error("No se ha podido establcer la conexión");
                default  : throw new Error("Ops, respuesta del servidor no manejada, el usuario no ha podido ser modificado");
            }
        }
        catch(err) {
            callback(err);   
        }
    }
    xhr.open("PATCH", url + "/users");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.send(JSON.stringify(user));
}


function deleteUser(user, token, callback) {
    var xhr = new XMLHttpRequest;
    xhr.onload = function() {
        try {
            var status = xhr.status;
            switch (status) {
                case 204 : callback(null, "El usuario ha sido eliminado"); break;
                case 401 : throw new Error("Contraseña incorrecta o no existe el token");
                case 404 : throw new Error("No se ha podido establcer la conexión");
                default  : throw new Error("Ops, respuesta del servidor no manejada, el usuario no ha podido ser eliminado");
            }
        }
        catch (err) {
            callback(err);
        }
    }
    xhr.open("DELETE", url + "/users");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.send(JSON.stringify(user));
}