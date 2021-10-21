function semaphore(person = 'cross', light = 'green', cars = 'wait') {


        var peaton = (person === 'cross') && (cars === 'pass') ? true : false

        return peaton
     

}


// Genera una función que devuelva si el peaton muere (true o false)
// Implementa la solución solamente con ifs ternarios.