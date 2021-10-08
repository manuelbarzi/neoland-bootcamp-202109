function getValue(numbers, target) {
    let asc = 0
    let max = 0
    let min = 0
    let valueSum = 0

    if(target === "max"){
        for(let i = 0; i < numbers.length; i++) {
            if(numbers[i] > max) {
                max = numbers[i]
            } 
        }
        return max
    }

    if(target === "min") {
        min = Math.min.apply(null, numbers)
        return min
    }

    if(target === "asc") {

        /*for(let i = 0; i < numbers.length; i++) {
            valueSum += numbers[i]
        }*/
        numbers.forEach(function(num){
            valueSum += num;
        })
        asc = valueSum / numbers.length
        return asc
    }
}