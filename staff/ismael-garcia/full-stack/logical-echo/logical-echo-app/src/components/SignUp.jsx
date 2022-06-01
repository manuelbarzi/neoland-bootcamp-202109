import { useEffect } from 'react'
import logger from '../utils/logger'
import './SignUp.css'

function SignUp({ onSignUp, onSignIn }) {
    logger.debug('SignUp -> render')

    useEffect(() => {
        let navbar = document.querySelector('.navbar')
        let signup_form = document.querySelector('.signup-form')
        // let reference = document.querySelector('.nav-button-login')

        // signup.setAttribute("style", `top: ${reference.getBoundingClientRect().top + 40}px; left: ${reference.getBoundingClientRect().left}px;`)

        navbar.classList.add('show')
        signup_form.classList.add('show')
    }, [])

    return <>
        <div className="signup container container--vertical">
            <form className="signup-form centered-axis-xy form container--vertical" onSubmit={event => {
                event.preventDefault()

                const { target: { name: { value: name }, username: { value: username }, email: { value: email }, password: { value: password } } } = event 

                onSignUp(name, username, email, password)
            }}>
                <input className="field" type="text" name="name" id="register-name" placeholder="Name" required />
                <input className="field" type="text" name="username" id="register-username" placeholder="Username" required />
                <input className="field" type="email" name="email" id="register-email" placeholder="Email" required />
                <input className="field" type="password" name="password" id="register-password" placeholder="Password" required />

                <div className="container">
                    <button type="button" className="button button--medium" onClick={event => {
                        event.preventDefault()

                        onSignIn()
                    }}>Sign in</button>
                    <button type="submit" className="button button--medium button--emphasized clickable">Sign Up</button>
                </div>
            </form>
            {/* <div className="cover-image--outer">
                <div className="image parallax" data-ratex="0.5">
                    <img className="clickable" src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27054010_88.jpg?ts=1642070994249&imwidth=476&imdensity=2" alt="" />
                </div>
            </div> */}
        </div>
    </>
}

export default SignUp