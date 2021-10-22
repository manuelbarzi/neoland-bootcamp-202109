var xhr = new XMLHttpRequest

xhr.onload = function() {
    console.log(xhr.responseText)
}

// xhr.open('GET', 'https://b00tc4mp.com/index.html')
// xhr.open('GET', 'https://www.google.com/search?q=hola+mundo')

xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')
xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')
xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

xhr.setRequestHeader('Content-Type', 'application/json')
xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTcyZDkwMzZmOTZiNTAwMTc5ZmU1MDMiLCJpYXQiOjE2MzQ5MTY4MzcsImV4cCI6MTYzNDkyMDQzN30.TlDBfXV5_EnhhcHvJ8gIsBsaPDOKzlgpVr2Ai5f7vbE')

xhr.send('{ "name": "Pepito Grillo", "username": "ventuprueba@mail.com", "password": "123123123" }')
xhr.send('{ "username": "ventuprueba@mail.com", "password": "123123123" }')
xhr.send()