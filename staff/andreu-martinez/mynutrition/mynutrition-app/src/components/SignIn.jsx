import {signinUser, retrieveUser} from '../logic'

function SignIn({gotoRegister, gotoHome, showSpinner, hideSpinner, showFeedback }) {

    return <>
        <h1>Login</h1>
        <form className="signin container container--vertical container--gapped"
            onSubmit={event => {
                event.preventDefault()

                const { target: { username: { value: username }, password: { value: password } } } = event
                showSpinner()
                try {
                    signinUser(username, password, (error, token) => {
                        if (error) {
                            showFeedback(error.message)
                            hideSpinner()
                            return
                        }

                        sessionStorage.token = token

                        try {
                            retrieveUser(token, (error, user) => {
                                if (error) {
                                    showFeedback(error.message)
                                    hideSpinner()
                                    return
                                }
                                
                                const { name } = user
                                hideSpinner()
                                gotoHome(name)
                            })
                        } catch ({ message }) {
                            showFeedback(message)
                            hideSpinner()
                        }
                    })
                } catch ({ message }) {
                    showFeedback(message)
                    hideSpinner()
                }

            }}>
            <div className="container container--vertical container--gapped">
                <input className="field" autoComplete="off" type="text" name="username" id="username" placeholder="username" />
                <input className="field" type="password" name="password" id="password" placeholder="password" />
            </div>
            <div>

                <button className="button">Login</button>
            </div>
        </form>
        <a onClick={() => gotoRegister()}>Go to register</a>
    </>

}

export default SignIn


