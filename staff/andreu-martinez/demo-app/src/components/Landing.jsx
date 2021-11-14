function Landing(props){
    return <>
        <div className="landing container container--horizontal container--gapped">
            <div className="landing-links">
                    <a onClick={() => props.gotoLogin()}>Sign in</a>
                </div>
                <p className="rotation"> | </p>
                <div className="landing-links">
                    <a onClick={() => props.gotoRegister()}>Sign up</a>
            </div>
        </div>   
    </>
}

export default Landing