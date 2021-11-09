//Es una función que guarda referencias del estado adyacente (ámbito léxico).
// En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. 
//En JavaScript, las clausuras se crean cada vez que una función es creada.

console.log('>closures')
// primero creo la funcion de dentro que tiene referencia a la de fuera
function on(target){
    return function(value){
            return target + value
        }
}
// cuando invoco value busca el parametro value

var add= on(1) // add devuelve la funcion on(target)
console.log(add(2)) // nos devuelve target que es 1 (on(1)) + value que lo saca de (add(2)) en este caso 3
console.log(add(3)) // 4
console.log(add(2))// otra vez 3

var add= on(3)
console.log(add(2))// 5
console.log(add(3))// 6
console.log(add(2))// 5

//
function select(name) {
    return{ // new Object
        hello: function(){
            return 'Hello'+name+'!'
        },
        bye: function(){
            return 'Bye'+ name + '!'
        }
    }
}

var nico= select('Nico') // estoy llamando al parametro de select ()
var sergio = select('Sergio')

console.log(nico.hello())
console.log(sergio.hello())
console.log(nico.bye())
console.log(sergio.bye())

//

function box (secret, password){ 
    var _secret = secret// he creado una variable de _secret para no machacar el parametro
    var _password =password
    return{
        open: function(password){
            if(password === _password)
                return _secret
            else
                throw Error ('password does not match') // lanza el error en ese mensaje
        },
        replace: function(secret,password){
            if(password === _password)
                _secret = secret
            else
                throw Error ('password does not match')
        },
        updatePassword : function(password, newPassword){
            if(password===_password)
                _password = newPassword
            else
                throw Error ('password does not match')
        }
    }
}

var b1= box ('el primer secreto','123123123')
console.log(b1.open('123123123'))

b1.replace('el nuevo secreto','123123123')
console.log(b1.open('el segundo secreto','123123123'))

b1.updatePassword('123123123', '456456456')
// si hicieramos console.log(b1.password('123123123')) que es la contraseña antigua daria error
console.log(b1.password('456456456'))

//

// console.log('> closures')

// function on(target) {
//     return function (value) {
//         return target + value
//     }
// }

// var add = on(1)

// console.log(add(2))
// console.log(add(3))
// console.log(add(2))

// var add = on(3)

// console.log(add(2))
// console.log(add(3))
// console.log(add(2))

// //

// function select(name) {
//     return { // new Object
//         hello: function () {
//             return 'Hello, ' + name + '!'
//         },

//         bye: function () {
//             return 'Bye, ' + name + '!'
//         }
//     }
// }

// var nico = select('Nico')
// var sergio = select('Sergio')

// console.log(nico.hello())
// console.log(sergio.hello())

// console.log(nico.bye())
// console.log(sergio.bye())

// //

// function box(secret, password) {
//     var _secret = secret
//     var _password = password

//     return {
//         open: function (password) {
//             if (password === _password)
//                 return _secret
//             else
//                 throw Error('password does not match')
//         },

//         replace: function (secret, password) {
//             if (password === _password)
//                 _secret = secret
//             else
//                 throw Error('password does not match')
//         },

//         updatePassword: function(password, newPassword) {
//             if (password === _password)
//                 _password = newPassword
//             else
//                 throw Error('password does not match')
//         }
//     }
// }

// var b1 = box('el primer secreto', '123123123')

// console.log(b1.open('123123123'))
// // console.log(b1.open('123123123_')) // error

// b1.replace('el segundo secreto', '123123123')
// console.log(b1.open('123123123'))

// console.log(b1._password)
// console.log(b1._secret)

// b1.updatePassword('123123123', '456456456')
// // console.log(b1.open('123123123')) // error
// console.log(b1.open('456456456'))

// var b2 = box('otro secreto', 'abcabcabc')
// console.log(b2.open('abcabcabc'))

// console.log(b1.open('456456456'))