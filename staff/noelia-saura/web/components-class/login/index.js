var myCollection = new UsersCollection

var foo = new User('Ventu','ventu@neoland.es','12345678')
myCollection.signUp(foo)
var formSignIn=document.getElementById('FormLogin')

formSignIn.onsubmit = function(event){
    event.preventDefault();
    var inputs=this.getElementsByTagName('input')
    var user = new User ('',inputs[0].value, inputs[1].value)
    var usuarioLogeado=myCollection.signIn(user)
    console.log(usuarioLogeado)
    //retornais los inputs
    //los guardas en un new User
}