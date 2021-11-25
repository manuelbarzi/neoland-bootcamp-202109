function loopDeImpares (num,word) {
     for (i=0;i<=100;i++){
        const sum = i + num 
        if ( sum %2 === 1){
            console.log("i", i)
            console.log("num", num)
            console.log("sum", sum)
            console.log (word)
        }

     }
 }

 loopDeImpares (3,'impar')