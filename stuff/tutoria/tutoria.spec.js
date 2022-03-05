//test que devuelve de longitud n
const vector=require('./tutoria')
const { expect } = require('chai')


// var vector1=vector(3,5)

// if(vector1.length===3){
//     console.log('test ok')
// }else{
//     console.log('test ko')
// }

describe('vector', () => {
    it('vector length equal 3', done=> {
        const vector1 = vector(3,5)

        expect(vector1.length).to.equal(3)

        done()
    })
    it('vector contains the numbers inside the range [0-5]',done=>{
        const vector1 = vector(3,5)
        
        expect(vector1).to.include(0,1,2,3,4,5)

        done()
    })
});

