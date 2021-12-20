import './Register.sass'
import { registerUser } from '../logic'
import { useContext } from 'react'
import AppContext from './AppContext'

const Register = ({ okRegisterUser, handleBtnLogin }) => {
    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    return <>
        <h1 className="body__title">Register</h1>
        <form className="register container container--vertical container--gapped" onSubmit={async event => {
            event.preventDefault()

            const name = event.target.name.value
            const username = event.target.username.value
            const password = event.target.password.value

            try {
                onFlowStart()
                await registerUser(name, username, password)
                onFlowEnd()
                okRegisterUser()
            } catch ({ message }) {
                onFlowEnd()
                onFeedback(message, 'warn')
            }
        }}>

            <input className="input register__input" type="text" name="name" id="name" placeholder="Name" />
            <input className="input register__input" type="text" name="username" id="username" placeholder="Username" />
            <input className="input register__input" type="password" name="password" id="password" placeholder="Password" />

            <button className="btn register__btn">Register</button>
            <button className="btn register__btn" onClick={() => handleBtnLogin()} >I have an account</button>
        </form>

        <p>By signing up, you agree to HAAKON´s <a href="/terms">Terms of Service</a> and <a href="/privacy_policy">Privacy Policy</a>.</p>
    </>
}

export default Register