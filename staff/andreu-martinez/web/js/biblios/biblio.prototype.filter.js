function filter(array, callback){
var result=[]
var j=0

    for (let i = 0; i < array.length; i++) {
        var element = array[i];
        
        if(callback(element,i)){
            result[j]=element
            j++
        }
    }
    return result
}