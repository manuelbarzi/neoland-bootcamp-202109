import {Component} from 'react'
import { searchVehicles } from '../logic'
import { retrieveVehicle } from '../logic'
import { updatePassword } from '../logic'
import { unregisterUser } from '../logic'
import HeaderHome from './HeaderHome'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import ButtonsHome from './ButtonsHome'
import Profile from './Profile'
import ChangePassword from './ChangePassword'
import DeleteAccount from './DeleteAccount'


class Home extends Component{
    constructor (){
        super ()

        this.state = {view: 'home', vehicles: [], vehicle: null, name:null}
    }

    componentDidMount(){
        this.setState ({name: this.props.name})
    }

    search = query => {
        this.props.OnStartFlow()
        this.setState({vehicles: [], vehicle: null})
        try {   
            searchVehicles(query,(error, vehicles)=>{
                if (error) { 
                    alert(error.message)
                    this.props.OnEndFlow()
                
                } else {
                    this.setState({vehicles: vehicles})
                    this.props.OnEndFlow()
                }
            })
        } catch (error) {
                alert(error.message)
                this.props.OnEndFlow()
            }
    }

    getVehicleId = vehicleId => {
        this.props.OnStartFlow()
        try {
            retrieveVehicle (vehicleId, (error, vehicle) => {
                if (error) { 
                    alert(error.message)
                    this.props.OnEndFlow()
                
                } else {
                    this.setState({vehicle: vehicle})              
                    this.props.OnEndFlow()
                }
            })
        } catch (error) {
            alert(error.message)
            this.props.OnEndFlow()
        }
    }

    goToHome = ()=> this.setState({view: 'home'})
    goToProfile = ()=> this.setState({view: 'profile'})
    goToChangePassword = ()=> this.setState ({view: 'changePassword'})
    goToDeleteAccount = ()=> this.setState ({view: 'deleteAccount'})

    changePassword = (oldpassword, password) => {
        this.props.OnStartFlow()
        try {
            updatePassword(sessionStorage.token, oldpassword, password, (error) => {
                if (error) {
                    alert(error.message)
                    this.props.OnEndFlow()
                    
                } else {
                    this.setState({view: 'home'})
                    this.props.OnEndFlow()
                }                
                
            })
        } catch (error) {
            alert(error.message)
            this.props.OnEndFlow()
        }
      }

    deleteAccount = (password) => {
        this.props.OnStartFlow()
        try {
            unregisterUser(sessionStorage.token, password, (error) => {
                if (error) {
                    alert(error.message)
                    this.props.OnEndFlow()
                    
                } else {
                    this.props.OnDelete()
                    this.props.OnEndFlow()
                }
                
            })
        } catch (error) {
            alert(error.message)
            this.props.OnEndFlow()
        }
       }
    

    render () {
        return  <div className="pagelayout">
        
        {this.state.view === 'home' && <>
            <HeaderHome name={this.state.name}></HeaderHome>
            <Search onSearch ={this.search}></Search>

            {!this.state.vehicle && <Results 
                items={this.state.vehicles} 
                onItem={this.getVehicleId}
            ></Results>}

            {this.state.vehicle &&  <Detail 
                item={this.state.vehicle}
                OnBackList={() => this.setState ({vehicle : null})}
            ></Detail>}
            
            <ButtonsHome
                OnViewProfile={this.goToProfile}
                OnSignOut={()=> {this.props.OnSignOut()}}      
            ></ButtonsHome>
        </> }
        
        {this.state.view === 'profile' && <Profile
            name={this.state.name}
            OnBackHome={this.goToHome}
            OnSignOut={()=> {this.props.OnSignOut()}}
            OnChangePassword={this.goToChangePassword}
            OnDeleteAccount={this.goToDeleteAccount}
            ></Profile>}

        {this.state.view === 'changePassword' && <ChangePassword
            name={this.state.name}
          OnBackProfile={this.goToProfile}
          OnUpdate={this.changePassword}  
        ></ChangePassword>}

        {this.state.view === 'deleteAccount' && <DeleteAccount
           name={this.state.name}
           OnBackProfile={this.goToProfile}
           OnDelete={this.deleteAccount} 
        ></DeleteAccount>}
       
        </div>
    }
}

export default Home