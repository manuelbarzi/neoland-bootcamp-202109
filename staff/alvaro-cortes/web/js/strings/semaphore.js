function semaphore(person = "cross", light = "green", cars = "wait") {
    var bool = false

    copyPerson = (person === person) ? person : "cross";
    copyLight = (light === light) ? light : "green";
    copyCars = (cars === cars) ? cars : "wait"

    if(copyPerson === "cross" && copyLight === "red" && copyCars === "wait")
    bool = true
    if(copyPerson === "stop" && copyLight === "green" && copyCars === "pass")
    bool = true
    return bool
}


// Genera una función que devuelva si el peaton vive o muere (true o false)
// Implementa la solución solamente con ifs ternarios.