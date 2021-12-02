const { registerUser } = require('users')
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { body: { name, username, password } } = req

    try {
        registerUser(name, username, password)
            .then(confirm => res.status(201).send({confirm}))
            .catch(error => handleError(error, res))
    } catch (error) {
        // Maneja los errores síncronos
        // Maneja los errores que manejan los validates
        // Maneja los cortes de ejecución que lanza `throw` antes de hacer la llamada a `User.create`
        handleError(error, res)
    }
}

// 



// const foo = new Promise ((resolve, reject) => {
//     if (pass) resolve("pass") // El resolve será el then
//     else reject("not pass") // el catch será el reject
// })


// var sum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var suma = a + b
//             resolve(suma)
//         },1000)
//     })
// }

// var minus = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var minus = a - b
//             resolve(minus)
//         },1000)
//     })
// }

// sum(4, 5)
// .then(suma => {
//     minus(suma, 10)
//     .then(minus => console.log(minus))
// })


// var sum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var suma = a + b
//             resolve(suma)
//         },1000)
//     })
// }

// var minus = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var minus = a - b
//             resolve(minus)
//         },1000)
//     })
// }

// sum(4, 5)
// .then(suma => {
//     return minus(suma, 10)
// })
// .then(minus => console.log(minus))


// var sum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var suma = a + b
//             resolve(suma)
//         },1000)
//     })
// }

// var minus = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var minus = a - b
//             resolve(minus)
//         },1000)
//     })
// }

// sum(4, 5)
// .then(suma => minus(suma, 10)
// )
// .then(minus => console.log(minus))


// var sum = (a, b) => new Promise(resolve => setTimeout(() => resolve(a + b),1000))

// var minus = (a, b) => new Promise(resolve => setTimeout(() => resolve(a - b),1000))

// sum(4, 5).then(suma => minus(suma, 10)).then(minus => console.log(minus))