

function wait(millis){
    var before= Date.now()

    do{
        var after =Date.now()
    }while(after-before<millis)
}

console.log('case1',new Date(), 'start')

wait(3000) //Se ha quedado bloqueando el do

console.log('case 1',new Date(),'hola mundo')

console.log('case 1',new Date(),'end')

console.log('case 2',new Date(),'start')
//crea una variable con los minisegundos actual, y en el do quedate en bucle calculando el after, hasta que la resta no sea menor de millis
setTimeout(function(){
    console.log('case 2',new Date(),'hola mundo')
},3000)

wait(5000)

console.log('case 2',new Date(),'end')

console.log('etc')