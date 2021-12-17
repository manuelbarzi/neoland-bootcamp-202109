import { signupUser } from "../logic/index"


function SignUp({ goToPostSignUp, onSignIn }) {

    return (
        <>
        <h1 className="container container--vertical">Sign Up</h1>
        <form className="signup container container--vertical container--gapped" onSubmit={ async event => {
            event.preventDefault()

            // const name = event.target.name.value
            // TODO recoger los valores del formulario

            const user = {
                "name": "lunes",
             "username": "lunardins",
              "password": "123123123",
             "email": "lunes2@asd.com",
                "address": "joasdsdnpool35",
             "phone": 64482054,
             "province": "Tucuman",
             "location": "Barcelona",
              "country":"arg"  
            }

            try {

                const res = await signupUser(user) // pSAMOS UN OBJETO

                alert('Todo ha ido bien, has iniciado sesion')
                
                goToPostSignUp()

            }
            catch ({ message }) {

                alert(message)

            }

        }}>
            <input className="field" type="text" name="name" id="name" placeholder="name" />
            <input className="field" type="text" name="username" id="username" placeholder="username" />
            <input className="field" type="password" name="password" id="password" placeholder="password" />

            <div className="container">
                <button className="button button--medium" onClick={()=>onSignIn()} >Sign in</button>
                <button className="button button--medium button--dark">Sign up</button>
            </div>
        </form>
        </>
    )
}


export default SignUp