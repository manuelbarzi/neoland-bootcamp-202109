var res= numbers([-20, -57, 86, 13])

if (res instanceof Array   
 && res.length===3
 && res[0]=== 99
 && res[1] === -77
 && res[2] === 22

 ) { 
     console.log("test ok")
    
} else {
    console.error("test fail")
}