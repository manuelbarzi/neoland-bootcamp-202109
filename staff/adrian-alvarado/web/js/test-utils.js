function describe(text) {
    console.log(`%c${text}`, 'font-size: 1.3rem; font-weight: bold;')
}

function success(text) {
    console.log(`%c${text} 😎`, 'font-weight: bold; color: green;')
}

function fail(text) {
    console.log(`%c${text} 😭`, 'font-weight: bold; color: red;')
}