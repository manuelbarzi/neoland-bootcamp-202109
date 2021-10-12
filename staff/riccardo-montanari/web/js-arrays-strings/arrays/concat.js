function concat(array1, array2) {
    var finalArray = [];

    for (let i = 0; i < arguments.length; i++) {
        arguments[1] = array1
        arguments[2] = array2

        finalArray = (arguments[1] + arguments[2])
        
      

    }

        return finalArray
    }
