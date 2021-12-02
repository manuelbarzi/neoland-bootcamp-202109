// Expect Undefined
// var foo
// setTimeout(() => {
//     foo = 'hola'
// }, 1000)

// console.log(foo);


// Expect hola

// var foo
// setTimeout(() => {
//     foo = 'hola'
//     console.log(foo);
// }, 1000)


// Expect error
// const foo = ""
// setTimeout(() => {
//     foo = 'hola'
//     console.log(foo);
// }, 1000)

// Expect  Promise { <pending> }

// const foo = new Promise((resolve) => {

//     setTimeout( () => {
//         resolve('hola')
//     }, 1000)

// })

// console.log(foo)


// Expect "hola"

// const foo = new Promise((resolve) => {

//     setTimeout( () => {
//         resolve('hola')
//     }, 1000)

// })

// console.log(1, foo)

// foo.then(param => console.log(param))

// Function return promise

// const foo = () => {
//     return new Promise(resolve => {
//         setTimeout( () => {
//             resolve('hola')
//         }, 1000)
//     })
// }

// foo().then((param) => {
//     console.log(param)
// })