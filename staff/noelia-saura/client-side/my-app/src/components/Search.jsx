import React from "react"

class Search extends React.Component {
   
    render() {
        
        return <>
            <form className="home__search container" onSubmit={event =>{  
                              
                event.preventDefault()
                const query = event.target.query.value
                this.props.onSearch(query)
                this.props.goToSearch()
            }}>
                <input className="field" type="text" name="query" id="query" placeholder="criteria" />
                <button className="button button--medium button--dark" type='submit' >Search</button>
            </form>
        </>
    }
}

export default Search