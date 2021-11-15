function Signup (props){
    return (
    <form className="signup container container--vertical container--gapped">
        <input className="field" type="text" name="name" id="name" placeholder="name"></input>
        <input className="field" type="text" name="username" id="username" placeholder="username"></input>
        <input className="field" type="password" name="password" id="password" placeholder="password"></input>

        <div className="container">
            <button type='button' className="button button--medium" onClick={()=> props.onSignin()}>Sign in</button>
            <button type='submit' className="button button--medium button--dark">Sign up</button>
        </div>
    </form>
    )
}