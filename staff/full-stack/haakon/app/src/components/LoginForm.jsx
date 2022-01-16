import '../sass/styles.sass'
import { authenticateUser } from "../logic"
import { useLocation } from "wouter"

export default function LoginForm() {
    const [, navigate] = useLocation()

    const handleSubmit = async e => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value

        try {
            // onFlowStart()
            const token = await authenticateUser(username, password)
            sessionStorage.token = token
            navigate('/')
            // onFlowEnd()
            // okAuthenticateUser()
        } catch ({ message }) {
            console.log(message);
            // onFlowEnd()
            // onFeedback(message, 'warn')
        }
    }

    const handleBtnRegister = () => {
        navigate('/register')
    }

    return <>
        <div className="login">
            <h1 className="login__title">Login</h1>

            <form className="loginForm" onSubmit={handleSubmit}>
                <input className="input loginForm__input" type="text" name="username" id="username" placeholder="Username" />
                <input className="input loginForm__input" type="password" name="password" id="password" placeholder="Password" />

                <div className="container">
                    <button type="submit" className="btn loginForm__btn">Login</button>
                    <button type="button" className="btn loginForm__btn" onClick={handleBtnRegister}>Don't have account? Register</button>
                </div>
            </form>
        </div>
    </>
}