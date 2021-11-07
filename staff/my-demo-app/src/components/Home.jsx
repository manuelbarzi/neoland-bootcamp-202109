import {Component} from "react"
import { updateUserPassword } from "../logic"
import Profile from './Profile'
import Landing from "./Landing"

class Home extends Component{
    constructor(){
        super()
        
        this.state={view:'search'}
    }

    //logic
    
    updatePassword=(oldPassword, password)=>{
        try{
        updateUserPassword(sessionStorage.token, oldPassword,password,error=>{
            if(error){
                alert(error.message)
                return
            }
            alert('todo ok')
        })
        }catch(error){
            alert(error.message)
            return
        }
    }

    render(){
        const {props:{onSignOut, myUserName},updatePassword} = this
        return <>
        
        <div className="home container container--gapped container--vertical">
            <div className="container">
                <p>Hello, <span className="name">{myUserName}</span>!</p>
                <button type="button" className="button button-medium button--dark" onClick={()=> this.setState({view:'profile'})}>Profile</button>
                <button className="button button-medium button" onClick={()=>onSignOut()}>Sign out</button>
            </div>
            {this.state.view==='search'&& <form className="home__search container">
                <input className="field" type="text" name="query" id="query" placeholder="criteria" />
                <button type="submit" className="button button--medium button--dark">Search</button>
            </form>}

            {this.state.view==='profile'&&<Profile onGoBack={()=> this.setState({view:'search'})} onSubmitUpdate={updatePassword} onUnRegister={()=> this.setState({view:'unregister'})}   />}
            
        </div>
        {this.state.view === 'landing' && <Landing onSignIn={this.goToSignIn} onSignUp={this.goToSignUp}/>}
        </>
    }     
}
export default Home