import './PostSignUp.css'

function PostSignUp({ onSignIn, onLanding }) {
    return <>
        <div class="registered container--off">
            <h1 class="registered__title">You have successfully registered</h1>
            <button class="btn btn--white registered__btn" onClick={() => onSignIn()}>Login</button>
            <button class="btn btn--white registered__btn" onClick={() => onLanding()}>Landing Page</button>
        </div>
    </>
}

export default PostSignUp