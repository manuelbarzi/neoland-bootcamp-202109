//test que devuelve de longitud n
const vector=require('./tutoria')
const { expect } = require('chai')


var vector1=vector(3,5)

if(vector1.length===3){
    console.log('test ok')
}else{
    console.log('test ko')
}

// describe('vector', () => {
//     it('', {
//         expect
//     })
// });
