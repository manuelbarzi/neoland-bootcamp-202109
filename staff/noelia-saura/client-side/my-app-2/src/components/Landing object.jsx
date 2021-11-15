import React from 'react';
class Landing extends React.Component {

    render() {
        return <>
            <div className="landing container container--vertical container--gapped">
                <button className="button button--medium button--dark" onClick={this.props.onSignIn}>Sign in</button>
                <button className="button button--medium" onClick={this.props.onSignUp}>Sign up</button>
            </div>
        </>
    }
}



export default Landing