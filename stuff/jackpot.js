function jackpot(initCash) {
    var _initCash = initCash

    return {
        bet: function (ourNumber, ourBet) {
            if (_initCash >= ourBet && ourNumber === Math.floor(Math.random()*6)){
                console.log('Has acertado!')
                _initCash = _initCash + ourBet * 2;
            }else if(_initCash >= ourBet ){
                console.log('Has perdido!')
                _initCash = _initCash - ourBet;
            }else{
                console.log('No tienes dinero para apostar, tienes '+ _initCash +'. Usa play.addCash(cantidad)')         
            }
        },

        addCash: function (cash) {
            _initCash += cash
            console.log('Se ha añadido '+ cash +' a tu cuenta. Saldo: '+ _initCash)
        },

        checkOut: function(cash) {
            if(cash<_initCash){
                _initCash -= cash
                console.log('Se ha extraido '+ cash +' de tu cuenta. Saldo: '+ _initCash)
            }
            else
             console.log('No tienes tanto dinero. Saldo: '+ _initCash)

        },
        
        myCash: function() {
            console.log('your total money its ' + _initCash)
        }
    }
}

var play = jackpot(100)

