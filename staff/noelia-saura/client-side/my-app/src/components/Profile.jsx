import {useState} from "react"
import UnRegister from "./UnRegister"

function Profile({onPasswordUpdate,goToHome}){
        const[view,setView]=useState('profile')

        const goToUnregister=()=>setView('unregister')
        const goBack=()=>setView('profile')

        return<div className="profile container container--vertical container--gapped ">
        {view === 'profile'&& 
        <div>
        <form className="container container--vertical" onSubmit={event =>{
        event.preventDefault()

        const oldPassword = event.target.oldPassword.value
        const password = event.target.password.value

        onPasswordUpdate (oldPassword,password)
        }}>
            <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
            <input className="field" type="password" name="password" id="password" placeholder="new password" />

            <div className="container">
                <button className="button button--medium" onClick= {goToHome}>Go back</button>
                <button className="button button--medium button--dark" type='submit'>Update</button>
            </div>
            <div className='container'>
            <button className="button button--medium button--dark" onClick={goToUnregister} >Unregister</button>
            </div>
        </form>
        </div>
        }
        {view === 'unregister'&& <UnRegister goToProfile={goBack} />}
    </div>
}

export default Profile