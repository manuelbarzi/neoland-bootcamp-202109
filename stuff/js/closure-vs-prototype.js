//implementa la logica de una calculadora con una closure y el patron modulo--- programació funcional
var calculator = (function (){
    
    var result = 0

    return({
        getResult: function(){
            return result
        },
        setResult: function(x){
            result = x
            return this.getResult()
        },
        sum: function (){
            for(let i = 0; i < arguments.length;i++){
                result += arguments[i]
            }
            return this.getResult()
        },
        sub:function(){
            for(let i = 0; i < arguments.length;i++){
                result-=arguments[i]
            }
        }

    })
})()


//implementar la logica de una calculadora utilizando prototype--- POO (progrmación orientada a objetos)
function Calculator(){
    this.result=0
}
Calculator.prototype.getResult=function(){
    return this.result
}
Calculator.prototype.setResult=function(){
    this.result=x
    return this.getResult()
}
Calculator.prototype.sum=function(){
    for (let i=0; i<arguments.length;i++){
        this.result += arguments[i]
    }
    return this.getResult()
}
Calculator.prototype.sub=function(){
    for (let i=0; i<arguments.length;i++){
        this.result -= arguments[i]
    }
    return this.getResult()
}
var foo = new Calculator;