import { Component } from "react"
import Landing from "./Landing"

class UnRegister extends Component{
    constructor(){
        super()

        this.state={view:'unregister'}
    }
    render(){
        const{props:{onSubmitUnRegister},onGoBack}=this
        return<>
        {this.state.view==='unregister'&&<div className="unregister container container--vertical container--gapped">
           <form className="container container--vertical" onSubmit={(event)=>{
               event.preventDefault()
   
               const password = event.target.password.value
   
               onSubmitUnRegister(password)
           }}  >
               <input className="field" type="password" name="password" id="password" placeholder="password"/>
   
               <div className="container">
                   <button className="button button--medium" onClick={()=>onGoBack()}>Go back</button>
                   <button className="button button--medium button--dark"  >Unregister</button>
               </div>
           </form>
       </div>}
       {this.state.view==='landing'&& <Landing  />}
           
       </>
    }
}

export default UnRegister