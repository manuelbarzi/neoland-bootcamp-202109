import { authorizeUser } from '../logic'

function SignIn({ onSignUp, onSignedIn }) {
    return (
        <form className="login container container--vertical" onSubmit={async event => {
            event.preventDefault()

            const { target: { username: { value: username }, password: { value: password } } } = event

            const user = {
                username,
                password
            }

            try {
                // showSpinner()

                const token = await authorizeUser(user)

                sessionStorage.token = token

                // hideSpinner()

                onSignedIn()

            } catch ({ message }) {
                // hideSpinner()

                // showModal("Error", message)
            }

            event.target.reset()
        }}>
            <input className="field" type="text" name="username" id="username" placeholder="username" />
            <input className="field" type="password" name="password" id="password" placeholder="password" />

            <div className="container">
                <button type="button" className="button button--medium" onClick={() => onSignUp()}>Sign up</button>
                <button type="submit" className="button button--medium button--dark">Sign in</button>
            </div>
        </form>
    
    )
}

export default SignIn