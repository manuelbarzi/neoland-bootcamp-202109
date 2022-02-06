import { useLocation } from "wouter"

import Spinner from "components/Spinner"
import Feedback from "components/Feedback"

import useUser from 'hooks/useUser'

export default function Register() {
    const [, navigate] = useLocation()

    const { register, spinner, modal, level, acceptModal } = useUser()

    const handleSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value
        const username = e.target.username.value
        const password = e.target.password.value

        register(name, username, password)
    }

    return <>
        {spinner && <Spinner />}

        <div className="register">
            <h1 className="register__title">Register</h1>

            <form className="registerForm" onSubmit={handleSubmit}>
                <input className="input registerForm__input" type="text" name="name" id="name" placeholder="Name" />
                <input className="input registerForm__input" type="text" name="username" id="username" placeholder="Username" />
                <input className="input registerForm__input" type="password" name="password" id="password" placeholder="Password" />

                <button className="btn registerForm__btn">Register</button>
                <button className="btn registerForm__btn" onClick={() => navigate('/login')} >I have an account</button>
            </form>

            <p>By signing up, you agree to HAAKON´s <a href="/terms">Terms of Service</a> and <a href="/privacy_policy">Privacy Policy</a>.</p>
        </div>

        {modal && <Feedback level={level} message={modal} onAccept={acceptModal} />}
    </>
}