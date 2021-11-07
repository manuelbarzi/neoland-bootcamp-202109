import React from "react"

class postSignUp extends React.Component {
    render() {
        return <>
            <div className="post-signup container container--gapped container--vertical ">
                <span>User registered successfully, now you can proceed to </span>
                <button className="button button--dark button--medium" onClick={this.props.onSignIn} >Sign in</button>
            </div>
        </>
    }
}

export default postSignUp
