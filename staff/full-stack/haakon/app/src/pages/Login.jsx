import { useEffect } from "react"
import { useLocation } from 'wouter'

import Spinner from "components/Spinner"
import Feedback from "components/Feedback"

import useUser from 'hooks/useUser'

export default function Register() {
    const [, navigate] = useLocation()

    const { isLogged, login, spinner, modal, level, acceptModal } = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = e => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value

        login(username, password)
    }

    return <>
        {spinner && <Spinner />}
        <div className="login">
            <h1 className="login__title">Login</h1>

            <form className="loginForm" onSubmit={handleSubmit}>
                <input className="input loginForm__input" type="text" name="username" id="username" placeholder="Username" />
                <input className="input loginForm__input" type="password" name="password" id="password" placeholder="Password" />

                <div className="container">
                    <button type="submit" className="btn loginForm__btn">Login</button>
                    <button type="button" className="btn loginForm__btn" onClick={() => navigate('/register')}>Don't have account? Register</button>
                </div>
            </form>
        </div>
        {modal && <Feedback level={level} message={modal} onAccept={acceptModal} />}
    </>
}