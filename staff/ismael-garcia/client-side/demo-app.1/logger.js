var logger = {
    info(message) {
        console.log('%cINFO %c' + new Date().toISOString() + ' %c' + message, 'color: green;', 'color: gold;' , 'color: green;')
    }
}