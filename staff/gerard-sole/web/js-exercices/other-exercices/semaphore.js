function semaphore(person = "cross", light = "green", cars = "wait") {
    var res = (person === 'cross' && cars === 'pass') ? false : true
    return res
}