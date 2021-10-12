function describe(text) {
    console.log('%c' + text, 'font-weight: bold; font-size: 1rem; color:yellow')
}

function success(text) {
    console.log('%c' + text + ' ✅', 'font-weight: bold; color: green')
}

function fail(text) {
    console.log('%c' + text + ' ❌', 'font-weight: bold; color: red')
}