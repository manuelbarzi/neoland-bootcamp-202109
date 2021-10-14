
function includes(array, value) {
    var bool = false
    for (let i = 0; (i < array.length&& bool ===false); i++) {
        if (value === array[i]){
            bool = true
        }
        }
        return bool;
    }
    