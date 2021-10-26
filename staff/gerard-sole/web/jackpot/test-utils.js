function describe(text) {
    console.log('%c' + text, 'font-weight: bold; font-size: 1rem')
}

function win(text) {
    console.log('%c' + text + ' ✅', 'font-weight: bold; color: green')
}

function lost(text) {
    console.log('%c' + text + ' ❌', 'font-weight: bold; color: red')
}