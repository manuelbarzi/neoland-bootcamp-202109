// TODO

describe ('TEST push')
///Case 0
// var colors = ['verde','rojo','azul','amarillo']
// var otherColors = ['rosa']
// var res = thingsPush(colors)
// if (res === 'verde','rojo','azul','amarillo','rosa') {
//     success('test ok')
// }else{
//     fail('test failed')
// }

// //Case 1

// var colors = ['verde','rojo','azul','amarillo']
// var otherColors = ['rosa','lila']
// var res = thingsPush(colors)
// if (res === 'verde','rojo','azul','amarillo','rosa','lila') {
//     success('test ok')
// }else{
//     fail('test failed')
// }

// var colors = [1,2,3,4]
// var otherColors = [5,6]
// var res = thingsPush(colors)
// if(res == 1,2,3,4,5,6){
//     success('test ok')
// }else{
//     fail('test failed')
// }

// case resuelto en clase

var array = ['pigs','goats','sheep']
var res= push(array, 'cows')
if(typeof res === 'number'
    && res === 4
    && array.length===4
    && array[0]==='pigs'
    && array[1]==='goats'
    && array[2]==='sheep'
    && array[3]==='cows'){
success('test ok ')
}else{
fail('test fail')
}