// Styles
import '../sass/styles.sass'

// Logic
import { authenticateUser } from '../logic'

// React
import { useContext } from 'react'
import AppContext from './AppContext'

const Login = ({ okAuthenticateUser, handleBtnRegister }) => {
    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    return <>
        <h1 className="body__title">Login</h1>
        <form className="login" onSubmit={async event => {
            event.preventDefault()

            const username = event.target.username.value
            const password = event.target.password.value

            try {
                onFlowStart()
                const token = await authenticateUser(username, password)
                sessionStorage.token = token
                onFlowEnd()
                okAuthenticateUser()
            } catch ({ message }) {
                onFlowEnd()
                onFeedback(message, 'warn')
            }
        }}>

            <input className="input login__input" type="text" name="username" id="username" placeholder="Username" />
            <input className="input login__input" type="password" name="password" id="password" placeholder="Password" />

            <div className="container">
                <button type="submit" className="btn login__btn">Login</button>
                <button type="button" className="btn login__btn" onClick={() => handleBtnRegister()}>Don't have account? Register</button>
            </div>
        </form>
    </>
}

export default Login