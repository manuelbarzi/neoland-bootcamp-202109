function postSignUp({onSignIn}){
    return <div className="post-signup container container--gapped container--vertical ">
    <span>User registered successfully, now you can proceed to </span>
    <button className="button button--dark button--medium" onClick={onSignIn} >Sign in</button>
</div>
}

export default postSignUp
