function PostSignUp({ onSignIn }) {
    return <>
        <p>Te has registrado satisfactoriamente</p>
        <button type="button" className="button" onClick={() => onSignIn()}>SignIn</button>
    </>
}

export default PostSignUp