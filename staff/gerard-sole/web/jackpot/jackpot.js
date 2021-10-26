describe('JACKPOT')
function jackpot(initCash) {
    var _initCash = initCash
    return {
        bet: function (ourNumber, ourBet) {
            if (_initCash >= ourBet && ourNumber === Math.floor(Math.random()*6)){
                win('Has ganado!')
                _initCash = _initCash + ourBet * 4;
            }else if(_initCash >= ourBet ){
                lost('Has perdido!')
                _initCash = _initCash - ourBet;
            }else{
                describe('No tienes dinero para apostar, tienes '+ _initCash +'. Usa play.addCash(cantidad)')         
            }
        },

        addCash: function (cash) {
            _initCash += cash
            describe('Se ha añadido '+ cash +' a tu cuenta. Saldo: '+ _initCash)
        },

        checkOut: function(cash) {
            if(cash<_initCash){
                _initCash -= cash
                describe('Se ha extraido '+ cash +' de tu cuenta. Saldo: '+ _initCash)
            }
            else
             describe('No tienes tanto dinero. Saldo: '+ _initCash)

        },
        
        myCash: function() {
            describe('your total money its ' + _initCash)
        }
    }
}

var player1 = jackpot(100)
var player2 = jackpot(100)


