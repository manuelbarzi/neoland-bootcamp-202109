import {Component} from 'react'
import UnRegister from './UnRegister'
import {unregisterUser} from '../logic'
import Landing from './Landing'

class Profile extends Component{
    constructor(){
        super()
        this.state={view:'update-password'}
    }
    
    goToUnRegister=()=>this.setState({view:'unregister'})
    unRegister= (password)=>{
            try{
        unregisterUser(sessionStorage.token,password,error=>{
            if(error){
                alert(error.message)
                return 
            }
                alert('usuario borrado')
                delete sessionStorage.token
                this.setState({view:'landing'})
            })
        }catch(error){
                alert(error.message)
                
             }
    }
    render() {
        
        const {props:{onSubmitUpdate,onGoBack}, goToUnRegister,unRegister }= this
    return<>
        {this.state.view=== 'update-password'&& 
        <div className="profile container container--vertical container--gapped">
            <form className="container container--vertical"onSubmit={event => {event.preventDefault()
            
            const oldPassword =event.target.oldPassword.value
            const password =event.target.password.value

            onSubmitUpdate(oldPassword,password)
            }}>
                <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password"/>
                <input className="field" type="password" name="password" id="password" placeholder="new password"/>

             <div className="container">
                <button className="button button--medium" onClick={()=>onGoBack()}>Go back</button>
                <button className="button button--medium button--dark">Update</button>
            </div>
            </form>

            <button className="button button--medium button--dark" onClick={goToUnRegister}>Unregister</button>
        </div> 
        } 
           {this.state.view === 'unregister' && <UnRegister onSubmitUnRegister={unRegister} onGoBack={()=>this.setState ({view: 'update-password'})} />}
           {this.state.view==='landing'&& <Landing  />}
    </>
    }
}


export default Profile