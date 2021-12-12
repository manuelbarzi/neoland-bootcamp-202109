import logger from '../logger'
import { useContext } from 'react'
import AppContext from './AppContext'
import { signupUser } from '../logic'

function SignUp({ onSignedUp, onSignIn }) {
    logger.debug('SignUp -> render')

    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    return <form className="container container--vertical container--gapped" onSubmit={async event => {
        event.preventDefault()

        const { target: { name: { value: name }, username: { value: username }, password: { value: password }, gender:{value:gender}, email:{value:email} ,age:{value:age} } } = event

        try {
            onFlowStart()
        
            await signupUser(name, username, password,gender,email,age)

            onFlowEnd()

            onSignedUp()
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }}>
        <input className="field" type="text" name="name" id="name" placeholder="name" />
        <input className="field" type="text" name="username" id="username" placeholder="username" />
        <input className="field" type="password" name="password" id="password" placeholder="password" />
        <p className='input--gender'>
            gender: <br/>
            <input type="radio" name='gender' value ='women'/>Women <br/>
            <input type="radio" name='gender' value ='men'/>Men <br/>
            <input type="radio" name='gender' value ='others'/>Others <br/>
        </p> 
        <input className="field" type="email" name="email" id="email" placeholder="email" />
        <input className="field" type="text" name="age" id="age" placeholder="age" />
        <div className="button--container">
            
            <button className="button button--medium button--dark">Sign up</button>
            <button className="button button--medium" onClick={event => {
                event.preventDefault()
             
                onSignIn()
            }}>Sign in</button>
        </div>
    </form>
}

export default SignUp