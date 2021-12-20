import logger from '../logger'
import './SignIn.sass'
import image1 from '../images/msg2113249246-33268.jpg'
import image2 from '../images/msg2113249246-33271 (2).jpg'
import image3 from '../images/msg2113249246-33272.jpg'
import image4 from '../images/msg2113249246-33273.jpg'
import image5 from '../images/msg2113249246-33274.jpg'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'


function SignIn({onSignedIn, x}) {
    logger.debug('SignIn -> render')
    const image = [image1,image2,image3,image4,image5]
    return <>
        <div className="container">
            <div className="left">
                <img src={image[Math.floor(Math.random() * 5)]} />
            </div>
            <div className="right">
                <div>
                    <p className="right__title">MyNutriMethod</p>
                    <form onSubmit={async event => {
                        
                        event.preventDefault()

                        const { target: { username: { value: username }, password: { value: password } } } = event
                        
                        onSignedIn(username, password)

                    }}>
                        <div><TextField
                            margin="normal"
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        /></div>
                        <div><TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        /></div>
                        <div><Button type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >Sign in</Button></div>
                    </form>
                </div>

            </div>
        </div>

    </>
}

export default SignIn