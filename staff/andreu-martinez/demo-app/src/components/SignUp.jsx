import {signupUser} from '../logic'


function SignUp({ gotoLogin,showSpinner, hideSpinner, showFeedback }) {

    return <>
        <h1>Register</h1>
        <form className="signup container container--vertical container--gapped"
            onSubmit={event => {
                event.preventDefault()

                const { target: { name: { value: name }, username: { value: username }, password: { value: password } } } = event
                const user = {name, username, password}
                showSpinner()
                try{
                    signupUser(user, (error) =>{
                        if (error) {
                            
                            showFeedback(error.message)
                            return
                        }
                        hideSpinner()
                        gotoLogin()
                    })
                        
                }catch({message}){
                    showFeedback(message)
                    hideSpinner()
                }
                
            }}>
            <div className="container container--vertical container--gapped">
                <input className="field" autoComplete="off" type="text" name="name" id="name" placeholder="name" />
                <input className="field" autoComplete="off" type="text" name="username" id="username" placeholder="username" />
                <input className="field" autoComplete="off" type="password" name="password" id="password" placeholder="password" />
            </div>
            <div>
                <button className="button">Register</button>
            </div>
        </form>
        <a onClick={() => gotoLogin()}>Go to login</a>
    </>
}

export default SignUp