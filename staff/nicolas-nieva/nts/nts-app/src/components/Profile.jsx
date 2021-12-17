import React from 'react'

function Profile ({onSubmitUpdate, onGoBack, onUnRegister}) {
    
        return <>
                <div className="profile container container--vertical container--gapped">
                    <form className="container container--vertical" onSubmit={event => {
                        event.preventDefault()

                        const oldPassword = event.target.oldPassword.value
                        const password = event.target.password.value

                        onSubmitUpdate(oldPassword, password)
                    }}>
                        <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
                        <input className="field" type="password" name="password" id="password" placeholder="new password" />

                        <div className="container">
                            <button type='button' className="button button--medium" onClick={() => onGoBack()}>Go back</button>
                            <button className="button button--medium button--dark">Update</button>
                        </div>
                    </form>

                    <button className="button button--medium button--dark" onClick={() => onUnRegister()}>Unregister</button>
                </div>

               

        </>
    }


export default Profile