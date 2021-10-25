var xhr = new XMLHttpRequest;

var url = "https://b00tc4mp.herokuapp.com/api/v2/";

var formRegProduct = document.getElementById("formRegProduct");

formRegProduct.onsubmit = function (event) {
    event.preventDefault()

    var inputs = this.getElementsByTagName("input")

    var product = {
        name: inputs[0].value,
        ref: inputs[1].value,
        price: inputs[2].value,
        qtty: inputs[3].value,
    }

    xhr.onload = function() {
        alert(xhr.responseText, xhr.statusText);
        formRegProduct.reset();        
    }

    xhr.open("POST", url + "products");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(product));
}