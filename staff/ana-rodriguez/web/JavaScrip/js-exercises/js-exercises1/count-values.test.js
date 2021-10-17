var res= countValues([true, true, false])

if(res instanceof Array 
   && res.length === 3
   && res[0] === 3
   && res[1] ===2
   && res[2] ===1

 ) {console.log('Test Ok')  
    
} else {
    console.error('Test Failed')
}