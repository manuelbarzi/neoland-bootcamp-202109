class Home extends React.Component{
    constructor (){
        super ()

        this.state = {view: 'home', vehicles: [], vehicle: null}
    }

    render () {
        return  <div className="pagelayout">
        <div className="title layout__title">
            <h1>RELAX</h1>
        </div>
        <div className="layout__subtitle">
            <p><strong className="name">Name</strong> YOU ARE AT HOME
            </p>
        </div>

        <Search
        onSearch ={ query => {
            try {   
                searchVehicles(query,(error, vehicles)=>{
                    if (error) { return alert(error.message)}
                   
                    this.setState({vehicles: vehicles})
                    
                })} catch (error) {
                    alert(error.message)}
        }}></Search>

        {!this.state.vehicle && <Results items={this.state.vehicles} onItem={vehicleId => {
            try {
                retrieveVehicle (vehicleId, (error, vehicle) => {
                    if (error) { return alert(error.message)}
                      this.setState({vehicle: vehicle})              
                })
            } catch (error) {
                alert(error.message)
            }
        }}></Results>}

        {this.state.vehicle && 
        <Detail
        item={this.state.vehicle}
        ></Detail>}
           
        <div className="layout__buttons--home-hi layout__buttons container--hide">
            <button className='button'>UPDATE PROFILE</button>
            <button className='button'>CHANGE PASSWORD</button>
            <button className='button'>DELETE ACCOUNT</button>
        </div>
        <div className="layout__buttons--home-low layout__buttons">
            <button className='button'>VIEW PROFILE</button>
            <button className='button'>SIGN OUT</button>
        </div>
        

    </div>
    }
}