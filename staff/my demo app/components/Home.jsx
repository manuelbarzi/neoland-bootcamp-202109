class Home extends React.Component{
    constructor (){
        super ()

        this.state = {view: 'home', vehicles: [], vehicle: null}
    }

    render () {
        return  <>
        {this.state.view === 'home' && <HeaderHome></HeaderHome>}

        {this.state.view === 'home' && <Search
        onSearch ={ query => {
            try {   
                searchVehicles(query,(error, vehicles)=>{
                    if (error) { return alert(error.message)}
                   
                    this.setState({vehicles: vehicles})
                    
                })} catch (error) {
                    alert(error.message)}
        }}></Search>}

        {this.state.view === 'home' && !this.state.vehicle && <Results items={this.state.vehicles} onItem={vehicleId => {
            try {
                retrieveVehicle (vehicleId, (error, vehicle) => {
                    if (error) { return alert(error.message)}
                      this.setState({vehicle: vehicle})              
                })
            } catch (error) {
                alert(error.message)
            }
        }}></Results>}

        {this.state.view === 'home' && this.state.vehicle &&  <Detail 
        item={this.state.vehicle}
        OnBackList={() => this.setState ({vehicle : null})}
        ></Detail>}
        
        {this.state.view === 'home' && <ButtonsHome
            OnViewProfile={()=> this.setState({view: 'profile'})}
            OnSignOut={()=> {
                delete sessionStorage.token
                this.setState({view: 'signOut'})}}
            ></ButtonsHome>}

        {this.state.view === 'profile' && <Profile
            OnBackHome={()=> this.setState({view: 'home'})}
            OnSignOut={()=> {
            delete sessionStorage.token
            this.setState({view: 'signOut'})}}
            OnChangePassword={()=> this.setState ({view: 'changePassword'})}
            OnDeleteAccount={()=> this.setState ({view: 'deleteAccount'})}
            ></Profile>}

        {this.state.view === 'changePassword' && <ChangePassword
          OnBackProfile={()=> this.setState({view: 'profile'})}
          OnUpdate={(oldpassword, password) => {
            try {
                updatePassword(sessionStorage.token, oldpassword, password, (error) => {
                    if (error) {
                        alert(error.message)
                        return
                    }                    
                    
                    this.setState({view: 'home'})
                })
            } catch (error) {
                alert(error.message)
            }
          }}  
        ></ChangePassword>}

        {this.state.view === 'deleteAccount' && <DeleteAccount
           OnBackProfile={()=> this.setState({view: 'profile'})}
           OnDelete={(password) => {
            try {
                unregisterUser(sessionStorage.token, password, (error) => {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    delete sessionStorage.token
                    this.setState({view: 'signOut'})
                })
            } catch (error) {
                alert(error.message)
            }
           }} 
        ></DeleteAccount>}


        {this.state.view === 'signOut' && <App></App>}
    </>
    }
}